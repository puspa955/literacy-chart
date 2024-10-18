import React from "react";
import ParentChart from "../components/Parent";

const populationData = [
  { country: 'India', value: 1393409038 }, 
  { country: 'Pakistan', value: 225199937 },
  { country: 'Bangladesh', value: 166303498 },
  { country: 'Nepal', value: 29674903 },
  { country: 'Sri Lanka', value: 21803000 },
  { country: 'Bhutan', value: 771608 },
  { country: 'Maldives', value: 540542 },
  { country: 'Afghanistan', value: 38928346 }
];

const PopulationPage = () => {
  return (
    <ParentChart 
      data={populationData} 
      title="Population by Country" 
      yLabel="Population" 
    />
  );
};

export default PopulationPage;
