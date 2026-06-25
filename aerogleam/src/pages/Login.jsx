import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const navigate = useNavigate();

  // ✅ AUTO-FILL IF USER CHOSE "REMEMBER ME"
  useEffect(() => {
    const remembered = JSON.parse(localStorage.getItem("rememberedUser"));

    if (remembered) {
      setEmail(remembered.email);
      setPassword(remembered.password);
      setRemember(true);
    }
  }, []);

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    // ✅ ACTIVE SESSION
    localStorage.setItem("user", JSON.stringify(user));

    // ✅ REMEMBER ME LOGIC
    if (remember) {
      localStorage.setItem("rememberedUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("rememberedUser");
    }

    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex">

      {/* LEFT BRAND PANEL */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-10 flex-col justify-center">

        <h1 className="text-4xl font-bold mb-4">
          AeroGleam
        </h1>

        <p className="text-lg opacity-90 mb-6">
          Smart Energy Monitoring for Modern Homes
        </p>

        <div className="bg-white/10 p-4 rounded-xl text-sm">
          ⚡ Track usage <br />
          💰 Save electricity cost <br />
          📊 Get AI insights
        </div>

      </div>

      {/* RIGHT LOGIN FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100">

        <div className="bg-white p-8 rounded-2xl shadow-md w-96">

          <h2 className="text-2xl font-bold mb-2">
            Welcome back 👋
          </h2>

          <p className="text-gray-500 mb-6 text-sm">
            Login to continue
          </p>

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* REMEMBER ME */}
          <div className="flex items-center gap-2 mb-5">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <label className="text-sm text-gray-600">
              Remember Me
            </label>
          </div>

          {/* LOGIN BUTTON */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

          {/* REGISTER LINK */}
          <p className="text-sm text-center mt-4">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-blue-600 cursor-pointer"
            >
              Register
            </span>
          </p>

        </div>
      </div>

    </div>
  );
}

export default Login;