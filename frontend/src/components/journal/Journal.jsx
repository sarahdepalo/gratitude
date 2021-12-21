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
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [year, setYear] = useState(today.getFullYear());

  const { user } = useAuth0();

  useEffect(() => {
    const getEntries = async () => {
      const localURL = `http://localhost:5000/journal/${user.sub.slice(
        6
      )}/${month}/${year}`;
      const response = await fetch(localURL).then((response) =>
        response.json()
      );
      console.log(response);
      setEntries(response.status === 200 ? response.entries : null);
    };
    getEntries();
  }, [month, year]);

  const openDatePicker = () => {
    setDatePickerOpen(!datePickerOpen);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    let newDate = new Date(date);
    setMonth(newDate.getMonth() + 1);
    setYear(newDate.getFullYear());
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
                onChange={(date) => handleDateChange(date)}
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
