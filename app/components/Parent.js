import React from "react";
import * as d3 from "d3";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import Axes from "./Axes";

const ParentChart = ({ data, title, yLabel = "Population" }) => {
    const margin = { top: 60, right: 10, bottom: 60, left: 70 };
    const width = 1100 - margin.left - margin.right; 
    const height = 400 - margin.top - margin.bottom;
    const barChartWidth = (width / 2) - 20;

    // Define scales for bar and line charts
    const xScaleBar = d3.scaleBand()
        .domain(data.map(d => d.country))
        .range([margin.left, barChartWidth - margin.right])
        .padding(0.1);

    const yScaleBar = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)]).nice()
        .range([height - margin.bottom, margin.top]);

    const xScaleLine = d3.scaleBand()
        .domain(data.map(d => d.country))
        .range([barChartWidth + 50, width - margin.right])
        .padding(0.1);

    const yScaleLine = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)]).nice()
        .range([height - margin.bottom, margin.top]);

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

            {/* Axes */}
            <Axes 
                data={data} 
                xScaleBar={xScaleBar} 
                xScaleLine={xScaleLine} 
                yScaleBar={yScaleBar} 
                height={height} 
                width={width} 
                margin={margin} 
                yLabel={yLabel}
            />

            {/* Bar Chart */}
            <BarChart 
                data={data} 
                margin={margin} 
                width={width} 
                height={height} 
                xScaleBar={xScaleBar} 
                yScaleBar={yScaleBar} 
            />

            {/* Line Chart */}
            <LineChart 
                data={data} 
                margin={margin} 
                width={width} 
                height={height} 
                xScaleLine={xScaleLine} 
                yScaleLine={yScaleLine} 
                line={line} 
            />
        </svg>
    );
};

export default ParentChart;
