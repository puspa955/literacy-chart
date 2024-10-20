import React from "react";

const XAxis = ({ xScale, data, height, margin }) => (
  <g transform={`translate(0, ${height - margin.bottom})`}>
    {data.map((d, i) => (
      <g key={i} transform={`translate(${xScale(d.country) + xScale.bandwidth() / 2}, 0)`}>
        <line y2="6" stroke="black" />
        <text
          transform="rotate(-45)"
          x={0}
          y={15}
          dy=".71em"
          textAnchor="end"
          style={{ fontSize: "10px" }}
        >
          {d.country}
        </text>
      </g>
    ))}
  </g>
);

export default XAxis;
