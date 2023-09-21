import React, { useState, useEffect } from "react";
import Navbar from "../components/Nav";
import Login from "../components/auth/Login";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full h-screen">
      <Navbar />
      <Login />
    </div>
  );
};

export default Home;
