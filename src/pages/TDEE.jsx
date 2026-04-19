import { useState } from "react";
import { Link } from "react-router-dom";

export default function TDEE() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("1.2");
  const [result, setResult] = useState("");

  const calculate = () => {
    if (!age || !height || !weight) {
      setResult("Please fill all fields");
      return;
    }

    let bmr =
      gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

    const tdee = Math.round(bmr * activity);

    setResult(`
BMR: ${Math.round(bmr)} kcal/day

TDEE (Maintenance): ${tdee} kcal/day

Weight Loss Calories: ${tdee - 300} kcal/day
Muscle Gain Calories: ${tdee + 300} kcal/day
    `);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1554284126-aa88f22d8b74')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* GLASS CARD */}
      <div className="backdrop-blur-md bg-white/80 p-10 rounded-3xl shadow-2xl text-center max-w-md w-full transition hover:scale-105">

        <h1 className="text-3xl font-extrabold text-amber-700 mb-6">
          Advanced TDEE Calculator
        </h1>

        <div className="flex flex-col gap-3">

          <input
            type="number"
            placeholder="Age"
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
            onChange={(e) => setAge(e.target.value)}
          />

          <select
            className="border p-2 rounded focus:outline-none"
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <input
            type="number"
            placeholder="Height (cm)"
            className="border p-2 rounded"
            onChange={(e) => setHeight(e.target.value)}
          />

          <input
            type="number"
            placeholder="Weight (kg)"
            className="border p-2 rounded"
            onChange={(e) => setWeight(e.target.value)}
          />

          <select
            className="border p-2 rounded"
            onChange={(e) => setActivity(e.target.value)}
          >
            <option value="1.2">Sedentary</option>
            <option value="1.375">Light Exercise</option>
            <option value="1.55">Moderate Exercise</option>
            <option value="1.725">Heavy Exercise</option>
          </select>

        </div>

        <button
          onClick={calculate}
          className="mt-6 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-2 rounded-full shadow hover:from-orange-600 hover:to-amber-700 transition"
        >
          Calculate
        </button>

        {/* RESULT */}
        <pre className="mt-6 text-left whitespace-pre-wrap text-gray-800">
          {result}
        </pre>

        <Link to="/dashboard">
          <button className="mt-6 bg-amber-600 text-white px-5 py-2 rounded hover:bg-amber-700 transition">
            ← Back
          </button>
        </Link>

      </div>

    </div>
  );
}