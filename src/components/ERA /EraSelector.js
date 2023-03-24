import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function EraSelector() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={EraList}
      sx={{ width: 800, bgcolor: 'brown', fontWeight: 'fontWeightHeavy',display: 'block', border: 5,borderRadius: 3,borderColor: 'primary.main' }}
      renderInput={(params) => <TextField {...params} label="ERA MOOD 🎶" />}
    />
    
  );
} 

// list of moods or music interest
const EraList = [
  { label: "Oldies" },
  { label: "GenX" },
  { label: "Mellenial"},
  { label: "Gen Z"},
];