import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Weather from "./Weather";
import City from "./City";
import Temperature from "./Temperature";
import Conditions from "./Conditions";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Weather />
            <br />
            <City />
            <br />
            <div className="row">
              <div className="col">
                <Temperature value={19} />
              </div>
              <div className="col">
                <Conditions humidity={80} wind={10} />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="weather-forecast" id="forecast">
                  <Forecast />
                </div>
              </div>
            </div>
          </div>
          <small>
            <a
              href="https://github.com/celonen/react-weather"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>{" "}
            by Cassandra Elonen
          </small>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
