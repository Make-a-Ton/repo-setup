import { Grid, Typography } from "@mui/material";
import { TokenWrapper } from "./styles";
const Token = ({
  number,
  time,
  date,
  size = "medium",
  type = "upComing",
  handleTab,
  ...props
}) => {
  return (
    <TokenWrapper
      container
      flexDirection="column"
      type={type}
      size={size}
      onClick={handleTab}
      {...props}
    >
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        flex={1}
      >
        <Typography variant={size === "medium" ? "h2" : "h5"}>
          {number}
        </Typography>
        <Typography variant={size ? "body2" : "caption"} color="GrayText">
          {time}
        </Typography>
        <Typography variant={size ? "body2" : "caption"} color="GrayText">
          {date}
        </Typography>
      </Grid>
    </TokenWrapper>
  );
};
export default Token;
