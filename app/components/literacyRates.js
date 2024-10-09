import React from "react";

const literacyRates = [
  { country: "India", rates: { 2010: 65.4, 2018: 69.3, 2023: 73.3 } },
  { country: "Pakistan", rates: { 2010: 55.5, 2018: 57.0, 2023: 60.0 } },
  { country: "Bangladesh", rates: { 2010: 61.0, 2018: 73.9, 2023: 75.0 } },
  { country: "SriLanka", rates: { 2010: 91.0, 2018: 91.6, 2023: 92.0 } },
  { country: "Nepal", rates: { 2010: 60.5, 2018: 66.1, 2023: 70.0 } },
  { country: "Bhutan", rates: { 2010: 60.2, 2018: 66.6, 2023: 70.5 } },
  { country: "Maldives", rates: { 2010: 95.0, 2018: 96.3, 2023: 97.0 } },
  { country: "Afghanistan", rates: { 2010: 28.0, 2018: 37.3, 2023: 42.0 } },
];

const yearColors = {
  2010: "bg-blue-500",   
  2018: "bg-green-500",  
  2023: "bg-yellow-500",  
};

const BarChart = () => {
  const barHeightMultiplier = 3; // Multiplier to control bar height

  const formatNumber = (num) => Math.round(num); // Rounding to whole numbers

  return (
    <div className="w-full p-4 flex flex-col items-center justify-center">
      <h1 className="text-center text-2xl font-bold mb-6">South Asian Countries Literacy Rate</h1>

      {/* Legend for Year Representation */}
      <div className="flex space-x-4 mb-4">
        {Object.keys(yearColors).map((year) => (
          <div key={year} className="flex items-center">
            <div className={`${yearColors[year]} w-4 h-4 mr-1 rounded`} /> {/* Small color box */}
            <span className="text-xs">{year}</span> {/* Year label */}
          </div>
        ))}
      </div>

      <div className="flex">
        {/* Y-Axis */}
        <div className="flex flex-col justify-between h-[320px] pr-4 relative mt-1">
          {[...Array(11)].map((_, index) => {
            const labelValue = 100 - index * 10;
            return (
              <div key={index} className="flex items-center justify-end w-full">
                <p className="text-sm text-gray-700 text-right w-20">
                  {formatNumber(labelValue)}% {/* Y-axis labels for literacy rate */}
                </p>
                <div className="absolute left-[6rem] w-[1100px] h-px bg-gray-300 mt-1"></div>
              </div>
            );
          })}
        </div>

        {/* Bar Chart */}
        <div className="flex flex-col items-center bg-gray-200" style={{ width: '1100px' }}>
          <div className="flex items-end relative">
            <div className="absolute left-0 w-full bg-gray-300 bottom-0"></div>
            {literacyRates.map((data, index) => (
              <div key={index} className="flex flex-col items-center w-[10px] mx-16">
                <div className="flex flex-row items-end"> {/* Row for the bars */}
                  {Object.entries(data.rates).map(([year, rate], rateIndex) => (
                    <div key={rateIndex} className="flex flex-col items-center">
                      <p className="text-xs text-gray-500">{formatNumber(rate)}%</p> {/* Literacy rate label */}
                      <div
                        className={`${yearColors[year]} w-6 mx-0.5`}
                        style={{ height: `${Math.max(rate * barHeightMultiplier)}px`, marginTop: '9px' }}
                      ></div> {/* Bar for literacy rate */}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500">{data.country}</p> {/* Country name below the bars */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
