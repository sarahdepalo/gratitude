import Navbar from "../navbar/Navbar";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <main className="dashboard">
        <div className="container">
            <h3>15 Dec 2021</h3>
            <h2 className="prompt">What are you grateful for today?</h2>
            <form>
              <textarea placeholder="Type your response..."></textarea>
              <button type="submit" className="btn btn-primary">Save to Journal</button>
            </form>
        </div>
        <Navbar/>
      </main>
    </>
  );
};

export default Dashboard;
