import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // 🔐 HANDLE LOGIN
  const handleLogin = async () => {
    if (!email || !password) {
      alert("Enter all details");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login successful ✅");

        // ✅ store user
        localStorage.setItem("user", JSON.stringify(data.user));

        // ✅ IMPORTANT FIX (this was missing)
        localStorage.setItem("isLoggedIn", "true");

        console.log("Redirecting to dashboard...");

        // ✅ Proper React navigation
        navigate("/dashboard");

      } else {
        alert(data.message);
      }

    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  // 🆕 HANDLE SIGNUP
  const handleSignup = async () => {
    if (!name || !email || !password) {
      alert("Fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful ✅");

        // switch to login mode
        setIsSignup(false);

      } else {
        alert(data.message);
      }

    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-orange-50">
      
      <h2 className="text-3xl font-bold text-amber-700 mb-6">
        {isSignup ? "Signup" : "Login"}
      </h2>

      {isSignup && (
        <input
          type="text"
          placeholder="Name"
          className="p-2 m-2 border rounded"
          onChange={(e) => setName(e.target.value)}
        />
      )}

      <input
        type="email"
        placeholder="Email"
        className="p-2 m-2 border rounded"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="p-2 m-2 border rounded"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={isSignup ? handleSignup : handleLogin}
        className="bg-amber-600 text-white px-6 py-2 rounded mt-4"
      >
        {isSignup ? "Signup" : "Login"}
      </button>

      {/* SWITCH */}
      <p className="mt-4">
        {isSignup ? "Already have an account?" : "Don't have an account?"}
        <span
          className="text-orange-600 cursor-pointer ml-2"
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup ? "Login" : "Signup"}
        </span>
      </p>

    </div>
  );
}