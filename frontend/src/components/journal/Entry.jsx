import {useNavigate} from "react-router-dom";

const Entry = ({ entry }) => {
  const date = new Date(entry.entry_date);
  const dayOfWeek = date.toLocaleString("en-us", { weekday: "short" });
  const day = date.getDate();

  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/journal/${entry.id}`)
  }

  return (
    <tr onClick={() => handleClick()}>
      <th>
        <span className="day-of-week">{dayOfWeek}</span>
        <span className="day">{day}</span>
      </th>
      <td className="entry">{entry.question}</td>
    </tr>
  );
};

export default Entry;
