import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Appointments } from "./pages/doctor";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark"
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="welcome" element={<div>welcome</div>} />
          <Route path="/users">
            <Route path="/users/doctors">
              <Route path="search" element={<div>search</div>} />
              <Route path=":id/tokens">
                <Route path="list" element={<div>list</div>} />
                <Route path="confirm" element={<div>confirm</div>} />
              </Route>
            </Route>
            <Route path="login" element={<div>login</div>} />
            <Route path="signup" element={<div>signup</div>} />
          </Route>
          <Route path="doctors">
            <Route path="login" element={<div>login</div>} />
            <Route path="signup" element={<div>signup</div>} />
            <Route path="appointments" element={<Appointments />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
