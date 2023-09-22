import React, { useState, useEffect } from "react";
import Navbar from "../components/Nav";
import Login from "../components/auth/Login";
import image from '../assets/beaches/img6.jpeg'

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const bg = image

  return (
    <div 
    style={{
      backgroundImage: `linear-gradient(
        to bottom,
        rgba(19, 10, 10, 0.5),
        rgba(19, 10, 13, 0.3)
      ), url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    className="w-full h-screen py-4">
      <Navbar />
      <Login />
    </div>
  );
};

export default Home;
