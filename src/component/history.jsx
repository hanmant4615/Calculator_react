import React, { useState } from "react";
import { CiDark } from "react-icons/ci";
import { IoChevronBackSharp } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

function History() {
  const location = useLocation();
  const data1 = location.state || [];
  const values = data1.split(",");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={isDarkMode ? "dark-historydiv" : "historydiv"}>
      <div>
        {values.map((e) => (
          <div id="display">{e}</div>
        ))}
      </div>
      <button className="btn">
        <MdDeleteOutline />
      </button>
      <button className="btn">
        <Link to="/">
          <IoChevronBackSharp />
        </Link>
      </button>
      <button
        className={isDarkMode ? "dark-btn" : "btn"}
        onClick={toggleDarkMode}
      >
        <CiDark />
      </button>
    </div>
  );
}

export default History;
