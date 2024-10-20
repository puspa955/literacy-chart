import React from "react";
import Scale from "./ChartUtils";
import Axes from "./Axes";
import ChartLabels from "./ChartComponents"; 

const BarChart = ({ data, title, yLabel = "Population" }) => {
  const margin = { top: 60, right: 10, bottom: 60, left: 70 };
  const width = 600 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  // Use Scale component for creating scales
  const { xScale, yScale } = Scale({ data, width, height, margin });

  const bars = data.map((d, i) => (
    <g key={i}>
      <rect
        x={xScale(d.country)}
        y={yScale(d.value)}
        width={xScale.bandwidth()}
        height={yScale(0) - yScale(d.value)}
        fill="#4A90E2"
      />
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
      <ChartLabels title={title} yLabel={yLabel} width={width} height={height} margin={margin} />
      
      <Axes xScale={xScale} yScale={yScale} data={data} width={width} height={height} margin={margin} />
      
      {/* Bars */}
      {bars}
    </svg>
  );
};

export default BarChart;
