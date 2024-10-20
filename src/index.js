import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Calculator from "./component/calculator";
import Converter from "./component/coverter";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/covert" element={<Converter />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
