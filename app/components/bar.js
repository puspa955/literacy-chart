// Bar.jsx
import React from "react";

const Bar = ({ data, xScale, yScale }) => {
  return (
    <g>
      {data.map((d, i) => (
        <g key={i}>
          <rect
            x={xScale(d.country)} // Accessing the country field from each data point
            y={yScale(d.value)}
            width={xScale.bandwidth()} // Assuming you're using a band scale for x-axis
            height={yScale(0) - yScale(d.value)} // Calculate height from y scale
            fill="#4A90E2"
          />
          <text
            x={xScale(d.country) + xScale.bandwidth() / 2} // Center the text on the bar
            y={yScale(d.value) - 5} // Position text above the bar
            textAnchor="middle"
            style={{ fontSize: "10px", fill: "#333" }}
          >
            {d.value} {/* Display the value on top of the bar */}
          </text>
        </g>
      ))}
    </g>
  );
};

export default Bar;
