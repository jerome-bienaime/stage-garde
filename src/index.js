import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./Routes/Page";
import Pages from "./Routes/Pages";
import ToPrint from "./Routes/ToPrint";
import SiteMap from "./Routes/SiteMap";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="pages" element={<Pages />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select a page</p>
              </main>
            }
          />
          <Route path=":pageId" element={<Page />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
        <Route path="toprint" element={<ToPrint />} />
        <Route path="sitemap" element={<SiteMap />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
