import BarChart from '../components/BarChart'; 

const populations = [
  { country: "India", population: 1406631786 },
  { country: "Pakistan", population: 233500636 },
  { country: "Bangladesh", population: 172518940 },
  { country: "Sri Lanka", population: 21877894 },
  { country: "Nepal", population: 30496279 },
  { country: "Bhutan", population: 787941 },
  { country: "Maldives", population: 521021 },
  { country: "Afghanistan", population: 42235038 },
];

const PopulationPage = () => {
  const maxPopulation = Math.max(...populations.map(p => p.population));
  
  const maxScale = maxPopulation > 1400000000 ? 1500000000 : maxPopulation;

  return (
    <BarChart 
      data={populations} 
      title="South Asian Countries Population" 
      maxScale={maxScale} // Use the dynamic max value
      dataKey="population" 
      unit=""
    />
  );
};

export default PopulationPage;
