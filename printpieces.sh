#!/bin/bash

# Check if pieces.txt exists
if [ ! -f "pieces.txt" ]; then
    echo "Error: pieces.txt file not found in current directory."
    exit 1
fi

# Process pieces.txt, skipping empty lines
while IFS= read -r line; do
    # Skip empty lines
    [ -z "$line" ] && continue
    
    # Skip the pieces-common package and framework package
    if [[ "$line" == *"pieces-common"* ]] || [[ "$line" == *"pieces-framework"* ]]; then
        continue
    fi
    
    # Extract everything after "piece-"
    if [[ "$line" == *"piece-"* ]]; then
        # Extract the part after "piece-"
        package_name=$(echo "$line" | sed -E 's/.*piece-//')
        
        # Split by hyphens and capitalize each part for PascalCase
        cap_package_name=""
        IFS='-' read -ra parts <<< "$package_name"
        for part in "${parts[@]}"; do
            cap_package_name+=$(echo "$part" | awk '{print toupper(substr($0,1,1)) substr($0,2)}')
        done
        
        # Print just the PascalCase name without "Piece" prefix
        echo "$cap_package_name"
    fi
done < pieces.txt