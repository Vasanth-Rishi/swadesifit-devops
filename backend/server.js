console.log("STARTING SERVER...");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 🧠 Temporary storage (like fake database)
let users = [];

// Test route
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

// 🔥 Diet API
app.post("/diet", (req, res) => {
  console.log("API HIT 🔥");

  const { weight, goal, type } = req.body;

  let calories;

  if (goal === "weight loss") calories = weight * 25;
  else if (goal === "muscle") calories = weight * 35;
  else calories = weight * 30;

  let diet;

  if (goal === "weight loss") {
    diet = {
      calories,
      breakfast: type === "veg" ? "Oats + Fruits" : "Boiled Eggs + Fruits",
      lunch: type === "veg" ? "Roti + Dal" : "Rice + Chicken",
      dinner: type === "veg" ? "Salad + Soup" : "Grilled Chicken",
    };
  } else if (goal === "muscle") {
    diet = {
      calories,
      breakfast: type === "veg" ? "Paneer + Milk" : "Eggs + Milk",
      lunch: type === "veg" ? "Rice + Dal + Paneer" : "Rice + Chicken + Eggs",
      dinner: type === "veg" ? "Roti + Paneer" : "Chicken + Roti",
    };
  } else {
    diet = {
      calories,
      breakfast: type === "veg" ? "Banana + Milk" : "Eggs + Milk",
      lunch: type === "veg" ? "Roti + Vegetables" : "Rice + Chicken",
      dinner: type === "veg" ? "Fruits" : "Chicken soup",
    };
  }

  res.json(diet);
});

// 🔐 Signup API
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  users.push({ name, email, password });

  console.log("Users:", users);

  res.json({ message: "User registered successfully" });
});

// 🔐 Login API
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    res.json({ message: "Login successful", user });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

console.log("END OF FILE");