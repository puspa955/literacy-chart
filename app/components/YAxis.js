import React from "react";
import * as d3 from "d3";

const YAxis = ({ yScale, width, margin, formatSI = d3.format(".2s") }) => (
  <g transform={`translate(${margin.left}, 0)`}>
    {yScale.ticks(5).map((tick, i) => (
      <g key={i} transform={`translate(0, ${yScale(tick)})`}>
        <line x2={width - margin.right} stroke="#ccc" strokeDasharray="2,2" />
        <line x2="-6" stroke="black" />
        <text
          x={-10}
          y={5}
          textAnchor="end"
          style={{ fontSize: "10px" }}
        >
          {formatSI(tick)}
        </text>
      </g>
    ))}
    <line y1={yScale(yScale.domain()[0])} y2={yScale(yScale.domain()[1])} stroke="black" />
  </g>
);

export default YAxis;
