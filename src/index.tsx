import React from "react";

import App from "./App";
import ReactDOM from "react-dom/client";
import "./index.scss";

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Failed to find the root element");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
