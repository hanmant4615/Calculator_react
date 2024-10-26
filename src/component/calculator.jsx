import React, { useState } from "react";
import { create, all } from "mathjs";
import { FaHistory } from "react-icons/fa";
import { SlCalculator } from "react-icons/sl";
import { RxRulerHorizontal } from "react-icons/rx";
import { FaBackspace } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const math = create(all);
let history = [];

const Calculator = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const deleteChar = () => {
    setInput((prevText) => prevText.slice(0, -1));
  };

  const showHistory = () => {
    navigate("/history", { state: history.toString() });
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const data = Number(math.evaluate(input).toFixed(2));
      setResult(data);
      history.push(`${input} = ${data}`);
    } catch (error) {
      setResult("Invalid operation", error);
    }
  };

  return (
    <>
      <div key="display" className="calculator">
        <div className="display">
          <div className="input">{input}</div>
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          <button onClick={() => showHistory()} disabled={history.length === 0}>
            <FaHistory />
          </button>
          <button>
            <Link to="/convert">
              <RxRulerHorizontal />
            </Link>
          </button>
          <button>
            <Link to="/sci-cal">
              <SlCalculator />
            </Link>
          </button>
          <button onClick={() => deleteChar()}>
            <FaBackspace />
          </button>
          {["7", "8", "9", "/"].map((btn) => (
            <button key={btn} onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}
          {["4", "5", "6", "*"].map((btn) => (
            <button key={btn} onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}
          {["1", "2", "3", "-"].map((btn) => (
            <button key={btn} onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}
          {["0", ".", "=", "+"].map((btn) => (
            <button
              key={btn}
              onClick={btn === "=" ? handleCalculate : () => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
          <button onClick={handleClear}>C</button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
