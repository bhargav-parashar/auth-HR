import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { InputLabel } from "@mui/material";
import Select from "@mui/material/Select";

export default function SelectSmall({
  placeholder,
  items,
  name,
  value,
  handleChange,
  disabled,
  isHR
}) {
  return (
    <FormControl
      sx={{
        marginBottom: "10px",
        width: "100%",
        color: "white",
        fontSize: "0.875rem",
        "& .MuiInputLabel-root": {
          color:isHR?"black" : "lightgray",
          fontSize: "0.8rem",
          transform: "translate(14px, -9px) scale(0.75)",
        },
        "& .MuiOutlinedInput-root": {
          backgroundColor: isHR?" rgba(246,228,204,1)": "rgb(80, 79, 78)",
          fontSize: "0.875rem",
          "& fieldset": { borderColor: "lightgray" },
          "&:hover fieldset": { borderColor: "white" },
          "&.Mui-focused fieldset": { borderColor: "white" },
        },
        "& .MuiSelect-select": {
          color: isHR?"black" :"white",
          padding: "8px 10px",
          fontSize: "0.875rem",
          display: "flex",
          alignItems: "center",
        },
        "& .MuiSvgIcon-root": {
          color:isHR?"black" :"white",
        },
      }}
    >
      {value && <InputLabel shrink={true}>{placeholder}</InputLabel>}

      <Select
        name={name}
        value={value}
        displayEmpty
        onChange={handleChange}
        disabled={disabled}
        label={value ? placeholder : ""}
      >
        <MenuItem disabled value="">
          {placeholder}
        </MenuItem>
        {items.map((item, idx) => (
          <MenuItem key={idx} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
