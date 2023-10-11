import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { light, dark, isLightTheme, toggleTheme } = useContext(ThemeContext);

  const themeStyles = isLightTheme ? light : dark;

  return (
    <>
      <div
        className="nav_container"
        style={{ background: themeStyles.ui, color: themeStyles.text }}
      >
        <Link to="/" className="navlink">
          Home
        </Link>
        <Link to="/ranking" className="navlink">
          Ranking
        </Link>
        <button
          style={{ background: themeStyles.ui, color: themeStyles.text }}
          onClick={toggleTheme}
        >
          {isLightTheme ? "🌙" : "💡"}{" "}
        </button>
      </div>
    </>
  );
}

export default Navbar;
