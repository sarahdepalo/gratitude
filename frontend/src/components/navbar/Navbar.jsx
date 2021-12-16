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
            <FontAwesomeIcon icon={faHome} size="lg" className="home" />
            <p>Prompt</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faBook} size="lg" className="book" />
            <p>Journal</p>
          </li>
          <li>
            <LogoutButton/>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
