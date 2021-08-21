import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("sw.js")
//     .then((registration) => {
//       console.log("SW Registered");
//       console.log(registration);
//     })
//     .catch((error) => {
//       console.log("SW Registration Failed");
//       console.log(error);
//     });
// } else {
// }
