import React from "react";
import BarChart from '../components/BarChart'; 
import LineChart from '../components/LineChart';

const literacyRateData = [
  { country: 'India', value: 77.7 }, 
  { country: 'Pakistan', value: 59.13 },
  { country: 'Bangladesh', value: 74.9 },
  { country: 'Nepal', value: 97.4 },
  { country: 'Sri Lanka', value: 92.4 },
  { country: 'Bhutan', value: 91.6 },
  { country: 'Maldives', value: 99.3 },
  { country: 'Afghanistan', value: 37.2 }
];

const LiteracyRatePage = () => {
  return (
    <div>
       <BarChart data={literacyRateData} title="Literacy Rate by Country Bar Graph" yLabel="Literacy Rate (%)" />
       <LineChart data={literacyRateData} title="Literacy Rate Trends Line Graph" yLabel="Literacy Rate (%)" />
    </div>
  );
};

export default LiteracyRatePage;
