import { Input, SxProps, TextField } from "@mui/material";
import React, { ChangeEventHandler, memo } from "react";

interface NormalInputProps {
  placeholder?: string;
  required?: boolean;
  type?: string | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  defaultValue?: string;
}

const NormalInput: React.FC<NormalInputProps> = memo(
  ({ placeholder, required, onChange, defaultValue, type }) => {
    return (
      <TextField
        required={required}
        onChange={onChange}
        defaultValue={defaultValue}
        type={type}
        variant="outlined"
        label={placeholder}
        sx={{ marginTop: "10px", marginBottom: "10px", width: "100%" }}
      />
    );
  }
);

NormalInput.displayName = "NormalInput";

export default NormalInput;
