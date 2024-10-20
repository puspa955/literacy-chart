"use client";
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
        transform="rotate(-90)"
        x={-(height / 2)}
        y={margin.left / 3}
        textAnchor="middle"
        style={{ fontSize: "12px" }}
      >
        {yLabel}
      </text>
    </>
  );
};

export default ChartLabels;
