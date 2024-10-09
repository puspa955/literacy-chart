
const BarChart = ({ data, title, maxScale = 100, barColor = "bg-blue-500", dataKey = 'value', unit = "%" }) => {
  const chartHeight = 300; // Consistent chart height
  const barHeightMultiplier = chartHeight / maxScale;
  const minBarHeight = 2;  // Minimum bar height to avoid disappearing bars

  const formatNumber = (num) => Math.round(num); // Function to format numbers

  return (
    <div className="w-full p-4 flex flex-col items-center justify-center">
      <h1 className="text-center text-2xl font-bold mb-6">{title}</h1>
      <div className="flex">
        {/* Y-Axis Labels */}
        <div className="flex flex-col justify-between h-[320px] pr-4 relative mt-1">
          {[...Array(11)].map((_, index) => {
            const labelValue = Math.round(maxScale / 10 * (10 - index)); 
            return (
              <div key={index} className="flex items-center justify-end w-full">
                <p className="text-sm text-gray-700 text-right w-20">
                  {formatNumber(labelValue)}{unit}
                </p>
                <div className="absolute left-[6rem] w-[600px] h-px bg-gray-300 mt-1"></div>
              </div>
            );
          })}
        </div>

        {/* Bar Chart */}
        <div className="flex flex-col items-center bg-gray-200" style={{ width: '600px' }}>
          <div className="flex items-end h-[332px] relative">
            <div className="absolute left-0 w-full h-px bg-gray-300 bottom-0"></div>
            {data.map((item, index) => {
              const barHeight = Math.max(item[dataKey] * barHeightMultiplier, minBarHeight); 
              return (
                <div key={index} className="flex flex-col items-center w-[60px] mx-2">
                  <p className="text-xs text-gray-500 text-label mb-1">{formatNumber(item[dataKey])}{unit}</p>
                  <div className={`${barColor} w-10`} style={{ height: `${barHeight}px` }}></div>
                  <p className="text-xs text-gray-500">{item.country}</p>
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
