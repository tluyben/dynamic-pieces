#!/bin/bash

# Check if pieces.txt exists
if [ ! -f "pieces.txt" ]; then
    echo "Error: pieces.txt file not found in current directory."
    exit 1
fi

# Initialize the output file
output_file="generated_imports.ts"
echo "// Auto-generated import statements
import { Piece } from '@activepieces/pieces-framework';

// Define the type for piece imports
type PiecePackage = {
  [key: string]: {
    auth: any;
    piece: any;
  };
};

/**
 * Helper function to find properties case-insensitively
 * Looks for a property that matches the given name regardless of case
 */
function findProperty(obj: any, propName: string): any {
  // If the property exists with exact name, return it
  if (obj[propName] !== undefined) {
    return obj[propName];
  }
  
  // Do a case-insensitive search
  const lowerPropName = propName.toLowerCase();
  for (const key of Object.keys(obj)) {
    if (key.toLowerCase() === lowerPropName) {
      return obj[key];
    }
  }
  
    
  throw new Error(\`Property \${propName} not found in object\`);

}
" > "$output_file"

# Process pieces.txt, skipping empty lines
while IFS= read -r line; do
    # Skip empty lines
    [ -z "$line" ] && continue
    
    # Skip the pieces-common package and framework package
    if [[ "$line" == *"pieces-common"* ]] || [[ "$line" == *"pieces-framework"* ]]; then
        echo "Skipping package: $line" >&2
        continue
    fi
    
    # Extract everything after "piece-"
    if [[ "$line" == *"piece-"* ]]; then
        full_name_part=$(echo "$line" | sed -E 's/.*piece-//')
        
        # Split by hyphens and capitalize each part for PascalCase
        cap_full_name_part=""
        IFS='-' read -ra parts <<< "$full_name_part"
        for part in "${parts[@]}"; do
            cap_full_name_part+=$(echo "$part" | awk '{print toupper(substr($0,1,1)) substr($0,2)}')
        done
        
        # Write the import statement
        echo "import * as Piece${cap_full_name_part} from '${line}'" >> "$output_file"
        
        # Convert hyphens to nothing for property name
        original_name=$(echo "$full_name_part" | tr -d '-')
        
        # Remember this piece for the export section with auth and piece properties
        if [ -n "$piece_exports" ]; then
            piece_exports="${piece_exports}
  \"${cap_full_name_part}\": {
    auth: findProperty(Piece${cap_full_name_part}, '${original_name}Auth'),
    piece: findProperty(Piece${cap_full_name_part}, '${original_name}')
  },"
        else
            piece_exports="  \"${cap_full_name_part}\": {
    auth: findProperty(Piece${cap_full_name_part}, '${original_name}Auth'),
    piece: findProperty(Piece${cap_full_name_part}, '${original_name}')
  },"
        fi
    else
        echo "Warning: Skipping package without 'piece-' prefix: $line" >&2
    fi
done < pieces.txt

# Write the export section
echo -e "\nexport const pieceIntegrations: PiecePackage = {" >> "$output_file"
echo "$piece_exports" >> "$output_file"
echo "};" >> "$output_file"

echo "Generated import statements and export object in $output_file"