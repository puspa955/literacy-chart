import BarChart from '../components/BarChart'; 

const populationData = [
  { country: 'India', value: 1393409038 }, 
  { country: 'Pakistan', value: 225199937 },
  { country: 'Bangladesh', value: 166303498 },
  { country: 'Nepal', value: 29136808 },
  { country: 'Sri Lanka', value: 21919000 },
  { country: 'Bhutan', value: 7633000 },
  { country: 'Maldives', value: 515696 },
  { country: 'Afghanistan', value: 40218234 }
];

const PopulationPage = () => {
  return (
    <BarChart data={populationData} title="Population (2023)" yLabel="Population" />

  );
};

export default PopulationPage;