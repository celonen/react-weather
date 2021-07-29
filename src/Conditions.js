import React from "react";

export default function Conditions(props) {
  return (
    <div className="Conditions">
      <div className="float-left">
        <ul>
          <li>Humidity: {props.humidity}%</li>
          <li>Wind: {props.wind} m/s</li>
        </ul>
      </div>
    </div>
  );
}
