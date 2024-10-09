import React from "react";

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

const BarChart = () => {
  const maxPopulation = Math.max(...populations.map(p => p.population));
  const barHeightMultiplier = 300 / maxPopulation;
  const minBarHeight = 2; 

  const formatNumber = (num) => {
    return Math.round(num / 100) * 100;
  };

  return (
    <div className="w-full p-4 flex flex-col items-center justify-center">
      <h1 className="text-center text-2xl font-bold mb-6">South Asian Countries Population</h1>
      <div className="flex">
        {/* Y-Axis */}
        <div className="flex flex-col justify-between h-[320px] pr-4 relative mt-1">
          {[...Array(11)].map((_, index) => {
            const labelValue = Math.round(maxPopulation / 10 * (10 - index)); 
            return (
              <div key={index} className="flex items-center justify-end w-full">
                <p className="text-sm text-gray-700 text-right w-20">
                  {formatNumber(labelValue).toLocaleString()} {/* Y-axis labels */}
                </p>
                <div className="absolute left-[6rem] w-[600px] h-px bg-gray-300 mt-1"></div>
              </div>
            );
          })}
        </div>

        {/* Bar Chart */}
        <div className="flex flex-col items-center bg-gray-200" style={{ width: '600px' }}> {/* Set fixed width for the bar chart */}
          <div className="flex items-end relative">
            <div className="absolute left-0 w-full h-px bg-gray-300 bottom-0"></div>
            {populations.map((data, index) => {
              const barHeight = Math.max(data.population * barHeightMultiplier, minBarHeight); 
              return (
                <div key={index} className="flex flex-col items-center w-[60px] mx-2">
                  <p className="text-xs text-gray-500">{formatNumber(data.population).toLocaleString()}</p>
                  <div className="bg-blue-500 w-10" style={{ height: `${barHeight}px` }}></div>
                  <p className="text-xs text-gray-500">{data.country}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
