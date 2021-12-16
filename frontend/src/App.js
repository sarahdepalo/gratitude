import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Homepage from "./components/homepage/Homepage";
import Dashboard from "./components/dashboard/Dashboard";
import Journal from "./components/journal/Journal";

function App() {
  toast.configure();
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={isAuthenticated ? <Navigate to="/dashboard"/> : <Homepage />} />
          <Route exact path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/"/>} />
          <Route exact path="/journal" element={isAuthenticated ? <Journal/> : <Navigate to="/journal" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
