import React from "react";

export default function Features() {
  const featureList = [
    {
      title: "TDEE Calculator",
      desc: [
        "Calculate your Total Daily Energy Expenditure.",
        "Personalized calorie needs based on your input.",
        "Simple, fast, and tailored to your fitness goals.",
      ],
      img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-tdee-illustration_23-2149295311.jpg",
    },
    {
      title: "AI Calorie Tracker",
      desc: [
        "AI-powered meal tracking with photo recognition.",
        "Log food effortlessly — no manual calculations.",
        "Smart insights to keep your diet on track.",
      ],
      img: "https://img.freepik.com/free-vector/calorie-tracker-concept-illustration_114360-7801.jpg",
    },
    {
      title: "Workout Planner",
      desc: [
        "Generate daily custom workout routines.",
        "Beginner to advanced level training support.",
        "Home + gym workout options included.",
      ],
      img: "https://img.freepik.com/free-vector/fitness-tracking-app-concept-illustration_114360-7784.jpg",
    },
    {
      title: "Diet Recommendations",
      desc: [
        "Get Swadesi-style healthy meal plans.",
        "Vegetarian, vegan, high-protein & more.",
        "Balanced nutrition based on Indian foods.",
      ],
      img: "https://img.freepik.com/free-vector/healthy-food-concept-illustration_114360-2055.jpg",
    },
  ];

  return (
    <div className="bg-amber-50 py-20 px-6">
      <h2 className="text-center text-4xl font-extrabold text-amber-800 mb-12">
        Features
      </h2>

      <div className="max-w-6xl mx-auto space-y-16">
        {featureList.map((item, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 items-center gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-amber-700 mb-4">
                {item.title}
              </h3>
              <ul className="space-y-2 text-gray-700">
                {item.desc.map((line, i) => (
                  <li key={i}>• {line}</li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-80 md:w-96 rounded-xl shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
