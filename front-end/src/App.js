import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="users">
          <Route path="/doctors">
            <Route path="search" element={<div>search</div>}/>
            <Route path=":id/tokens" >
              <Route path="list" element={<div>list</div>}/>
              <Route path="confirm" element={<div>confirm</div>}/>
            </Route>
          </Route>
          <Route path="login" element={<div>login</div>}/>
          <Route path="signup" element={<div>signup</div>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;