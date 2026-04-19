import { useState } from "react";

export default function FitnessRecommender() {
  const [goal, setGoal] = useState("");
  const [result, setResult] = useState(null);

  const handleRecommend = () => {
    if (goal === "weight loss") {
      setResult({
        title: "Weight Loss Plan",
        workout: "Cardio + Yoga (45 min)",
        sport: "Kabaddi (fat burning + agility)",
        diet: "Low calorie Indian meals (oats, dal, fruits)",
        tips: "Avoid sugar, drink water, maintain deficit"
      });
    } else if (goal === "muscle gain") {
      setResult({
        title: "Muscle Gain Plan",
        workout: "Strength training + weights",
        sport: "Kushti (builds strength)",
        diet: "High protein (paneer, eggs, rice)",
        tips: "Eat more, sleep well, train consistently"
      });
    } else if (goal === "stamina") {
      setResult({
        title: "Stamina Plan",
        workout: "Running + HIIT",
        sport: "Kho-Kho (speed + endurance)",
        diet: "Light balanced diet (fruits, roti, curd)",
        tips: "Stay hydrated, daily activity"
      });
    }
  };

  return (
    <section
      className="py-20 px-6 text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438')",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl max-w-3xl mx-auto">

        <h2 className="text-3xl font-bold text-amber-700 mb-6">
          Smart Fitness Recommendation
        </h2>

        <select
          className="border p-2 rounded mb-4"
          onChange={(e) => setGoal(e.target.value)}
        >
          <option>Select Goal</option>
          <option value="weight loss">Weight Loss</option>
          <option value="muscle gain">Muscle Gain</option>
          <option value="stamina">Increase Stamina</option>
        </select>

        <br />

        <button
          onClick={handleRecommend}
          className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-2 rounded-full"
        >
          Get Plan
        </button>

        {result && (
          <div className="mt-6 text-left">
            <h3 className="text-xl font-bold mb-2">{result.title}</h3>
            <p><b>Workout:</b> {result.workout}</p>
            <p><b>Sport:</b> {result.sport}</p>
            <p><b>Diet:</b> {result.diet}</p>
            <p><b>Tips:</b> {result.tips}</p>
          </div>
        )}
      </div>
    </section>
  );
}