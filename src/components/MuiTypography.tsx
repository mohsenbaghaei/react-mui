import { Typography } from "@mui/material";

// gutterBottom === it will add margin to the bottom 

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">H1 Headeing</Typography>
      <Typography variant="h2">H2 Headeing</Typography>
      <Typography variant="h3">H3 Headeing</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        H4 Headeing
      </Typography>
      <Typography variant="h5">H5 Headeing</Typography>
      <Typography variant="h6">H6 Headeing</Typography>

      <Typography variant="subtitle1">Sub Title 1</Typography>
      <Typography variant="subtitle2">Sub Title 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est nam
        dignissimos voluptatum sit soluta repudiandae possimus at, aperiam,
        quia, sequi a autem temporibus sed alias. Amet dolor porro
        necessitatibus!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsum
        nesciunt dicta esse iste ut magnam consequuntur unde, quis iure sapiente
        tempore dolores cumque nisi natus. Provident delectus ab minima.
      </Typography>
    </div>
  );
};

export default MuiTypography;
