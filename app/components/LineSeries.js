// LineSeries.jsx
import React from "react";
import * as d3 from "d3";

const LineSeries = ({ data, xScale, yScale }) => {
  // Create a line generator
  const lineGenerator = d3.line()
    .x(d => xScale(d.country) + xScale.bandwidth() / 2)
    .y(d => yScale(d.value));

  return (
    <>
      {/* Line */}
      <path
        d={lineGenerator(data)}
        fill="none"
        stroke="#FF5733"
        strokeWidth={2}
      />

      {/* Data Points */}
      {data.map((d, i) => (
        <g key={i}>
          <circle
            cx={xScale(d.country) + xScale.bandwidth() / 2}
            cy={yScale(d.value)}
            r={3}
            fill="#FF5733"
          />
          {/* Point Labels */}
          <text
            x={xScale(d.country) + xScale.bandwidth() / 2}
            y={yScale(d.value) - 5}
            textAnchor="middle"
            style={{ fontSize: "10px" }}
          >
            {d.value}
          </text>
        </g>
      ))}
    </>
  );
};

export default LineSeries;
