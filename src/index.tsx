import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReduxProvider from "./redux/provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ReduxProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReduxProvider>
);

reportWebVitals();
