import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // CHECK IF USER EXISTS
    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      alert("User already exists. Please login.");

      // 👉 redirect to login page
      navigate("/login");
      return;
    }

    // REGISTER NEW USER
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please login.");

    // 👉 go to login after successful registration
    navigate("/login");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-6 rounded-xl w-96">

        <h1 className="text-xl font-bold mb-4">
          Register
        </h1>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-3"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="bg-green-600 text-white w-full p-2 rounded"
        >
          Register
        </button>

      </div>
    </div>
  );
}

export default Register;