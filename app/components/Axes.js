import React from "react";
import * as d3 from "d3";

const Axes = ({ data, xScaleBar, xScaleLine, yScaleBar, height, width, margin, yLabel }) => {
    return (
        <>
            {/* X-axis for Bar Chart */}
            <g transform={`translate(0,${height - margin.bottom})`}>
                {data.map((d, i) => (
                    <g key={i} transform={`translate(${xScaleBar(d.country) + xScaleBar.bandwidth() / 2}, 0)`}>
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

            {/* X-axis for Line Chart */}
            <g transform={`translate(0,${height - margin.bottom})`}>
                {data.map((d, i) => (
                    <g key={i} transform={`translate(${xScaleLine(d.country) + xScaleLine.bandwidth() / 2}, 0)`}>
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
                {yScaleBar.ticks(5).map((tick, i) => (
                    <g key={i} transform={`translate(0, ${yScaleBar(tick)})`}>
                        <line x2={width - margin.right} stroke="#ccc" strokeDasharray="2,2" />
                        <line x2="-6" stroke="black" />
                        <text
                            x={-10}
                            y={5}
                            textAnchor="end"
                            style={{ fontSize: "10px" }}
                        >
                            {d3.format(".2s")(tick)}
                        </text>
                    </g>
                ))}
                <line y1={yScaleBar(yScaleBar.domain()[0])} y2={yScaleBar(yScaleBar.domain()[1])} stroke="black" />
            </g>

            {/* Y-axis Label */}
            <text
                transform={`rotate(-90)`}
                x={-(height / 2)}
                y={margin.left / 3}
                textAnchor="middle"
                style={{ fontSize: "12px" }}
            >
                {yLabel}
            </text>
        </>
    );
};

export default Axes;
