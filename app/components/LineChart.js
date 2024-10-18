import React from "react";

const LineChart = ({ data, xScaleLine, yScaleLine, line }) => {
    return (
        <g>
            {/* Line */}
            <path
                d={line(data)}
                fill="none"
                stroke="#FF5733"
                strokeWidth={2}
            />
            {/* Dots for Line Graph */}
            {data.map((d, i) => (
                <circle
                    key={i}
                    cx={xScaleLine(d.country) + xScaleLine.bandwidth() / 2}
                    cy={yScaleLine(d.value)}
                    r={3}
                    fill="#FF5733"
                />
            ))}
        </g>
    );
};

export default LineChart;
