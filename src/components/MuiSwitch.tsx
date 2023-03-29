import { useState } from "react";

import { Box, Switch, Typography, FormControlLabel } from "@mui/material";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box>
      <Typography variant="h1">Switch</Typography>
      <FormControlLabel
        label="Dark Mode"
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            size="small"
            color="warning"
          />
        }
      />
    </Box>
  );
};

export default MuiSwitch;
