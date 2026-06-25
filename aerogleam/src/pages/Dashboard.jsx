import DashboardLayout from "../layout/DashboardLayout";
import StatCard from "../components/StatCard";
import EnergyChart from "../components/EnergyChart";
import { FaBolt, FaMoneyBillWave, FaLeaf } from "react-icons/fa";

function Dashboard() {
  return (
    <DashboardLayout>

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          WELCOME 👋
        </h1>

        <p className="text-gray-500 mt-1">
          Here’s your energy overview for today
        </p>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"></div>
        <StatCard
          title="Energy Usage"
          value="345 kWh"
          icon={<FaBolt />}
          color="blue"
        />

        <StatCard
          title="Monthly Cost"
          value="₦54,200"
          icon={<FaMoneyBillWave />}
          color="red"
        />

        <StatCard
          title="Estimated Savings"
          value="₦11,000"
          icon={<FaLeaf />}
          color="green"
        />

      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* CHART SECTION */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">
              Energy Consumption
            </h2>

            <span className="text-sm text-gray-400">
              Last 6 months
            </span>
          </div>

          <EnergyChart />
        </div>

        {/* QUICK ACTIONS */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border">

          <h2 className="text-lg font-semibold mb-4">
            Quick Actions
          </h2>

          <div className="space-y-3">

            <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
              View Insights
            </button>

            <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-xl hover:bg-gray-200 transition">
              Compare Usage
            </button>

            <button className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition">
              Save Energy Tips
            </button>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;