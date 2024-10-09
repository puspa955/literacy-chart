import React from "react";

const literacyRates = [
  { country: "India", rate: 73.3 },
  { country: "Pakistan", rate: 60.0 },
  { country: "Bangladesh", rate: 75.0 },
  { country: "Sri Lanka", rate: 92.0 },
  { country: "Nepal", rate: 70.0 },
  { country: "Bhutan", rate: 70.5 },
  { country: "Maldives", rate: 97.0 },
  { country: "Afghanistan", rate: 42.0 },
];

const BarChart = () => {
  const maxRate = Math.max(...literacyRates.map(r => r.rate));
  const barHeightMultiplier = 300 / maxRate; // Adjust the height scale
  const minBarHeight = 2; 

  const formatNumber = (num) => Math.round(num); // Rounding to whole numbers

  return (
    <div className="w-full p-4 flex flex-col items-center justify-center">
      <h1 className="text-center text-2xl font-bold mb-6">South Asian Countries Literacy Rate (2023)</h1>
      <div className="flex">
        {/* Y-Axis */}
        <div className="flex flex-col justify-between h-[320px] pr-4 relative mt-1">
          {[...Array(11)].map((_, index) => {
            const labelValue = Math.round(maxRate / 10 * (10 - index)); 
            return (
              <div key={index} className="flex items-center justify-end w-full">
                <p className="text-sm text-gray-700 text-right w-20">
                  {formatNumber(labelValue)}% {/* Y-axis labels */}
                </p>
                <div className="absolute left-[6rem] w-[600px] h-px bg-gray-300 mt-1"></div>
              </div>
            );
          })}
        </div>

        {/* Bar Chart */}
        <div className="flex flex-col items-center bg-gray-200" style={{ width: '600px' }}>
          <div className="flex items-end relative">
            <div className="absolute left-0 w-full h-px bg-gray-300 bottom-0"></div>
            {literacyRates.map((data, index) => {
              const barHeight = Math.max(data.rate * barHeightMultiplier, minBarHeight); 
              return (
                <div key={index} className="flex flex-col items-center w-[60px] mx-2">
                  <p className="text-xs text-gray-500">{formatNumber(data.rate)}%</p>
                  <div className="bg-yellow-500 w-10" style={{ height: `${barHeight}px` }}></div>
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
