import React, { useState } from "react";
import { create, all } from "mathjs";
import { FaHistory } from "react-icons/fa";
import { SlCalculator } from "react-icons/sl";
import { RxRulerHorizontal } from "react-icons/rx";
import { FaBackspace } from "react-icons/fa";
const math = create(all);
let history = [];
const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const deleteChar = () => {
    setInput((prevText) => prevText.slice(0, -1));
  };

  const showHistory = () => {
    console.log(history.length);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const data = math.evaluate(input);
      setResult(data);
      history.push(`${input} = ${data}`);
    } catch (error) {
      setResult("Invalid operation", error);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => showHistory()} disabled={history.length === 0}>
          <FaHistory />
        </button>
        <button>
          <a href="/covert">
            <RxRulerHorizontal />
          </a>
        </button>
        <button>
          <a href="\covert">
            <SlCalculator />
          </a>
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
  );
};

export default Calculator;
