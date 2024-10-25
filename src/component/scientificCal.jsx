import React, { useState } from "react";
import { create, all } from "mathjs";
import { FaBackspace, FaHistory } from "react-icons/fa";
import { RiSquareRoot } from "react-icons/ri";
import { FaPlusMinus } from "react-icons/fa6";
import { RxRulerHorizontal } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { CiCalculator2 } from "react-icons/ci";

let history = [];
const math = create(all);

const ScientificCalculator = () => {
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
      setResult("Invalid operation");
    }
  };

  return (
    <div className="scientific-calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="sci-buttons">
        <button onClick={() => showHistory()} disabled={history.length === 0}>
          <FaHistory />
        </button>
        <button>
          <Link to="/covert">
            <RxRulerHorizontal />
          </Link>
        </button>
        <button>
          <Link to="/">
            <CiCalculator2 />
          </Link>
        </button>
        <button onClick={deleteChar}>
          <FaBackspace />
        </button>
        <button onClick={() => handleClick("sin(")}>sin</button>
        <button onClick={() => handleClick("cos(")}>cos</button>
        <button onClick={() => handleClick("tan(")}>tan</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("^")}>
          x<sup>2</sup>
        </button>
        <button onClick={() => handleClick("log(")}>log</button>
        <button onClick={() => handleClick("sqrt(")}>
          <RiSquareRoot />
        </button>
        <button onClick={() => handleClick("/")}>/</button>

        <button onClick={() => handleClick("(")}>(</button>
        <button onClick={() => handleClick(")")}>)</button>
        <button onClick={() => handleClick("-")}>
          <FaPlusMinus />
        </button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>

        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={handleCalculate}>=</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={handleClear}>C</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("-")}>
          <FaPlusMinus />
        </button>
      </div>
    </div>
  );
};

export default ScientificCalculator;
