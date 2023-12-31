import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false); // Add state for authentication status

  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsAuthenticating(true);
    setError("");

    // Simulate an asynchronous login process for 1 second
    setTimeout(() => {
      if (email === "user@example.com" && password === "1Password") {
        navigate("/gallery");
      } else {
        setError("Invalid email or password");
        // Display default username and password in the input fields when the login fails
        setEmail("user@example.com");
        setPassword("1Password");
      }
      setIsAuthenticating(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="bg-white bg-opacity-10 py-3 px-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-bg hover:text-hover mx-auto text-center">
          Login
        </h2>
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-1 border bg-gray-100 rounded-lg text-sm focus:outline-none focus:border-bg"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-1 border bg-gray-100 rounded-lg text-sm focus:outline-none focus:border-bg"
          />
          <button
            onClick={handleLogin}
            className={`w-full bg-bg text-white py-1 rounded-lg hover:bg-hover transition duration-300 ${
              isAuthenticating ? "opacity-50 cursor-wait" : "" // Disable the button and change cursor when authenticating
            }`}
            disabled={isAuthenticating} // Disable the button when authenticating
          >
            {isAuthenticating ? "Authenticating..." : "Login"}
          </button>
        </div>
        {error && (
          <p className="mt-4 text-center text-red-500 text-xs">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
