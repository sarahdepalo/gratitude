import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Navbar from "../navbar/Navbar";
import "./journal.scss";

const EntryDetails = () => {
  const [entry, setEntry] = useState(null);
  const [userResponse, setUserResponse] = useState("");
  const [date, setDate] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const getEntry = async () => {
      const url = `https://gratitude-journal1.herokuapp.com/journal/${id}`;
      const response = await fetch(url).then((response) =>
        response.json()
      );
      setEntry(response);
      setUserResponse(response.response);
      formatDate(response);
    };
    getEntry();
  }, [id]);

  const handleChange = (event) => {
    setUserResponse(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "https://gratitude-journal1.herokuapp.com/journal/update";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        entry_id: id,
        user_response: userResponse,
      }),
    }).then((response) => response.json());
    if (response.status === 200) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
  };

  const formatDate = (entry) => {
    let journalDate = new Date(entry.entry_date);
    const dd = String(journalDate.getDate()).padStart(2, "0");
    const mm = journalDate.toLocaleString("default", { month: "short" });
    const yyyy = journalDate.getFullYear();
    journalDate = `${dd} ${mm} ${yyyy}`;
    setDate(journalDate);
  };


  return (
    <>
      <main className="entry-details">
        <div className="container">
          {!!entry && !!date ? (
            <form onSubmit={(event) => handleSubmit(event)}>
              <h3>{date}</h3>
              <h3 className="prompt">{entry.question}</h3>
              <small>Click on entry to edit.</small>
              <textarea
                value={userResponse}
                onChange={(event) => handleChange(event)}
                rows="10" cols="50"
              ></textarea>
              <button type="submit" className="btn btn-primary">
                Update Entry
              </button>
            </form>
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

export default EntryDetails;
