import { AiOutlineInstagram } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <div className="container">
        <div className="profile">
          <div className="profile-text">
            <h4>
              Hello <span className="green">I Am</span>
            </h4>
            <h1 className="green">Ibrahim Gazi</h1>
            <h3>Web Application Developer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              iusto. Adipisci in qui officia provident tenetur sequi, deserunt
              corporis quos?
            </p>
            <button>Let's Talk</button>
            <div className="social-icons">
              <p>Check out my</p>
              <span>
                <a href="/">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="/">
                  <GiEarthAmerica />
                </a>
              </span>
              <span>
                <a href="/">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </div>
          <div className="profile-image">
            <img src="../../img/ProfilePicture.png" alt="profile picture" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
