import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
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
            <FontAwesomeIcon icon={faDoorOpen} size="lg" className="door" />
            <p>Logout</p>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
