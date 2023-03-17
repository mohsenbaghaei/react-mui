import {
  Button,
  Stack,
  Typography,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import FormatBoldSharpIcon from "@mui/icons-material/FormatBoldSharp";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

import { useState } from "react";

// disableRipple === it disales the animation of click

const MuiButton = () => {

    const [formats, setFormats] = useState<string[]>([])
    const [formats2, setFormats2] = useState<string | null>(null)

    const handleFormatChange = (event : React.MouseEvent<HTMLElement>, updateFormats: string[]) => {
        setFormats(updateFormats)
    }

    const handleFormatChange2 = (event : React.MouseEvent<HTMLElement>, updateFormats: string | null) => {
        setFormats2(updateFormats)
    }

  return (
    <Stack spacing={4}>
      <Typography variant="h1">Button</Typography>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="www.google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="success">
          Success
        </Button>
        <Button variant="text" color="info">
          Info
        </Button>
        <Button variant="text" color="warning">
          Warning
        </Button>
        <Button variant="text" color="error">
          Error
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
        <Button variant="outlined" color="info">
          Info
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>

      <Stack spacing={2} direction="row" display="block">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />} disableRipple>
          Start
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          End
        </Button>
        <IconButton aria-label="icon" size="large" color="error">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction="row">
        <ButtonGroup
          variant="outlined"
          orientation="vertical"
          size="medium"
          color="secondary"
          aria-lable="button group"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup aria-label="text formating" value={formats} onChange={handleFormatChange}>
          <ToggleButton value="bold">
            <FormatBoldSharpIcon />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup aria-label="text formating" value={formats2} onChange={handleFormatChange2} exclusive>
          <ToggleButton value="bold">
            <FormatBoldSharpIcon />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
