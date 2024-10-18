"use client";
import React from "react";
import * as d3 from "d3";

const BarChart = ({ data, title, yLabel }) => {
    const margin = { top: 60, right: 20, bottom: 60, left: 70 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Define scales
    const xScale = d3.scaleBand()
        .domain(data.map(d => d.country))
        .range([margin.left, width - margin.right])
        .padding(0.1);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)]).nice()
        .range([height - margin.bottom, margin.top]);

    // X-axis and Y-axis ticks
    const xTicks = data.map(d => d.country);
    const yTicks = yScale.ticks(5);

    return (
        <svg width={600} height={400} viewBox={`0 0 600 400`}>
            {/* Chart Title */}
            <text
                x={(width + margin.left + margin.right) / 2}
                y={margin.top / 2}
                textAnchor="middle"
                style={{ fontSize: "16px", fontWeight: "bold" }}
            >
                {title}
            </text>

            {/* Y-axis Label */}
            <text
                transform={`rotate(-90)`}
                x={-(height / 2)}
                y={margin.left / 4}
                textAnchor="middle"
                style={{ fontSize: "12px" }}
            >
                {yLabel}
            </text>

            {/* X-axis */}
            <g transform={`translate(0,${height - margin.bottom})`}>
                {xTicks.map((d, i) => (
                    <g key={i} transform={`translate(${xScale(d) + xScale.bandwidth() / 2}, 0)`}>
                        <line y2="6" stroke="black" />
                        <text
                            transform="rotate(-45)"
                            x={0}
                            y={15}
                            dy=".71em"
                            textAnchor="end"
                            style={{ fontSize: "10px" }}
                        >
                            {d}
                        </text>
                    </g>
                ))}
            </g>

            {/* Y-axis */}
            <g transform={`translate(${margin.left}, 0)`}>
                {yTicks.map((tick, i) => (
                    <g key={i} transform={`translate(0, ${yScale(tick)})`}>
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
                {/* Y-axis main line */}
                <line y1={yScale(yScale.domain()[0])} y2={yScale(yScale.domain()[1])} stroke="black" />
            </g>

            {/* Bars */}
            {data.map((d, i) => (
                <g key={i}>
                    <rect
                        x={xScale(d.country)}
                        y={yScale(d.value)}
                        width={xScale.bandwidth()}
                        height={yScale(0) - yScale(d.value)}
                        fill="#4A90E2"
                    />
                    {/* Bar Labels */}
                    <text
                        x={xScale(d.country) + xScale.bandwidth() / 2}
                        y={yScale(d.value) - 5}
                        textAnchor="middle"
                        style={{ fontSize: "10px", fill: "#333" }}
                    >
                        {d.value}
                    </text>
                </g>
            ))}
        </svg>
    );
};

export default BarChart;
