import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../navbar/Navbar";
import Entry from "./Entry";
import "./journal.scss";

const Journal = () => {
  const [entries, setEntries] = useState(null);
  const { user } = useAuth0();

  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });

  useEffect(() => {
    const getEntries = async () => {
      const localURL = `http://localhost:5000/journal/${user.sub.slice(6)}/${
        today.getMonth() + 1
      }`;
      const response = await fetch(localURL).then((response) =>
        response.json()
      );
      console.log(response);
      setEntries(response);
    };
    getEntries();
  }, []);

  return (
    <>
      <main className="journal">
        <div className="container">
          <h3>
            {month}
            <FontAwesomeIcon icon={faAngleDown} size="sm" className="arrow" />
            <FontAwesomeIcon icon={faCalendarAlt} size="sm" className="calendar"/>
          </h3>
          {!!entries ? (
            <table>
              <tbody>
                {entries.map((entry) => (
                  <Entry
                  key={`${entry.id}-${entry.prompt_id}`}
                  entry={entry}
                  />
                ))}
              </tbody>
            </table>
          ) : (
            <p>No entries found for this month.</p>
          )}
        </div>
        <Navbar />
      </main>
    </>
  );
};

export default Journal;
