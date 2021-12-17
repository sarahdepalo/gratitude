const Entry = ({ entry }) => {
  const date = new Date(entry.entry_date);
  const dayOfWeek = date.toLocaleString("en-us", { weekday: "short" });
  const day = date.getDay();


  return (
    <tr>
      <th>
        <span className="day-of-week">{dayOfWeek}</span>
        <span className="day">{day}</span>
      </th>
      <td className="entry">{entry.question}</td>
    </tr>
  );
};

export default Entry;
