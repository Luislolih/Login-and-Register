import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextUsers } from "./ContextUsers/ContextUsers.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ContextUsers>
            <App />
        </ContextUsers>
    </React.StrictMode>
);
