import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useLocation } from "react-router-dom";

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
    </div>
  );
}

export default History;
