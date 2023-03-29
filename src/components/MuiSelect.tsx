import { Box, TextField, MenuItem, Typography } from "@mui/material";
import { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      <Typography variant="h1">Select</Typography>
      <Box width="250px">
        <TextField
          label="Select contry"
          select
          value={country}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="IR">IRAN</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Austraia</MenuItem>
        </TextField>
      </Box>
      <Box width="250px">
        <TextField
          label="Select countries"
          value={countries}
          onChange={handleChange2}
          select
          fullWidth
          SelectProps={{ multiple: true }}
        >
          <MenuItem value="IR">IRAN</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Austraia</MenuItem>
        </TextField>
      </Box>
    </>
  );
};

export default MuiSelect;
