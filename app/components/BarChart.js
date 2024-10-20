"use client";
import React from "react";
import * as d3 from "d3";
import Scale from "./ChartUtils";
import ChartLabels from "./Chartcomponents"; 

const BarChart = ({ data, title, yLabel = "Population" }) => {
  const margin = { top: 60, right: 10, bottom: 60, left: 70 };
  const width = 600 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  // Create scales using the Scale component
  const { xScale, yScale } = Scale({ data, width, height, margin });

  const formatSI = d3.format(".2s");

  // Prepare bars
  const bars = data.map((d, i) => (
    <g key={i}>
      <rect
        x={xScale(d.country)}
        y={yScale(d.value)}
        width={xScale.bandwidth()}
        height={yScale(0) - yScale(d.value)}
        fill="#4A90E2"
      />
      {/* Labels on top of bars */}
      <text
        x={xScale(d.country) + xScale.bandwidth() / 2}
        y={yScale(d.value) - 5}
        textAnchor="middle"
        style={{ fontSize: "10px", fill: "#333" }}
      >
        {d.value}
      </text>
    </g>
  ));

  return (
    <svg width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}>
      {/* Chart Labels */}
      <ChartLabels title={title} yLabel={yLabel} width={width} height={height} margin={margin} />

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

      {/* Bars */}
      {bars}
    </svg>
  );
};

export default BarChart;
