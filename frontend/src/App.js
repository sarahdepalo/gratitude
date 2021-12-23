import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Homepage from "./components/Homepage/Homepage";
import Dashboard from "./components/dashboard/Dashboard";
import Journal from "./components/journal/Journal";
import EntryDetails from "./components/journal/EntryDetails";
import Redirect404 from "./components/redirect404/Redirect404";

function App() {
  toast.configure();
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={isAuthenticated ? <Navigate to="/dashboard"/> : <Homepage />} />
          <Route exact path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/"/>} />
          <Route exact path="/journal" element={isAuthenticated ? <Journal/> : <Navigate to="/" />} />
          <Route path ="/journal/:id" element={isAuthenticated ? <EntryDetails/> : <Navigate to="/" />}/>
          <Route path="*" element={<Redirect404/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
