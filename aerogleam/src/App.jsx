import { BrowserRouter, Routes, Route } from "react-router-dom";

import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Insights from "./pages/Insights";
import CostAnalysis from "./pages/CostAnalysis";
import Settings from "./pages/Settings";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* START HERE */}
        <Route path="/" element={<Onboarding />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/insights" element={<Insights/>}/>
        <Route path="/cost" element={<CostAnalysis/>}/>
        <Route path="/settings" element={<Settings/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;