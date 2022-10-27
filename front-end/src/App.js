import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="home" element={<div>home</div>} />
      </Routes>
    </Router>
  );
}

export default App;
