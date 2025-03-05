import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Typography,
  Paper,
  Grid,
  SelectChangeEvent,
} from '@mui/material';

// Define the types for the different property types
type PropertyTypes = 
  | 'DYNAMIC' 
  | 'STATIC_DROPDOWN' 
  | 'OBJECT' 
  | 'JSON' 
  | 'CHECKBOX' 
  | 'NUMBER';

// Define the structure for dropdown options
type DropdownOption = {
  label: string;
  value: string;
};

// Define the structure for a property
type PropertyDefinition = {
  displayName: string;
  description?: string;
  required: boolean;
  type: PropertyTypes;
  options?: {
    options: DropdownOption[];
  };
  defaultProcessors?: any[];
  defaultValidators?: any[];
};

// Define the props for the component
interface PieceFormProps {
  properties: Record<string, PropertyDefinition>;
  onChange?: (formData: Record<string, any>) => void;
}

const PieceForm: React.FC<PieceFormProps> = ({ properties, onChange }) => {
  const [formData, setFormData] = useState<Record<string, any>>({});

  // Initialize form data with default values
  useEffect(() => {
    const initialData: Record<string, any> = {};
    
    Object.entries(properties).forEach(([key, prop]) => {
      // Set default values based on property type
      switch (prop.type) {
        case 'CHECKBOX':
          initialData[key] = false;
          break;
        case 'NUMBER':
          initialData[key] = '';
          break;
        case 'STATIC_DROPDOWN':
          initialData[key] = prop.options?.options[0]?.value || '';
          break;
        case 'OBJECT':
        case 'JSON':
          initialData[key] = '{}';
          break;
        default:
          initialData[key] = '';
      }
    });
    
    setFormData(initialData);
  }, [properties]);

  // Handle form field changes
  const handleChange = (key: string, value: any) => {
    const newFormData = { ...formData, [key]: value };
    setFormData(newFormData);
    
    if (onChange) {
      onChange(newFormData);
    }
  };

  // Get a display name for the field, using the property key if displayName is empty
  const getDisplayName = (key: string, property: PropertyDefinition): string => {
    if (property.displayName && property.displayName.trim() !== '') {
      return property.displayName;
    }
    
    // Format the key to be more readable
    return key
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  // Render a form field based on its type
  const renderField = (key: string, property: PropertyDefinition) => {
    const { description, required, type } = property;
    const displayName = getDisplayName(key, property);
    
    switch (type) {
      case 'STATIC_DROPDOWN':
        return (
          <FormControl fullWidth margin="normal" required={required}>
            <InputLabel id={`${key}-label`}>{displayName}</InputLabel>
            <Select
              labelId={`${key}-label`}
              id={key}
              value={formData[key] || ''}
              label={displayName}
              onChange={(e: SelectChangeEvent) => handleChange(key, e.target.value)}
            >
              {property.options?.options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {description && (
              <Typography variant="caption" color="text.secondary">
                {description}
              </Typography>
            )}
          </FormControl>
        );
        
      case 'CHECKBOX':
        return (
          <FormControlLabel
            control={
              <Checkbox
                checked={!!formData[key]}
                onChange={(e) => handleChange(key, e.target.checked)}
              />
            }
            label={
              <Box>
                <Typography variant="body1">{displayName}</Typography>
                {description && (
                  <Typography variant="caption" color="text.secondary">
                    {description}
                  </Typography>
                )}
              </Box>
            }
          />
        );
        
      case 'NUMBER':
        return (
          <TextField
            fullWidth
            margin="normal"
            id={key}
            label={displayName}
            type="number"
            value={formData[key]}
            onChange={(e) => handleChange(key, e.target.value)}
            required={required}
            helperText={description}
          />
        );
        
      case 'OBJECT':
      case 'JSON':
        return (
          <TextField
            fullWidth
            margin="normal"
            id={key}
            label={displayName}
            multiline
            rows={4}
            value={formData[key]}
            onChange={(e) => handleChange(key, e.target.value)}
            required={required}
            helperText={description || 'Enter valid JSON'}
            error={formData[key] && !isValidJson(formData[key])}
          />
        );
        
      case 'DYNAMIC':
      default:
        return (
          <TextField
            fullWidth
            margin="normal"
            id={key}
            label={displayName}
            value={formData[key]}
            onChange={(e) => handleChange(key, e.target.value)}
            required={required}
            helperText={description}
          />
        );
    }
  };

  // Helper function to validate JSON
  const isValidJson = (json: string): boolean => {
    try {
      JSON.parse(json);
      return true;
    } catch (e) {
      return false;
    }
  };

  return (
    <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Action Properties
      </Typography>
      <Grid container spacing={2}>
        {Object.entries(properties).map(([key, property]) => (
          <Grid item xs={12} key={key}>
            {renderField(key, property)}
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default PieceForm;