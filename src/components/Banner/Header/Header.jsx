import { GiCandleFlame } from "react-icons/gi";
import "./header.css";

const Header = () => {
  return (
    <div className="container" id="home">
      <div className="header">
        <div className="logo">
          <span className="green">
            <GiCandleFlame />
          </span>
          <h1>The Coder</h1>
        </div>
        <div className="nav">
          <span>
            <a href="#home">Home</a>
          </span>
          <span>
            <a href="#about">About Me</a>
          </span>
          <span>
            <a href="#project">Projects</a>
          </span>
          <span>
            <a href="#contact">Contact</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
