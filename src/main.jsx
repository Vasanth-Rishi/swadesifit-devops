import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 🔥 Import CSS (important for styling)
import "./index.css";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Dashboard from "./pages/Dashboard";
import Fitness from "./pages/Fitness";
import Sports from "./pages/Sports";
import Diet from "./pages/Diet";
import TDEE from "./pages/TDEE";
import Tracker from "./pages/Tracker";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>

      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* App Features */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/fitness" element={<Fitness />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/diet" element={<Diet />} />
      <Route path="/tdee" element={<TDEE />} />
      <Route path="/tracker" element={<Tracker />} />

    </Routes>
  </BrowserRouter>
);