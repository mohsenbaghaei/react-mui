import { useState } from "react";

import { Box, Typography, FormControlLabel, Checkbox, FormControl, FormGroup, FormLabel } from "@mui/material";

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/BookmarkBorder'


const MuiCheckBox = () => {
  const [acceptTnc, setAcceptTnc] = useState(false);
  const [skills, setSkills] = useState<string[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnc(event.target.checked);
  };

  const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value)
    if(index === -1) {
        setSkills([...skills, event.target.value])
    } else {
        setSkills(skills.filter((skill) => skill !== event.target.value))
    }
  }

  return (
    <Box>
      <Typography variant="h1">CheckBox</Typography>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox checked={acceptTnc} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>} checked={acceptTnc} onChange={handleChange} />
      </Box>
      <Box>
        <FormControl>
            <FormLabel>Skiils</FormLabel>
            <FormGroup>
                <FormControlLabel value='html' label='Html' control={<Checkbox checked={skills.includes('html')} onChange={handleSkillsChange} />}/>
                <FormControlLabel value='css' label='Css' control={<Checkbox checked={skills.includes('css')} onChange={handleSkillsChange} />}/>
                <FormControlLabel value='javascript' label='Java Script' control={<Checkbox checked={skills.includes('javascript')} onChange={handleSkillsChange} />}/>
            </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckBox;
