import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sports() {
  const [goal, setGoal] = useState("");
  const [result, setResult] = useState(null);

  const sportsData = {
    "weight loss": {
      name: "Kabaddi",
      description:
        "Kabaddi is a high-intensity contact sport that involves continuous movement, quick reflexes, and breath control. It is excellent for burning calories and improving body coordination.",
      benefits: [
        "High calorie burn (fat loss)",
        "Improves agility and reflexes",
        "Boosts stamina and lung capacity",
      ],
      level: "Intermediate",
    },
    muscle: {
      name: "Kushti (Indian Wrestling)",
      description:
        "Kushti is a traditional Indian wrestling form practiced in mud arenas. It focuses on strength, discipline, and endurance, making it ideal for muscle development.",
      benefits: [
        "Builds full-body strength",
        "Improves discipline and mental toughness",
        "Enhances endurance",
      ],
      level: "Advanced",
    },
    stamina: {
      name: "Kho-Kho",
      description:
        "Kho-Kho is a fast-paced tag sport that improves speed, agility, and endurance. It requires quick decision-making and continuous running.",
      benefits: [
        "Improves cardiovascular endurance",
        "Enhances speed and flexibility",
        "Develops teamwork skills",
      ],
      level: "Beginner Friendly",
    },
  };

  const getRecommendation = () => {
    if (sportsData[goal]) {
      setResult(sportsData[goal]);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1599058917765-a780eda07a3e')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl text-center max-w-lg w-full">

        <h1 className="text-3xl font-bold text-amber-700 mb-4">
          🇮🇳 Indian Sports Recommendation
        </h1>

        <select
          className="border p-2 rounded mb-4 w-full"
          onChange={(e) => setGoal(e.target.value)}
        >
          <option>Select Goal</option>
          <option value="weight loss">Weight Loss</option>
          <option value="muscle">Muscle Gain</option>
          <option value="stamina">Increase Stamina</option>
        </select>

        <button
          onClick={getRecommendation}
          className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-2 rounded-full"
        >
          Get Sport Recommendation
        </button>

        {/* RESULT */}
        {result && (
          <div className="mt-6 text-left">
            <h2 className="text-xl font-bold mb-2">
              🏆 {result.name}
            </h2>

            <p className="mb-3">{result.description}</p>

            <p className="font-semibold">Benefits:</p>
            <ul className="list-disc ml-5 mb-3">
              {result.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <p>
              <b>Difficulty Level:</b> {result.level}
            </p>
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