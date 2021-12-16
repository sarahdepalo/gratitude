import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook } from "@fortawesome/free-solid-svg-icons";
import LogoutButton from "../userAuth/Logout";
import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="icons">
          <li>
            <Link to="/dashboard">
              <FontAwesomeIcon icon={faHome} size="lg" className="home" />
              <p>Prompt</p>
            </Link>
          </li>
          <li>
            <Link to="/journal">
              <FontAwesomeIcon icon={faBook} size="lg" className="book" />
              <p>Journal</p>
            </Link>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
