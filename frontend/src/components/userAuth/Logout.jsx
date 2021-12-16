import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })} className="logout">
      <FontAwesomeIcon
      icon={faDoorOpen}
      size="lg"
      className="door"
      />
     <p>Logout</p> 
    </button>
  );
};

export default LogoutButton;