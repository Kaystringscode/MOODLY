import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";


export default function MoodSelector() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={moodList}
      sx={{ width: 800, bgcolor: 'brown', fontWeight: 'fontWeightHeavy',display: 'block', border: 5,borderRadius: 3,borderColor: 'primary.main' }}
      renderInput={(params) => <TextField {...params} label="GET IN YOUR MOOD 🎶" />}
    />
  );
} 

// list of moods or music interest
const moodList = [
  { label: "Happy" },
  { label: "Dreamy" },
  { label: "Relaxing" },
  { label: "Epic"},
  { label: "Sad"},
  { label: "Laid Back"},
  { label: "Hopeful"},
  { label: "Zen/Meditation"},
  { label: "Children"}
];