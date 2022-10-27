import { Grid, styled } from "@mui/material";

export const DoctorCardWrapper = styled(Grid)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  border: "1px solid rgb(192,192,192,.1)",
  padding: theme.spacing(2),
  backgroundColor: "rgba(0,0,150,.1)"
}));
