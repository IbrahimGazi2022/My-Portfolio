import { MdEmail } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";

import "./contact.css";

const Contact = () => {
  return (
    <div className="container" id="contact">
      <div className="project">
        <h1>
          <span className="green">Contact </span>Me
        </h1>
      </div>
      <div className="main">
        <div className="address">
          <h1>Ibrahim - The Coder</h1>
          <br />
          <h3>Address :</h3>
          <p>Khulna Sadar - 9100, Khulna.</p>
          <br />
          <div className="add-details">
            <h3>Contact me directly :</h3>
            <p>
              <TbPhoneCall /> +880 1732 570 530
            </p>
            <p>
              <MdEmail /> coder.ibrahimgazi@gmail.com
            </p>
          </div>
          <br />
          <div className="social-icons">
            <p>Check my profiles</p>
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
        <div className="contact-form">
          <form action="" method="post">
            <label htmlFor="name">Name :</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" required />

            <label for="message">Message :</label>
            <textarea id="message" name="message" rows="10" required></textarea>

            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
