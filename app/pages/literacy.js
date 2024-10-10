import BarChart from '../components/BarChart'; 

const literacyRates2023 = [
  { country: "India", rate: 73.3 },
  { country: "Pakistan", rate: 60.0 },
  { country: "Bangladesh", rate: 75.0 },
  { country: "Sri Lanka", rate: 92.0 },
  { country: "Nepal", rate: 70.0 },
  { country: "Bhutan", rate: 70.5 },
  { country: "Maldives", rate: 97.0 },
  { country: "Afghanistan", rate: 42.0 },
];

const LiteracyRatePage = () => {
  return (
    <BarChart 
      data={literacyRates2023} 
      title="South Asian Countries Literacy Rate (2023)" 
      dataKey="rate" 
      unit="%"
    />
  );
};

export default LiteracyRatePage;
