"use client";
import React from "react";
import * as d3 from "d3";

const DualBarLineChart = ({ data, title, yLabel = "Population" }) => {
    const margin = { top: 60, right: 10, bottom: 60, left: 70 };
    const width = 1100 - margin.left - margin.right; // Increased width for both charts
    const height = 400 - margin.top - margin.bottom;
    const barChartWidth = (width / 2) - 20; // Half width for bar chart + some padding

    // Define scales for bar chart
    const xScaleBar = d3.scaleBand()
        .domain(data.map(d => d.country))
        .range([margin.left, barChartWidth - margin.right])
        .padding(0.1);

    const yScaleBar = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)]).nice()
        .range([height - margin.bottom, margin.top]);

    // Define scales for line chart
    const xScaleLine = d3.scaleBand()
        .domain(data.map(d => d.country))
        .range([barChartWidth + 50, width - margin.right]) // Start line chart after bar chart
        .padding(0.1);

    const yScaleLine = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)]).nice()
        .range([height - margin.bottom, margin.top]);

    // Line generator for the line chart
    const line = d3.line()
        .x(d => xScaleLine(d.country) + xScaleLine.bandwidth() / 2)
        .y(d => yScaleLine(d.value));

    return (
        <svg width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}>
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
                y={margin.left / 3}
                textAnchor="middle"
                style={{ fontSize: "12px" }}
            >
                {yLabel}
            </text>

           

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

            {/* Y-axis (for both charts) */}
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

             {/* Bar Chart (Left Side) */}
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

            {/* Line Chart (Right Side) */}
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
        </svg>
    );
};

export default DualBarLineChart;
