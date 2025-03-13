import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import InputAdornment from "@mui/material/InputAdornment";

export default function SelectSmall({placeholder,items,name,value,handleChange,disabled}) {
  

  return (
    <FormControl sx={{
      marginBottom: "15px",
      width: "100%",
      color: "white",
      "& .MuiInputLabel-root": { color: "lightgray" },
      "& label.Mui-focused": { color: "white" },
      "& .MuiOutlinedInput-root": {
        backgroundColor: "rgb(80, 79, 78)",
        "& fieldset": { borderColor: "lightgray" },
        "&:hover fieldset": { borderColor: "white" },
        "&.Mui-focused fieldset": { borderColor: "white" },
      },
      "& .MuiInputBase-input": {
        color: "white",
      },
    }}>
      {
      <Select
        name={name}
        value={value}
        displayEmpty
        onChange={handleChange}
        // startAdornment={
        //   <InputAdornment position="start">
        //     <PlaceOutlinedIcon />
        //   </InputAdornment>
        // }
        disabled={disabled}
      >
        <MenuItem disabled value="">
         {placeholder}
        </MenuItem>
        {
          items.map((item,idx)=><MenuItem key={idx} value={item}>{item}</MenuItem>)
        }
        
      </Select>
      }   
    </FormControl>
  );
}