function Footer({ isLightMode }) {
    return (
      <footer className={`text-center py-6 ${isLightMode ? "bg-white text-teal-800" : "bg-black text-white"} text-sm backdrop-blur-md`}>
        © 2025 <span className="text-teal-400 font-semibold">DEVCONNECT</span> | All rights reserved.
      </footer>
    );
  }
  
  export default Footer;
  