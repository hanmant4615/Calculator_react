import React from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

function History() {
  const location = useLocation();
  const data1 = location.state || [];
  const values = data1.split(",");

  return (
    <div className="historydiv">
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
    </div>
  );
}

export default History;
