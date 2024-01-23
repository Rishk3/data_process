import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import wineData from "./wineData.json";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const wineDataAsNumbers = wineData.map((d: any) => ({
  Alcohol: parseFloat(d.Alcohol) || 0,
  "Malic Acid": parseFloat(d["Malic Acid"]) || 0,
  Ash: d.Ash === "" ? 0 : parseFloat(d.Ash) || 0,
  "Alcalinity of ash":
    d["Alcalinity of ash"] === "" ? 0 : parseFloat(d["Alcalinity of ash"]) || 0,
  Magnesium: parseFloat(d.Magnesium) || 0,
  "Total phenols": parseFloat(d["Total phenols"]) || 0,
  Flavanoids: parseFloat(d.Flavanoids) || 0,
  "Nonflavanoid phenols": parseFloat(d["Nonflavanoid phenols"]) || 0,
  Proanthocyanins: parseFloat(d.Proanthocyanins) || 0,
  "Color intensity": parseFloat(d["Color intensity"]) || 0,
  Hue: parseFloat(d.Hue) || 0,
  "OD280/OD315 of diluted wines":
    parseFloat(d["OD280/OD315 of diluted wines"]) || 0,
  Unknown: parseFloat(d.Unknown) || 0,
}));

root.render(
  <React.StrictMode>
    <></>
    <App wineData={wineDataAsNumbers} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
