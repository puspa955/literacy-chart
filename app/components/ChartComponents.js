// Chartcomponents.js
import React from "react";

const ChartLabels = ({ title, yLabel, width, height, margin }) => {
  return (
    <>
      {/* Title */}
      <text
        x={(width + margin.left + margin.right) / 2}
        y={margin.top / 2}
        textAnchor="middle"
        style={{ fontSize: "16px", fontWeight: "bold" }}
      >
        {title}
      </text>

      {/* Y-axis Label */}
      <text
        x={-(height / 3) - margin.top}
        y={margin.left / 3}
        textAnchor="middle"
        transform="rotate(-90)"
        style={{ fontSize: "14px" }}
      >
        {yLabel}
      </text>
    </>
  );
};

export default ChartLabels;
