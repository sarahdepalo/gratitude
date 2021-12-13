import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Homepage from "./components/homepage/Homepage";
import Dashboard from "./components/dashboard/Dashboard";
function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact path="/"
            element={!isAuthenticated ? <Homepage /> : <Dashboard />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
