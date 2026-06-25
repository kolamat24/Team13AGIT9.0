import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", usage: 120 },
  { month: "Feb", usage: 180 },
  { month: "Mar", usage: 150 },
  { month: "Apr", usage: 220 },
  { month: "May", usage: 200 },
  { month: "Jun", usage: 260 },
];

function EnergyChart() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm">
      <h2 className="font-bold mb-4 text-lg">Energy Consumption Trend</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="usage"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default EnergyChart;
