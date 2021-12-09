import ParticlesBG from "../ParticlesBG/ParticlesBG";
import "./homepage.scss";
const Homepage = () => {
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
              <button type="button" className="btn btn-primary">Login or Sign Up</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Homepage;
