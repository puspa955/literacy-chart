"use client";
import React from "react";
import * as d3 from "d3";
import Scale from "./ChartUtils"; 
import Axes from "./Axes"; 
import ChartLabels from "./Chartcomponents"; 

const LineChart = ({ data, title, yLabel = "Population Growth" }) => {
  const margin = { top: 60, right: 10, bottom: 60, left: 70 };
  const width = 600 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  // Create scales using the Scale component
  const { xScale, yScale } = Scale({ data, width, height, margin });

  const line = d3.line()
    .x(d => xScale(d.country) + xScale.bandwidth() / 2)
    .y(d => yScale(d.value));

  // Prepare data points
  const dataPoints = data.map((d, i) => (
    <circle
      key={i}
      cx={xScale(d.country) + xScale.bandwidth() / 2}
      cy={yScale(d.value)}
      r={3}
      fill="#FF5733"
    />
  ));

  // Prepare labels for the points
  const pointLabels = data.map((d, i) => (
    <text
      key={`label-${i}`}
      x={xScale(d.country) + xScale.bandwidth() / 2}
      y={yScale(d.value) - 5}
      textAnchor="middle"
      style={{ fontSize: "10px" }}
    >
      {d.value}
    </text>
  ));

  return (
    <svg width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}>
      <ChartLabels title={title} yLabel={yLabel} width={width} height={height} margin={margin} />

      <Axes xScale={xScale} yScale={yScale} data={data} width={width} height={height} margin={margin} />
      {/* Line */}
      <path
        d={line(data)}
        fill="none"
        stroke="#FF5733"
        strokeWidth={2}
      />

      {/* Data points */}
      {dataPoints}

      {/* Labels for data points */}
      {pointLabels}
    </svg>
  );
};

export default LineChart;
