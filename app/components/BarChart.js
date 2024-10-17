"use client";
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data, title, yLabel }) => {
    const svgRef = useRef();

    useEffect(() => {
        if (!data || data.length === 0) return; // Early exit for empty data

        // Set up SVG dimensions and margins
        const margin = { top: 60, right: 20, bottom: 60, left: 70 };
        const width = 600 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        // Select and clear the SVG container
        const svg = d3.select(svgRef.current)
            .attr("viewBox", `0 0 ${600} ${400}`)
            .style("overflow", "visible");

        svg.selectAll('*').remove(); // Clear any previous chart

        // Define scales
        const x = d3.scaleBand()
            .domain(data.map(d => d.country))
            .range([margin.left, width - margin.right])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)]).nice()
            .range([height - margin.bottom, margin.top]);

        // Append X-axis
        svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "rotate(-45)")
            .style("text-anchor", "end");

        // Append Y-axis with rounded tick values
        svg.append("g")
            .attr("transform", `translate(${margin.left}, 0)`)
            .call(d3.axisLeft(y).ticks(5).tickFormat(d3.format(".2s"))); // Rounded tick values

        // Draw gridlines
        svg.append("g")
            .attr("class", "grid")
            .selectAll("line")
            .data(y.ticks(5))
            .enter().append("line")
            .attr("x1", margin.left)
            .attr("x2", width - margin.right)
            .attr("y1", d => y(d))
            .attr("y2", d => y(d))
            .attr("stroke", "#ccc")
            .attr("stroke-dasharray", "2,2");

        // Draw bars
        svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", d => x(d.country))
            .attr("y", d => y(d.value))
            .attr("height", d => y(0) - y(d.value))
            .attr("width", x.bandwidth())
            .attr("fill", "#4A90E2")
            .on("mouseover", function (event, d) {
                d3.select(this).attr("fill", "#003366"); // Hover effect
            })
            .on("mouseout", function (event, d) {
                d3.select(this).attr("fill", "#4A90E2");
            });

        // Add bar labels with exact values
        svg.selectAll(".label")
            .data(data)
            .enter().append("text")
            .attr("class", "label")
            .attr("x", d => x(d.country) + x.bandwidth() / 2)
            .attr("y", d => y(d.value) - 5)
            .attr("text-anchor", "middle")
            .style("font-size", "10px")
            .style("fill", "#333")
            .text(d => d.value); // Display exact values

        // Add chart title
        svg.append("text")
            .attr("x", width / 2 + margin.left / 2)
            .attr("y", margin.top / 2)
            .attr("text-anchor", "middle")
            .style("font-size", "16px")
            .style("font-weight", "bold")
            .text(title);

        // Add Y-axis label
        svg.append("text")
            .attr("x", -(height / 2))
            .attr("y", margin.left / 4)
            .attr("transform", "rotate(-90)")
            .attr("text-anchor", "middle")
            .style("font-size", "12px")
            .text(yLabel);

    }, [data, title, yLabel]);

    return (
        <svg ref={svgRef} width={600} height={400}></svg>
    );
};

export default BarChart;
