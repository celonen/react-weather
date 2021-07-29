import React from "react";
import "./index.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2">
          <div className="weather-forecast-date">Thu</div>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            width="42"
          />
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max"> 25° </span>
            <span className="weather-forecast-temperature-min"> 22° </span>
          </div>
        </div>
        <div className="col-2">
          <div className="weather-forecast-date">Fri</div>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            width="42"
          />
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max"> 29° </span>
            <span className="weather-forecast-temperature-min"> 20° </span>
          </div>
        </div>
        <div className="col-2">
          <div className="weather-forecast-date">Sat</div>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            width="42"
          />
          <div class="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max"> 27° </span>
            <span className="weather-forecast-temperature-min"> 17° </span>
          </div>
        </div>
        <div className="col-2">
          <div className="weather-forecast-date">Sun</div>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            width="42"
          />
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max"> 29° </span>
            <span className="weather-forecast-temperature-min"> 20° </span>
          </div>
        </div>
        <div className="col-2">
          <div className="weather-forecast-date">Mon</div>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            width="42"
          />
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max"> 28° </span>
            <span className="weather-forecast-temperature-min"> 19° </span>
          </div>
        </div>
        <div className="col-2">
          <div className="weather-forecast-date">Tue</div>
          <img
            src="http://openweathermap.org/img/wn/04d@2x.png"
            alt=""
            width="42"
          />
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max"> 28° </span>
            <span className="weather-forecast-temperature-min"> 20° </span>
          </div>
        </div>
      </div>
    </div>
  );
}
