import React from "react";

const BarChart = ({ data, yScaleBar, xScaleBar }) => {
    return (
        <g>
            {/* Bars */}
            {data.map((d, i) => (
                <g key={i}>
                    <rect
                        x={xScaleBar(d.country)}
                        y={yScaleBar(d.value)}
                        width={xScaleBar.bandwidth()}
                        height={yScaleBar(0) - yScaleBar(d.value)}
                        fill="#4A90E2"
                    />
                    {/* Bar Labels */}
                    <text
                        x={xScaleBar(d.country) + xScaleBar.bandwidth() / 2}
                        y={yScaleBar(d.value) - 5}
                        textAnchor="middle"
                        style={{ fontSize: "10px", fill: "#333" }}
                    >
                        {d.value}
                    </text>
                </g>
            ))}
        </g>
    );
};

export default BarChart;
