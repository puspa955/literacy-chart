import * as d3 from "d3";

const Scale = ({ data, width, height, margin }) => {
  const xScale = d3.scaleBand()
    .domain(data.map(d => d.country))
    .range([margin.left, width - margin.right])
    .padding(0.1);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)]).nice()
    .range([height - margin.bottom, margin.top]);

  return { xScale, yScale };
};

export default Scale;
