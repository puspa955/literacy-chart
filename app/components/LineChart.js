import React from "react";
import Scale from "./ChartUtils"; 
import XAxis from "./XAxis"; 
import YAxis from "./YAxis"; 
import ChartLabels from "./ChartComponents"; 
import LineSeries from "./LineSeries"; 
import ChartContainer from "./ChartContainer"; 

const LineChart = ({ data, title, yLabel }) => {
  const margin = { top: 60, right: 10, bottom: 30, left: 70 };
  const width = 600 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  const { xScale, yScale } = Scale({ data, width, height, margin });

  return (
    <ChartContainer width={width} height={height} margin={margin}>
      <ChartLabels title={title} yLabel={yLabel} width={width} height={height} margin={margin} />
      <XAxis xScale={xScale} data={data} height={height} margin={margin} />
      <YAxis yScale={yScale} width={width} margin={margin} />
      <LineSeries data={data} xScale={xScale} yScale={yScale} />
    </ChartContainer>
  );
};

export default LineChart;
