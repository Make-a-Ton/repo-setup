import { Grid, styled } from "@mui/material";

export const TokenWrapper = styled(Grid)(({ theme, size, type }) => ({
  borderRadius: theme.shape.borderRadius,
  border: "1px solid rgb(192,192,192,.1)",
  padding: theme.spacing(size === "medium" ? 4 : 2),
  backgroundColor:
    type === "absent"
      ? "rgba(200,0,0,.3)"
      : type === "attended"
      ? "rgba(0,200,0,.3)"
      : type === "present"
      ? "rgba(100,100,0,.3)"
      : "rgba(0,0,150,.3)"
}));
