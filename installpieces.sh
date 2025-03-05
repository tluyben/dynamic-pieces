#!/bin/bash

# Check if pieces.txt exists
if [ ! -f "pieces.txt" ]; then
    echo "Error: pieces.txt file not found in current directory."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "Error: npm is not installed or not in the PATH."
    exit 1
fi

echo "Starting installation of packages from pieces.txt..."
echo "-----------------------------------------------------"

# Counter for successful and failed installations
success_count=0
fail_count=0
total_packages=0

# Process pieces.txt, skipping empty lines
while IFS= read -r package; do
    # Skip empty lines
    [ -z "$package" ] && continue
    
    ((total_packages++))
    
    echo "Installing: $package"
    if npm install "$package"; then
        echo "✅ Successfully installed: $package"
        ((success_count++))
    else
        echo "❌ Failed to install: $package"
        ((fail_count++))
    fi
    echo "-----------------------------------------------------"
done < pieces.txt

# Print summary
echo "Installation complete!"
echo "Total packages: $total_packages"
echo "Successfully installed: $success_count"
echo "Failed to install: $fail_count"

if [ $fail_count -gt 0 ]; then
    echo "Some packages failed to install. Please check the log above for details."
    exit 1
fi

echo "All packages were installed successfully."
exit 0