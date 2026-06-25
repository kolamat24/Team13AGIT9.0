import DashboardLayout from "../layout/DashboardLayout";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Insights() {
  // PIE DATA (device breakdown)
  const pieData = [
    { name: "AC", value: 40 },
    { name: "Fridge", value: 25 },
    { name: "TV", value: 15 },
    { name: "Lighting", value: 20 },
  ];

  // BAR DATA (daily usage)
  const barData = [
    { day: "Mon", usage: 30 },
    { day: "Tue", usage: 45 },
    { day: "Wed", usage: 35 },
    { day: "Thu", usage: 60 },
    { day: "Fri", usage: 50 },
    { day: "Sat", usage: 70 },
    { day: "Sun", usage: 55 },
  ];

  const COLORS = ["#2563eb", "#4f46e5", "#22c55e", "#f59e0b"];

  return (
    <DashboardLayout>

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          Energy Insights ⚡
        </h1>
        <p className="text-gray-500">
          Breakdown of your household energy usage
        </p>
      </div>

      {/* TOP GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* PIE CHART */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border">
          <h2 className="font-semibold mb-4">
            Device Consumption
          </h2>

          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* TOP CONSUMER */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border">

          <h2 className="font-semibold mb-4">
            Top Energy Consumer
          </h2>

          <div className="text-center mt-10">

            <div className="text-5xl mb-3">❄️</div>

            <h3 className="text-xl font-bold">
              Air Conditioner
            </h3>

            <p className="text-gray-500 mt-2">
              40% of total energy usage
            </p>

            <div className="mt-5 bg-red-50 text-red-600 p-3 rounded-xl">
              ⚠ High consumption device
            </div>

          </div>
        </div>

        {/* AI RECOMMENDATION */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border">

          <h2 className="font-semibold mb-4">
            AI Recommendation
          </h2>

          <div className="space-y-4 text-sm">

            <div className="p-3 bg-blue-50 rounded-xl">
              💡 Reduce AC usage by 2 hours daily to save ~₦3,500/month
            </div>

            <div className="p-3 bg-green-50 rounded-xl">
              ⚡ Switch to LED bulbs to reduce lighting cost by 20%
            </div>

            <div className="p-3 bg-yellow-50 rounded-xl">
              🔌 Unplug devices when not in use to reduce standby power loss
            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM CHART */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border mt-6">

        <h2 className="font-semibold mb-4">
          Weekly Usage Trend
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="usage" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>

      </div>

    </DashboardLayout>
  );
}

export default Insights;