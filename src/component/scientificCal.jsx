import React, { useState } from "react";
import { create, all } from "mathjs";
import { FaBackspace, FaHistory } from "react-icons/fa";
import { RiSquareRoot } from "react-icons/ri";
import { FaPlusMinus } from "react-icons/fa6";
import { RxRulerHorizontal } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { CiCalculator2, CiDark } from "react-icons/ci";

let history = [];
const math = create(all);

const ScientificCalculator = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
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
    <div
      className={
        isDarkMode ? "dark-mode-cal-display " : "scientific-calculator"
      }
    >
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="sci-buttons">
        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={() => showHistory()}
          disabled={history.length === 0}
        >
          <FaHistory />
        </button>
        <button className={isDarkMode ? "dark-button" : ""}>
          <Link to="/convert">
            <RxRulerHorizontal />
          </Link>
        </button>
        <button className={isDarkMode ? "dark-button" : ""}>
          <Link to="/">
            <CiCalculator2 />
          </Link>
        </button>
        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={deleteChar}
        >
          <FaBackspace />
        </button>
        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={() => handleClick("sin(")}
        >
          sin
        </button>
        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={() => handleClick("cos(")}
        >
          cos
        </button>
        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={() => handleClick("tan(")}
        >
          tan
        </button>
        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={() => handleClick("*")}
        >
          *
        </button>

        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={() => handleClick("^")}
        >
          x<sup>2</sup>
        </button>
        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={() => handleClick("log(")}
        >
          log
        </button>
        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={() => handleClick("sqrt(")}
        >
          <RiSquareRoot />
        </button>
        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={() => handleClick("/")}
        >
          /
        </button>

        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={() => handleClick("(")}
        >
          (
        </button>
        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={() => handleClick(")")}
        >
          )
        </button>
        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={() => handleClick("-")}
        >
          <FaPlusMinus />
        </button>
        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={() => handleClick("-")}
        >
          -
        </button>

        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={() => handleClick("7")}
        >
          7
        </button>
        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={() => handleClick("8")}
        >
          8
        </button>
        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={() => handleClick("9")}
        >
          9
        </button>

        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={() => handleClick("+")}
        >
          +
        </button>

        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={() => handleClick("4")}
        >
          4
        </button>
        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={() => handleClick("5")}
        >
          5
        </button>
        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={() => handleClick("6")}
        >
          6
        </button>
        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={handleCalculate}
        >
          =
        </button>

        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={() => handleClick("1")}
        >
          1
        </button>
        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={() => handleClick("2")}
        >
          2
        </button>
        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={() => handleClick("3")}
        >
          3
        </button>
        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={handleClear}
        >
          C
        </button>

        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={() => handleClick("0")}
        >
          0
        </button>
        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={() => handleClick(".")}
        >
          .
        </button>
        <button
          className={isDarkMode ? "dark-button" : ""}
          onClick={toggleDarkMode}
        >
          <CiDark />
        </button>
      </div>
    </div>
  );
};

export default ScientificCalculator;
