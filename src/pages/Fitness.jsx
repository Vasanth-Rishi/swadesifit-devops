import { Link } from "react-router-dom";

export default function Fitness() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-4xl font-bold text-amber-700 mb-2">
        Fitness Plans
      </h1>

      <p className="text-gray-600 mb-6">
        Powered by SwadesiFit Recommendation System
      </p>

      <img
        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
        alt="Fitness"
        className="w-80 rounded-2xl shadow-lg mb-6"
      />

      <p className="text-lg text-gray-700 max-w-md">
        Personalized workout routines for weight loss, muscle gain, and stamina improvement.
      </p>

      <Link to="/dashboard">
        <button className="mt-6 bg-amber-600 text-white px-5 py-2 rounded hover:bg-amber-700 transition">
          ← Back to Dashboard
        </button>
      </Link>

    </div>
  );
}