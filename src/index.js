import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ActiveBill from "./routes/active-bill";
import Home from "./routes/home";
import SplitBill from "./routes/split-bill";

/**
 * Application entry point.
 * Sets up routing for the Bill Splitter application with three main routes:
 * - Home: Landing page
 * - ActiveBill: Dashboard with current and recent bills
 * - SplitBill: Interactive bill splitting interface
 */
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="active-bill" element={<ActiveBill />} />
        <Route path="split-bill" element={<SplitBill />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// Performance monitoring - can be configured to send to analytics
reportWebVitals();
