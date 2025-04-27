import { Link } from "react-router-dom";
import React from "react";

function Header({ toggleLightMode, isLightMode }) {
  return (
    <header className={`p-6 flex justify-between items-center backdrop-blur-lg shadow-md ${isLightMode ? "bg-white text-teal-800" : "bg-gray-900 text-white"}`}>
      <h1 className="text-3xl font-extrabold text-teal-400 tracking-wider">
        <Link to="/">DEVCONNECT</Link>
      </h1>
      <nav className="space-x-6 text-lg">
        <Link to="/" className="text-gray-300 hover:text-teal-400 transition-all font-medium">
          Home
        </Link>
        <Link to="/users" className="text-gray-300 hover:text-teal-400 transition-all font-medium">
          Users
        </Link>
      </nav>
      <button
        onClick={toggleLightMode}
        className="ml-6 text-white p-2 rounded-full bg-teal-400 hover:bg-teal-500 transition-colors"
      >
        {isLightMode ? "🌙" : "☀️"}
      </button>
    </header>
  );
}

export default Header;
