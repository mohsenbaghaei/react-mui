import { Box, Typography } from "@mui/material";

const MuiLayout = () => {
  return (
    <>
      <Typography variant="h1">Layout</Typography>
      <Box component="span">Codevolution</Box>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": { backgroundColor: "info.light" },
        }}
      >
        Codevolution
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      ></Box>
    </>
  );
};

export default MuiLayout;
