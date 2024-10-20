import React from "react";
import * as d3 from "d3";

const Axes = ({ xScale, yScale, data, width, height, margin, formatSI = d3.format(".2s") }) => (
  <>
    {/* X-axis */}
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

    {/* Y-axis */}
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
  </>
);

export default Axes;
