#!/bin/bash

# Check if directory argument is provided
if [ -z "$1" ]; then
    echo "Error: Please provide a directory path as the first argument."
    echo "Usage: $0 <directory_path>"
    exit 1
fi

# Check if directory exists
if [ ! -d "$1" ]; then
    echo "Error: Directory '$1' does not exist."
    exit 1
fi

# Find all package.json files recursively and extract the "name" field
find "$1" -name "package.json" -type f | while read -r file; do
    # Extract the name field using grep and sed
    # This handles both quoted formats: "name": "value" and "name":"value"
    name=$(grep -o '"name"[[:space:]]*:[[:space:]]*"[^"]*"' "$file" | sed 's/"name"[[:space:]]*:[[:space:]]*"\([^"]*\)"/\1/')
    
    # Print the name if it was found
    if [ -n "$name" ]; then
        echo "$name"
    fi
done