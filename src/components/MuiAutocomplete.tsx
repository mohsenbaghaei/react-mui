import { useState } from 'react';

import { Stack, Typography, Autocomplete, TextField } from '@mui/material';

    interface Skill  {
        id: number,
        label: string
    }
const MuiAutocomplete = () => {

    const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React']
    const [value, setValue] = useState<string | null>(null)
    const [skill, setSkill] = useState<Skill | null>(null)

    const skillsOptions = skills.map((skill, index) => ({
        id: index + 1,
        label : skill
    }))

    return (
        <Stack spacing={4} width='250px'>
            <Typography variant='h1'>Autocomplete</Typography>
            <Stack spacing={2}>
                <Autocomplete options={skills} renderInput={(params) => <TextField { ...params} label='skills'/>} value={value} onChange={(event: any, newValue: string | null) => setValue(newValue)} />
            </Stack>
            <Stack spacing={2}>
                <Autocomplete options={skills} renderInput={(params) => <TextField { ...params} label='skills'/>} value={value} onChange={(event: any, newValue: string | null) => setValue(newValue)} freeSolo/>
            </Stack>
            <Stack spacing={2}>
                <Autocomplete options={skillsOptions} renderInput={(params) => <TextField { ...params} label='skills'/>} value={skill} onChange={(event: any, newValue: Skill | null) => setSkill(newValue)} />
            </Stack>
        </Stack>
    );
};

export default MuiAutocomplete;