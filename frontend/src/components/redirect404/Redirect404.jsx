import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import gif from "./gratitude404.gif";

const Redirect404 = () => {
  return (
    <>
      <div className="error-container">
        <img src={gif} alt="404 error page not found." className="error-gif" />
        <h2>We couldn't locate the page you're looking for. Try returning to home.</h2>
        <Link to="/" className="btn btn-primary">
          Return Home
        </Link>
      </div>
      <Navbar />
    </>
  );
};

export default Redirect404;
