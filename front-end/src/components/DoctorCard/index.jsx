import { Typography, Grid } from "@mui/material";
import { DoctorCardWrapper } from "./styles";
const DoctorCard = ({ date, tokenNo }) => {
  return (
    <DoctorCardWrapper container>
      <Grid container item xs={10} textAlign="left" alignItems="center">
        <Typography variant="h5">{date}</Typography>
      </Grid>
      <Grid container item xs={2} flexDirection="column" textAlign="center">
        <Typography variant="h3">{tokenNo}</Typography>
        <Typography variant="h6">No Tokens</Typography>
      </Grid>
    </DoctorCardWrapper>
  );
};
export default DoctorCard;
