import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Total Order", value: 81, color: "#FF6B6B" },
  { name: "Customer Growth", value: 22, color: "#4CAF50" },
  { name: "Total Revenue", value: 62, color: "#4FC3F7" },
];

const PieChartData = () => {
  return (
    <div className="flex flex-col items-center rounded-lg p-4 ">
      <div className="flex items-center gap-6">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center relative">
            <PieChart width={180} height={180}>
              <Pie
                className="relative z-1 border-4"
                data={[
                  { name: item.name, value: item.value, color: item.color },
                  {
                    name: "Remaining",
                    value: 100 - item.value,
                    color: `${item.color}99`,
                  }, // Adding 60% alpha
                ]}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
              >
                <Cell key={`cell-${index}-main`} fill={item.color} />
                <Cell
                  key={`cell-${index}-remaining`}
                  fill={`${item.color}99`}
                />
              </Pie>
              <Tooltip />
            </PieChart>
            <div className="mt-2 text-center">
              <p className="text-2xl font-semibold text-gray-800 absolute top-[75px] left-[75px] ">
                {item.value}%
              </p>
              <p className="text-gray-500 text-sm">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartData;
