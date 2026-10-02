
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Could not find the element with id="root" in index.html');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
