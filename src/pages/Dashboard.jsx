import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  // 🔐 Protect dashboard
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  // 🚪 Logout function
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 flex flex-col items-center justify-center text-center px-6">

      {/* USER INFO */}
      <h1 className="text-4xl font-extrabold text-amber-700 mb-4">
        Welcome, {user?.name || "User"} 👋
      </h1>

      <p className="text-gray-700 mb-2">
        🎯 Goal: {user?.goal}
      </p>

      <p className="text-gray-700 mb-8">
        ⚖ Weight: {user?.weight} kg
      </p>

      <p className="text-lg text-gray-700 mb-10">
        Choose your fitness category
      </p>

      {/* BUTTONS */}
      <div className="flex flex-col gap-5 w-full max-w-sm">

        <Link to="/fitness">
          <button className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white py-3 rounded-xl shadow hover:scale-105 transition">
            Fitness Plans
          </button>
        </Link>

        <Link to="/sports">
          <button className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white py-3 rounded-xl shadow hover:scale-105 transition">
            Indian Sports
          </button>
        </Link>

        <Link to="/diet">
          <button className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white py-3 rounded-xl shadow hover:scale-105 transition">
            Diet Recommendations
          </button>
        </Link>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="w-full mt-4 bg-red-500 text-white py-3 rounded-xl shadow hover:bg-red-600 transition"
        >
          Logout
        </button>

      </div>

    </div>
  );
}