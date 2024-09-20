import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import "./index.css";
// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";

// Import Global Context
import { GlobalProvider } from "./global/Globalcontext";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <GlobalProvider> {/* Wrap the App with GlobalProvider */}
        <App />
      </GlobalProvider>
    </MaterialUIControllerProvider>
  </BrowserRouter>
);
