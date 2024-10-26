import React, { useState } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Converter = () => {
  const [tempInputValue, setTempInputValue] = useState(0);
  const [temp, showTemp] = useState(false);
  const [area, showArea] = useState(false);
  const [length, showLength] = useState(true);
  const [tempFromUnit, setTempFromUnit] = useState("°C");
  const [tempToUnit, setTempToUnit] = useState("°F");
  const [tempResult, setTempResult] = useState(0);

  const convertTemperature = () => {
    let convertedResult;
    if (tempFromUnit === "°C") {
      convertedResult =
        tempToUnit === "°F"
          ? (tempInputValue * 9) / 5 + 32
          : parseFloat(tempInputValue) + 273.15;
    } else if (tempFromUnit === "°F") {
      convertedResult =
        tempToUnit === "°C"
          ? ((tempInputValue - 32) * 5) / 9
          : ((tempInputValue - 32) * 5) / 9 + 273.15;
    } else {
      convertedResult =
        tempToUnit === "°C"
          ? tempInputValue - 273.15
          : ((tempInputValue - 273.15) * 9) / 5 + 32;
    }
    setTempResult(convertedResult.toFixed(4));
  };

  const [lengthInputValue, setLengthInputValue] = useState(1);
  const [lengthFromUnit, setLengthFromUnit] = useState("cm");
  const [lengthToUnit, setLengthToUnit] = useState("inch");
  const [lengthResult, setLengthResult] = useState(0);

  const lengthConversionFactors = {
    cm: {
      inch: 0.393701,
      feet: 0.0328084,
      meter: 0.01,
      km: 0.00001,
      mi: 0.0000062137,
    },
    inch: {
      cm: 2.54,
      feet: 0.0833333,
      meter: 0.0254,
      km: 0.0000254,
      mi: 0.0000157828,
    },
    feet: {
      cm: 30.48,
      inch: 12,
      meter: 0.3048,
      km: 0.0003048,
      mi: 0.000189394,
    },
    meter: {
      cm: 100,
      inch: 39.3701,
      feet: 3.28084,
      km: 0.001,
      mi: 0.000621371,
    },
    km: { cm: 100000, inch: 39370.1, feet: 3280.84, meter: 1000, mi: 1.60934 },
    mi: { cm: 160934, inch: 63360, feet: 5280, meter: 1609.34, km: 1.60934 },
  };

  const convertLength = () => {
    const convertedResult =
      lengthInputValue * lengthConversionFactors[lengthFromUnit][lengthToUnit];
    setLengthResult(convertedResult.toFixed(4));
  };

  const [areaInputValue, setAreaInputValue] = useState(0);
  const [areaFromUnit, setAreaFromUnit] = useState("sqm");
  const [areaToUnit, setAreaToUnit] = useState("sqft");
  const [areaResult, setAreaResult] = useState(0);

  const areaConversionFactors = {
    sqm: {
      sqft: 10.7639,
      sqmi: 0.000247105,
      sqkm: 0.000001,
      acre: 0.000247105,
    },
    sqft: {
      sqm: 0.092903,
      sqmi: 0.0000229568,
      sqkm: 9.2903e-7,
      acre: 0.0000229568,
    },
    sqmi: { sqm: 2590000, sqft: 27878400, sqkm: 2.59, acre: 640 },
    sqkm: { sqm: 1000000, sqft: 10763910, sqmi: 0.386102, acre: 247.105 },
    acre: { sqm: 4046.86, sqft: 43560, sqmi: 0.0015625, sqkm: 0.00404686 },
  };

  const convertArea = () => {
    const convertedResult =
      areaInputValue * areaConversionFactors[areaFromUnit][areaToUnit];
    setAreaResult(convertedResult.toFixed(4));
  };

  return (
    <div className="converter-container">
      <h1>Unit Converter</h1>
      <div>
        <button
          onClick={() => {
            showArea(true);
            showLength(false);
            showTemp(false);
          }}
          className="convert-btn"
        >
          Area Convert
        </button>
        <button
          onClick={() => {
            showLength(false);
            showTemp(true);
            showArea(false);
          }}
          className="convert-btn"
        >
          temp Convert
        </button>
        <button
          onClick={() => {
            showLength(true);
            showTemp(false);
            showArea(false);
          }}
          className="convert-btn"
        >
          Length Convert
        </button>
        <button className="convert-button">
          <Link to="/">
            <IoChevronBackSharp />
          </Link>
        </button>
      </div>
      {length && (
        <section>
          <h2>Length Converter</h2>
          <input
            type="number"
            value={lengthInputValue}
            onChange={(e) => setLengthInputValue(parseFloat(e.target.value))}
            placeholder="Enter value"
            className="input-field"
          />
          <div className="selectors-container">
            <select
              className="unit-selectors"
              value={lengthFromUnit}
              onChange={(e) => {
                setLengthFromUnit(e.target.value);
                setLengthResult(0);
              }}
            >
              <option value="cm">Centimeter (cm)</option>
              <option value="inch">Inch (inch)</option>
              <option value="feet">Feet (feet)</option>
              <option value="meter">Meter (meter)</option>
              <option value="km">Kilometer (km)</option>
              <option value="mi">Mile (mi)</option>
            </select>
            <span className="arrow">→</span>
            <select
              className="unit-selectors"
              value={lengthToUnit}
              onChange={(e) => {
                setLengthToUnit(e.target.value);
                setLengthResult(0);
              }}
            >
              <option value="cm">Centimeter (cm)</option>
              <option value="inch">Inch (inch)</option>
              <option value="feet">Feet (feet)</option>
              <option value="meter">Meter (meter)</option>
              <option value="km">Kilometer (km)</option>
              <option value="mi">Mile (mi)</option>
            </select>
          </div>
          <p className="convert-result">Result: {lengthResult}</p>
          <button onClick={convertLength} className="convert-button">
            Convert
          </button>
        </section>
      )}

      {temp && (
        <section>
          <h2>Temperature Converter</h2>
          <input
            type="number"
            value={tempInputValue}
            onChange={(e) => setTempInputValue(parseFloat(e.target.value))}
            placeholder="Enter value"
            className="input-field"
          />
          <div className="selectors-container">
            <select
              className="unit-selectors"
              value={tempFromUnit}
              onChange={(e) => {
                setTempFromUnit(e.target.value);
                setTempResult(0);
              }}
            >
              <option value="°C">Celsius (°C)</option>
              <option value="°F">Fahrenheit (°F)</option>
              <option value="K">Kelvin (K)</option>
            </select>
            <span className="arrow">→</span>
            <select
              className="unit-selectors"
              value={tempToUnit}
              onChange={(e) => {
                setTempToUnit(e.target.value);
                setTempResult(0);
              }}
            >
              <option value="°C">Celsius (°C)</option>
              <option value="°F">Fahrenheit (°F)</option>
              <option value="K">Kelvin (K)</option>
            </select>
          </div>
          <p className="result">Result: {tempResult}</p>
          <button onClick={convertTemperature} className="convert-button">
            Convert
          </button>
        </section>
      )}

      {area && (
        <section>
          <h2>Area Converter</h2>
          <input
            type="number"
            value={areaInputValue}
            onChange={(e) => setAreaInputValue(parseFloat(e.target.value))}
            placeholder="Enter value"
            className="input-field"
          />
          <div className="selectors-container">
            <select
              className="unit-selectors"
              value={areaFromUnit}
              onChange={(e) => {
                setAreaFromUnit(e.target.value);
                setAreaResult(0);
              }}
            >
              <option value="sqm">Square Meter (sqm)</option>
              <option value="sqft">Square Feet (sqft)</option>
              <option value="sqmi">Square Mile (sqmi)</option>
              <option value="sqkm">Square Kilometer (sqkm)</option>
              <option value="acre">Acre (acre)</option>
            </select>
            <span className="arrow">→</span>
            <select
              className="unit-selectors"
              value={areaToUnit}
              onChange={(e) => {
                setAreaToUnit(e.target.value);
                setAreaResult(0);
              }}
            >
              <option value="sqm">Square Meter (sqm)</option>
              <option value="sqft">Square Feet (sqft)</option>
              <option value="sqmi">Square Mile (sqmi)</option>
              <option value="sqkm">Square Kilometer (sqkm)</option>
              <option value="acre">Acre (acre)</option>
            </select>
          </div>
          <p className="result">Result: {areaResult}</p>
          <button onClick={convertArea} className="convert-button">
            Convert
          </button>
        </section>
      )}
    </div>
  );
};

export default Converter;
