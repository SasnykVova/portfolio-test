import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../src/App";
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// "Menu structure react": {
// 		"prefix": "navmenu", // Короткий код, який викликатиме сніпет
// 		"body": [
// 			"<nav>",
// 			"  <ul>",
// 			"    <li><a href=\"#home\">Home</a></li>",
// 			"    <li><a href=\"#about\">About</a></li>",
// 			"    <li><a href=\"#services\">Services</a></li>",
// 			"    <li><a href=\"#contact\">Contact</a></li>",
// 			"  </ul>",
// 			"</nav>"
// 		],
// 		"description": "Basic semantic nav menu structure in React"
// 	}