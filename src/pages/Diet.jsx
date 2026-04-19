import { useState } from "react";
import { Link } from "react-router-dom";

export default function Diet() {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [type, setType] = useState("veg");
  const [goal, setGoal] = useState("");
  const [result, setResult] = useState(null);

  // ✅ NEW FUNCTION (backend call)
  const generatePlan = async () => {
    if (!age || !weight || !goal) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("https://swadesi-backend.onrender.com/diet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          age,
          weight,
          goal,
          type,
        }),
      });

      const data = await res.json();
      setResult(data);

    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498837167922-ddd27525d352')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl max-w-lg w-full text-center">

        <h1 className="text-3xl font-bold text-amber-700 mb-4">
          🥗 Smart Indian Diet Planner
        </h1>

        <div className="flex flex-col gap-3">

          <input
            type="number"
            placeholder="Age"
            className="border p-2 rounded"
            onChange={(e) => setAge(e.target.value)}
          />

          <input
            type="number"
            placeholder="Weight (kg)"
            className="border p-2 rounded"
            onChange={(e) => setWeight(e.target.value)}
          />

          <select
            className="border p-2 rounded"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="veg">Vegetarian</option>
            <option value="nonveg">Non-Vegetarian</option>
          </select>

          <select
            className="border p-2 rounded"
            onChange={(e) => setGoal(e.target.value)}
          >
            <option>Select Goal</option>
            <option value="weight loss">Weight Loss</option>
            <option value="muscle">Muscle Gain</option>
            <option value="stamina">Increase Stamina</option>
          </select>

        </div>

        <button
          onClick={generatePlan}
          className="mt-6 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-2 rounded-full"
        >
          Generate Diet Plan
        </button>

        {/* RESULT */}
        {result && (
          <div className="mt-6 text-left">

            <h2 className="font-bold text-lg">
              🔥 Daily Calories: {result.calories} kcal
            </h2>

            <p><b>Breakfast:</b> {result.breakfast}</p>
            <p><b>Lunch:</b> {result.lunch}</p>
            <p><b>Dinner:</b> {result.dinner}</p>

          </div>
        )}

        <Link to="/dashboard">
          <button className="mt-6 bg-amber-600 text-white px-5 py-2 rounded">
            ← Back
          </button>
        </Link>

      </div>
    </div>
  );
}