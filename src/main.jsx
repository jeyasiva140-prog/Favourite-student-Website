import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";
import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StudentProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </StudentProvider>
  </React.StrictMode>
);