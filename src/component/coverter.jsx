import React, { useState } from "react";

function Coverter() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    "Select an option to convert"
  );

  const options = [
    "Milliseconds (ms)",
    "Seconds (s)",
    "Minutes (m)",
    "Hours (h)",
    "Days (d)",
    "Weeks (wk)",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div style={{ width: "500px" }}>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="styled-input"
          placeholder="Enter your text"
        />
      </div>
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          {selectedOption}
          <span className={`arrow ${isOpen ? "rotate" : ""}`}>
            {isOpen ? "▲" : "▼"}
          </span>
        </button>
        <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
          {options.map((option) => (
            <li
              key={option}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Coverter;
