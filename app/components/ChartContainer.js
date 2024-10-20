// ChartContainer.js
import React from "react";

const ChartContainer = ({ width, height, margin, children }) => {
  return (
    <svg width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {children}
      </g>
    </svg>
  );
};

export default ChartContainer;
