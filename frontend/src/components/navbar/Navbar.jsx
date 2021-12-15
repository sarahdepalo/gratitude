import  LogoutButton  from "../userAuth/Logout";
import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav>
        <p>Navbar</p>
        <LogoutButton/>
      </nav>
    </>
  );
};

export default Navbar;
