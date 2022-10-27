import { Grid, Button } from "@mui/material";
import DoctorCard from "../../../components/DoctorCard";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
const Bookings = () => {
  return (
    <Grid container flexDirection="column" padding={5}>
      <Grid container justifyContent="flex-end">
        <Link to="/doctors/appointments" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="success">
            <DashboardIcon sx={{ mr: 2 }} />
            Track
          </Button>
        </Link>
      </Grid>
      <Grid container spacing={2} pt={3}>
        {Array.from(Array(5).keys()).map((item) => (
          <Grid item xs={12}>
            <DoctorCard date="Saturday-23" tokenNo={20} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Bookings;
