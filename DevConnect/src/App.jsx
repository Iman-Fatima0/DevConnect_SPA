import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Users from "./Pages/Users";

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleLightMode = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  return (
    <div className={`${isLightMode ? "bg-white text-teal-800" : "bg-gray-900 text-white"} min-h-screen`}>
      <Header isLightMode={isLightMode} toggleLightMode={toggleLightMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
