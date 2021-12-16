import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";
import Navbar from "../navbar/Navbar";
import "./dashboard.scss";

const Dashboard = () => {
  const [today, setToday] = useState("");
  const [prompt, setPrompt] = useState(null);
  const [userResponse, setUserResponse] = useState("");

  const { user } = useAuth0();
  let navigate = useNavigate();

  useEffect(() => {
    const getPrompt = async () => {
      const localUrl = `http://localhost:5000/prompts/${user.sub.slice(6)}`;
      const response = await fetch(localUrl).then((response) =>
        response.json()
      );
      setPrompt(response);
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

  const handleChange = (event) => {
    setUserResponse(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userResponse === "") {
      toast.error("Entry cannot be blank.");
      return;
    }
    const localUrl = "http://localhost:5000/journal/add";
    const response = await fetch(localUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.sub.slice(6),
        userResponse: userResponse,
        date: new Date(Date.now())
          .toISOString()
          .replace("T", " ")
          .replace("Z", ""), //converts to Postgres acceptable date format
        prompt_id: prompt.id,
      }),
    }).then((response) => response.json());

    if (response.status === 200) {
      toast.success(response.message);
      navigate("/journal");
    } else {
      toast.error(response.message);
    }
  };

  return (
    <>
      <main className="dashboard">
        <div className="container">
          {prompt ? (
            <>
              <h3>{today}</h3>
              <h2 className="prompt">{prompt.question}</h2>
              <form onSubmit={(event) => handleSubmit(event)}>
                <textarea
                  placeholder="Type your response..."
                  value={userResponse}
                  onChange={(event) => handleChange(event)}
                ></textarea>
                <button type="submit" className="btn btn-primary">
                  Save to Journal
                </button>
              </form>
            </>
          ) : (
            <div className="lds-ring">
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
