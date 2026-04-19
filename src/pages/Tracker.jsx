import { useState } from "react";
import { Link } from "react-router-dom";

export default function Tracker() {
  const [food, setFood] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [suggestion, setSuggestion] = useState("");

  // 🔥 FAKE AI DATABASE
  const foodDB = {
    rice: 200,
    roti: 120,
    egg: 70,
    paneer: 265,
    banana: 90,
    apple: 80,
    burger: 300,
    pizza: 350,
    milk: 150,
  };

  const analyzeFood = (item) => {
    const lower = item.toLowerCase();

    if (foodDB[lower]) {
      const calories = foodDB[lower];

      let advice = "";
      if (calories > 250) {
        advice = "⚠ High calorie food, consume in moderation.";
      } else {
        advice = "✅ Healthy choice!";
      }

      return { calories, advice };
    } else {
      return {
        calories: 100,
        advice: "🤖 AI estimated value. Try adding known foods."
      };
    }
  };

  const addFood = () => {
    if (food) {
      const analysis = analyzeFood(food);

      const newItem = {
        name: food,
        calories: analysis.calories,
        advice: analysis.advice,
      };

      setList([...list, newItem]);
      setTotal(total + newItem.calories);
      setSuggestion(analysis.advice);
      setFood("");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1490645935967-10de6ba17061')",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl max-w-md w-full text-center">

        <h1 className="text-3xl font-bold text-amber-700 mb-4">
          🤖 AI Calorie Tracker
        </h1>

        <input
          value={food}
          onChange={(e) => setFood(e.target.value)}
          placeholder="Enter food (e.g., rice, pizza)"
          className="border p-2 rounded w-full mb-3"
        />

        <button
          onClick={addFood}
          className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-2 rounded-full"
        >
          Analyze & Add
        </button>

        {suggestion && (
          <p className="mt-4 text-sm">{suggestion}</p>
        )}

        <ul className="mt-4 text-left">
          {list.map((item, i) => (
            <li key={i}>
              🍽 {item.name} — {item.calories} kcal  
              <br />
              <span className="text-sm">{item.advice}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-4 font-bold text-lg">
          Total Calories: {total} kcal
        </h2>

        <Link to="/dashboard">
          <button className="mt-6 bg-amber-600 text-white px-5 py-2 rounded">
            ← Back
          </button>
        </Link>

      </div>
    </div>
  );
}