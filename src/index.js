import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Calculator from "./component/calculator";
import Converter from "./component/converter";
import History from "./component/history";
import ScientificCalculator from "./component/scientificCal";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/convert" element={<Converter />} />
        <Route path="/sci-cal" element={<ScientificCalculator />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
