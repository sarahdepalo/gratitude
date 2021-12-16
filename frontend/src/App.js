import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Homepage from "./components/homepage/Homepage";
import Dashboard from "./components/dashboard/Dashboard";
import Journal from "./components/journal/Journal";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={isAuthenticated ? <Dashboard/> : <Homepage />} />
          <Route exact path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Homepage />} />
          <Route exact path="/journal" element={isAuthenticated ? <Journal/> : <Homepage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
