import ParticlesBG from "../ParticlesBG/ParticlesBG";
import Login from "../userAuth/Login";
import { useAuth0 } from "@auth0/auth0-react";
import "./homepage.scss";

const Homepage = () => {
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated)
  return (
    <>
      <main className="intro">
        <ParticlesBG />
        <div className="container">
          <div className="sign-up-blurb">
            <div>
              <h1>Gratitude</h1>
              <p>
                Move towards a healthier, more balanced life by responding to engaging journal prompts.
              </p>
              <p>
                Journaling can help reduce stress and manage anxiety. Foster a habit of reflection, meditation, and growth.
              </p>
             <Login/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Homepage;
