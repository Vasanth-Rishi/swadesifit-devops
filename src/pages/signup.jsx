import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    age: "",
    gender: "male",
    height: "",
    weight: "",
    goal: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!user.name || !user.age || !user.height || !user.weight || !user.goal) {
      alert("Please fill all fields");
      return;
    }

    // Save data
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "true");

    // Redirect
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold text-center text-amber-700 mb-4">
          Create Your Profile
        </h2>

        <input name="name" placeholder="Name" className="w-full border p-2 mb-2" onChange={handleChange} />
        <input name="age" type="number" placeholder="Age" className="w-full border p-2 mb-2" onChange={handleChange} />

        <select name="gender" className="w-full border p-2 mb-2" onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <input name="height" type="number" placeholder="Height (cm)" className="w-full border p-2 mb-2" onChange={handleChange} />
        <input name="weight" type="number" placeholder="Weight (kg)" className="w-full border p-2 mb-2" onChange={handleChange} />

        <select name="goal" className="w-full border p-2 mb-4" onChange={handleChange}>
          <option value="">Select Goal</option>
          <option value="weight loss">Weight Loss</option>
          <option value="muscle">Muscle Gain</option>
          <option value="stamina">Stamina</option>
        </select>

        <button
          onClick={handleSubmit}
          className="w-full bg-orange-500 text-white py-2 rounded"
        >
          Create Account
        </button>

      </div>
    </div>
  );
}