import React from "react";
import { useLocation } from "react-router-dom";

function History() {
  const location = useLocation();
  //   const data1 = location.data || {};
  const data1 = location.state || [];

  console.log(typeof data1);
  const values = data1.split(",");

  console.log(values);

  return (
    <>
      <div className="buttons">{values.map((e) => e)}</div>
      <button className="buttons">clear history</button>
    </>
  );
}

export default History;
