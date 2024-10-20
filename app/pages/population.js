import React from "react";
import BarChart from '../components/BarChart'; 
import LineChart from '../components/LineChart'; 

const populationData = [
    { country: 'India', value: 1393409038 }, 
    { country: 'Pakistan', value: 225199937 },
    { country: 'Bangladesh', value: 166303498 },
    { country: 'Nepal', value: 29609623 },
    { country: 'Sri Lanka', value: 21536857 },
    { country: 'Bhutan', value: 763300 },
    { country: 'Maldives', value: 521000 },
    { country: 'Afghanistan', value: 39832838 }
];

const PopulationPage = () => {
  return (
    <div>
       <BarChart data={populationData} title="Population of South Asian Countries Bar Graph" yLabel="Population" />
       <LineChart data={populationData} title="Population of South Asian Countries Line Graph" yLabel="Population" />
    </div>
  );
};

export default PopulationPage;
