import DashboardLayout from "../layout/DashboardLayout";
import { FaUser, FaEnvelope, FaSignOutAlt, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <DashboardLayout>

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Settings ⚙️
        </h1>

        <p className="text-gray-500 mt-1">
          Manage your account and preferences
        </p>
      </div>

      {/* PROFILE CARD */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border mb-6">

        <div className="flex items-center gap-4">

          <div className="bg-blue-50 text-blue-600 p-4 rounded-xl text-xl">
            <FaUser />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              User Profile
            </h2>

            <p className="text-gray-500 text-sm">
              Your account information
            </p>
          </div>

        </div>

        <div className="mt-6 space-y-4">

          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">

            <div className="flex items-center gap-2 text-gray-600">
              <FaEnvelope />
              <span>Email</span>
            </div>

            <span className="font-medium text-gray-800">
              {user?.email || "No email found"}
            </span>

          </div>

        </div>

      </div>

      {/* PREFERENCES CARD */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border mb-6">

        <div className="flex items-center gap-2 mb-4">
          <FaCog className="text-blue-600" />
          <h2 className="text-lg font-semibold">
            Preferences
          </h2>
        </div>

        <div className="space-y-3">

          <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl">
            <span>Notifications</span>
            <span className="text-green-600 font-medium">Enabled</span>
          </div>

          <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl">
            <span>Theme</span>
            <span className="text-blue-600 font-medium">Light Mode</span>
          </div>

        </div>

      </div>

      {/* ACTION CARD */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border">

        <h2 className="text-lg font-semibold mb-4">
          Account Actions
        </h2>

        <button
          onClick={logout}
          className="w-full bg-red-500 text-white p-3 rounded-xl flex items-center justify-center gap-2 hover:bg-red-600 transition"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </DashboardLayout>
  );
}

export default Settings;