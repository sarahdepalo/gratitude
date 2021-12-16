import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../navbar/Navbar";
import "./journal.scss";

const Journal = () => {
  let today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  return (
    <>
      <main className="journal">
        <div className="container">
          <h3>
            {month} <FontAwesomeIcon icon={faAngleDown} size="sm" className="arrow"/>
          </h3>
        </div>
        <Navbar />
      </main>
    </>
  );
};

export default Journal;
