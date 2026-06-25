import { NavLink } from "react-router-dom";
import { FaHome, FaSignOutAlt, FaCog, FaBolt,FaMoneyBillWave } from "react-icons/fa";

function Sidebar() {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="w-64 h-screen bg-white shadow p-5 flex flex-col justify-between hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-10 flex-col">

      <div>
        <h1 className="text-xl font-bold mb-6">AeroGleam</h1>

        <NavLink to="/dashboard" className="block mb-3">
          <FaHome /> Dashboard
        </NavLink>
        <NavLink to="/insights" classname="block mb-3">
        <FaBolt/> Insights
        </NavLink>
        <NavLink to="/cost" classname="block mb-3">
        <FaMoneyBillWave/> Cost Analysis
        </NavLink>
        <NavLink to="/settings" classname="block mb-3">
        <FaCog/> Settings
        </NavLink>
      </div>

      <button
        onClick={logout}
        className="text-red-500 flex items-center gap-2"
      >
        <FaSignOutAlt /> Logout
      </button>

    </div>
  );
}

export default Sidebar;