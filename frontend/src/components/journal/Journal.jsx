import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import Navbar from "../navbar/Navbar";
import Entry from "./Entry";
import "react-datepicker/dist/react-datepicker.css";
import "./journal.scss";

const Journal = () => {
  const [entries, setEntries] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [datePickerOpen, setDatePickerOpen] = useState(false);
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

  const openDatePicker = () => {
    setDatePickerOpen(!datePickerOpen);
  };

  return (
    <>
      <main className="journal">
        <div className="container">
          <div className="title-container">
          <label>
          <DatePicker
              selected={startDate}
              defaultValue={month}
              onChange={(date) => setStartDate(date)}
              minDate={new Date("2021-12-01")}
              dateFormat="MMMM"
              showMonthYearPicker
              open={datePickerOpen}
              shouldCloseOnSelect={true}
              showPopperArrow={false}
            />


          <FontAwesomeIcon
              icon={faCalendarAlt}
              size="sm"
              className="calendar"
              onClick={openDatePicker}
            />
 
          </label>
          </div>

          {!!entries ? (
            <div className="table-container">
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
            </div>
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
