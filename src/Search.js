import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input type="search" value="Enter a city" />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
    </div>
  );
}
