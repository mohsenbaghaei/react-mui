import { Stack, TextField, InputAdornment, Typography } from "@mui/material";
import { useState } from "react";

const MuiTextField = () => {
  const [value, setValue] = useState<string>("");

  return (
    <Stack spacing={4}>
      <Typography variant="h1">Text Field</Typography>
      <Stack spacing={2} display="block">
        <TextField
          label="Password"
          error={!value}
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          helperText={
            value ? "Do not share your password with anyone" : "Required"
          }
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="outlined" variant="outlined" />
        <TextField label="filled" variant="filled" />
        <TextField label="standard" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="small secondary"
          size="small"
          color="secondary"
          error
        />
        <TextField label="Form Input" required />
        <TextField
          label="Password"
          type="password"
          helperText="Do not share your password with anyone"
          disabled
        />
        <TextField label="Form Input" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
