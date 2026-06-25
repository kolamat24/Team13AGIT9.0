import { useNavigate } from "react-router-dom";

function Onboarding() {
  const navigate = useNavigate();
  const steps = [
  "Track Energy Usage",
  "Save Electricity Costs",
  "Get Smart Insights"
];

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl w-96 text-center">

        <h1 className="text-2xl font-bold mb-3">
          Welcome to AeroGleam
        </h1>

        <p className="text-gray-500 mb-6">
          Track energy usage and reduce electricity bills
        </p>

        {/* GET STARTED BUTTON */}
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-600 text-white w-full p-3 rounded-lg hover:bg-blue-700"
        >
          Get Started
        </button>

      </div>
    </div>
  );
}

export default Onboarding;