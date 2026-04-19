import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import FitnessRecommender from "./FitnessRecommender";

export default function SwadesiHomepage() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const featureList = [
    {
      title: "TDEE Calculator",
      link: "/tdee",
      desc: [
        "Calculate your Total Daily Energy Expenditure.",
        "Personalized calorie needs based on your input.",
        "Simple, fast, and tailored to your fitness goals.",
      ],
      img: "https://www.sciencelearn.org.nz/_next/image?url=https://www.datocms-assets.com/117510/1755834208-update_total-daily-energy-expenditure_21-aug-25.png",
    },
    {
      title: "AI Calorie Tracker",
      link: "/tracker",
      desc: [
        "AI-powered meal tracking with photo recognition.",
        "Log food effortlessly — no manual calculations.",
        "Smart insights to keep your diet on track.",
      ],
      img: "https://www.fatcalc.com/assets/images/bwp/bwp-02-1x1.jpg",
    },
    {
      title: "Explore Swadesi Sports",
      link: "/sports",
      desc: [
        "Promotes Traditional Indian Games.",
        "Reviving age-old Indian games like kabaddi, kho-kho, gilli-danda, and kushti.",
        "Develop stamina, agility, mental strength, teamwork, and leadership qualities.",
      ],
      img: "https://skchildrenfoundation.org/wp-content/uploads/2023/09/blogpost-main-1.png",
    },
    {
      title: "Indian Diet Recommendations",
      link: "/diet",
      desc: [
        "Healthy Swadesi-style meal plans.",
        "Vegetarian, vegan, high-protein options.",
        "Balanced nutrition based on Indian foods.",
      ],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkibSnnEDnqx5l3DvCDusq_6vo9agEQRsURchFHGLT46XPNqx1e2fyFghpBTFIxauCny4&usqp=CAU",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 text-gray-900 font-sans">

      {/* NAVBAR */}
      <nav className="w-full bg-white/70 backdrop-blur-md shadow-sm fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

          <div className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold text-amber-600">⚡</span>
            <h1 className="text-xl font-bold tracking-wide text-amber-700">
              SWADESIFIT
            </h1>
          </div>

          <div className="hidden md:flex space-x-8 text-base font-medium">
            <a href="#" className="text-amber-700 border-b-2 border-amber-700 pb-1">Home</a>
            <a href="#features" className="hover:text-amber-900 transition">Features</a>
            <a href="#about" className="hover:text-amber-900 transition">About Us</a>
            <a href="#contact" className="hover:text-amber-900 transition">Contact</a>
          </div>

          <Link to="/login">
            <button className="bg-amber-600 text-white px-5 py-2 rounded-full shadow hover:bg-amber-700 transition">
              Sign In
            </button>
          </Link>

        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        <div data-aos="fade-right">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-amber-800">
            Track Your <br /> Fitness Smartly
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-md">
            Traditional wellness with modern AI — tailored insights for your fitness journey.
          </p>

          <div className="flex gap-4 mt-6">

            {/* 🔥 FIXED START NOW BUTTON */}
            <Link to="/signup">
              <button className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-3 rounded-full shadow hover:from-orange-600 hover:to-amber-700 transition">
                Start Now
              </button>
            </Link>

            <Link to="/dashboard">
              <button className="bg-amber-700 text-white px-6 py-3 rounded-full shadow hover:bg-amber-800 transition">
                Go to Dashboard
              </button>
            </Link>

          </div>
        </div>

        <div className="flex justify-center" data-aos="zoom-in">
          <img
            src="https://img.freepik.com/premium-vector/happy-independence-day-india-15th-august-background_1322553-25273.jpg"
            alt="Fitness"
            className="rounded-2xl shadow-xl w-80 md:w-full object-cover"
          />
        </div>

      </section>

      {/* COUNTERS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">
          {[
            { number: "2,000+", label: "Daily Users" },
            { number: "300+", label: "Indian Games" },
            { number: "5,000+", label: "Calories Tracked" },
            { number: "15,000+", label: "Steps Counted" }
          ].map((item, i) => (
            <div key={i} className="bg-orange-50 p-8 rounded-2xl shadow">
              <h3 className="text-3xl font-bold text-amber-700">{item.number}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-amber-50 py-20 px-6">
        <h2 className="text-center text-4xl font-extrabold text-amber-800 mb-12">
          Features
        </h2>

        <div className="max-w-6xl mx-auto space-y-16">
          {featureList.map((item, index) => (
            <Link to={item.link} key={index}>
              <div className="grid md:grid-cols-2 items-center gap-10 cursor-pointer hover:scale-105 hover:shadow-2xl transition">
                
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

                <div className="flex justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-80 h-52 object-cover rounded-[40px] shadow-xl"
                  />
                </div>

              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SMART FEATURE */}
      <FitnessRecommender />

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-amber-800 mb-4">
            About SwadesiFit
          </h2>
          <p className="text-gray-700 text-lg">
            SwadesiFit blends traditional Indian wellness knowledge with modern AI-powered fitness tracking.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-amber-50 text-center">
        <h2 className="text-4xl font-extrabold text-amber-800 mb-6">
          Contact Us
        </h2>
        <p>swadesifit.support@gmail.com</p>
      </section>

    </div>
  );
}