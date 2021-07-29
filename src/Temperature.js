import React from "react";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt="Clear"
        className="float-left"
      />
      <h1 className="float-left current-degrees">{props.value}</h1>
      <span class="units">
        <a href="/" id="celsius-link" className="float-left active">
          °C |
        </a>
        <a href="/" id="fahrenheit-link">
          {" "}
          °F
        </a>
      </span>
    </div>
  );
}
