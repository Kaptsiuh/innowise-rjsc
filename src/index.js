import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { App } from "@app/App.jsx";
import { store } from "@app/store.js";
import "@common/styles/index.css";
import { HelmetProvider } from "react-helmet-async";

const basename = process.env.NODE_ENV === "production" ? "/innowise-rjsc" : "/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={basename}>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
