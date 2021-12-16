import { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import "./dashboard.scss";

const Dashboard = () => {
  const [today, setToday] = useState("");
  const [prompt, setPrompt] = useState(null);

  useEffect(() => {
    const getPrompt = async () => {
      const url = `http://localhost:5000/prompts`;
      const response = await fetch(url).then((response) => response.json());
      setPrompt(response.question);
      console.log(response);
    };
    getPrompt();
    getDate();
  }, []);

  const getDate = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = today.toLocaleString("default", { month: "short" });
    const yyyy = today.getFullYear();
    today = `${dd} ${mm} ${yyyy}`;
    setToday(today);
  };

  return (
    <>
      <main className="dashboard">
        <div className="container">
          {prompt ? (
            <>
              <h3>{today}</h3>
              <h2 className="prompt">{prompt}</h2>
              <form>
                <textarea placeholder="Type your response..."></textarea>
                <button type="submit" className="btn btn-primary">
                  Save to Journal
                </button>
              </form>
            </>
          ) : (
            <div class="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
        <Navbar />
      </main>
    </>
  );
};

export default Dashboard;
