import React from "react";
import { useState } from "react";

const Time = ({ min, max, time, setTime }) => {

  const timeArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];
  return (
    <div className="time-container">
      Choose a time
      <input
        className="time-input-box"
        step="3600"
        min={min || "10:00"}
        max={max || "17:00"}
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      ></input>
    </div>
  );
};

export default Time;
