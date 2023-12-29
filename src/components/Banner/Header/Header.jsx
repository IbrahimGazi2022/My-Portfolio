import { GiCandleFlame } from "react-icons/gi";
import "./header.css";

const Header = () => {
  return (
    <div className="container">
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
            <a href="#service">Services</a>
          </span>
          <span>
            <a href="#project">Projects</a>
          </span>
          <span>
            <a href="#client">Testimonials</a>
          </span>
          <span>
            <a href="#footer">Portfolio</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
