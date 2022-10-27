import { useState } from "react";
import { Grid, Button, Tab, Tabs } from "@mui/material";
import Token from "../../../components/Token";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import { Link } from "react-router-dom";
const Appointments = () => {
  const [value, setValue] = useState(0);
  const handleTabChange = (e, tabId) => setValue(tabId);
  const handleTokenUpdate = (id, type) => () => console.log(id, type);
  return (
    <Grid container flexDirection="column" padding={5}>
      <Grid container justifyContent="flex-end">
        <Link to="/doctors/bookings" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="success">
            <ViewAgendaIcon sx={{ mr: 2 }} />
            Booking
          </Button>
        </Link>
      </Grid>
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Token
          number={22}
          time="14:10"
          date="23-10-22"
          sx={{ width: "fit-content" }}
          type="present"
        />
        <Grid container justifyContent="center" alignItems="center" my={3}>
          <Button color="success" sx={{ mr: 2 }} variant="contained">
            Attend
          </Button>
          <Button color="error" variant="contained">
            Absent
          </Button>
        </Grid>
      </Grid>
      <Tabs
        value={value}
        onChange={handleTabChange}
        aria-label="Token tabs"
        sx={{ my: 3 }}
      >
        <Tab label="Upcoming" id={0} />
        <Tab label="Attended" id={1} />
        <Tab label="Absent" id={2} />
      </Tabs>
      {value === 0 && (
        <Grid container spacing={2}>
          {Array.from(Array(10).keys()).map((item) => (
            <Grid key={item} item xs={3} md={2}>
              <Token
                number={item + 10}
                time="14:10"
                date="23-10-22"
                size="small"
              />
            </Grid>
          ))}
        </Grid>
      )}
      {value === 1 && (
        <Grid container spacing={2}>
          {Array.from(Array(10).keys()).map((item) => (
            <Grid item xs={3} md={2}>
              <Token
                number={item + 10}
                time="14:10"
                date="23-10-22"
                size="small"
                type="attended"
                handleTab={handleTokenUpdate(item, "absent")}
              />
            </Grid>
          ))}
        </Grid>
      )}
      {value === 2 && (
        <Grid container spacing={2}>
          {Array.from(Array(10).keys()).map((item) => (
            <Grid item xs={3} md={2}>
              <Token
                number={item + 10}
                time="14:10"
                date="23-10-22"
                size="small"
                type="absent"
                handleTab={handleTokenUpdate(item, "attended")}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
};

export default Appointments;
