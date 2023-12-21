import React, { useState } from "react";
import styled from "styled-components";
import { GiCandleFlame } from "react-icons/gi";

const Header = () => {
  const [bar, setBar] = useState(false);
  return (
    <Container bar={bar}>
      <Logo>
        <span className="green">
          <GiCandleFlame />
        </span>
        <h1>The Coder</h1>
      </Logo>
      <Nav bar={bar}>
        <span>
          <a href="#">Home</a>
        </span>
        <span>
          <a href="#">Services</a>
        </span>
        <span>
          <a href="#">Projects</a>
        </span>
        <span>
          <a href="#">Testimonials</a>
        </span>
        <span>
          <a href="#">Portfolio</a>
        </span>
      </Nav>

      <div onClick={() => setBar(!bar)} className="bars">
        <div className="bar"></div>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 0;

  @media (max-width: 840px) {
    width: 90%;
  }
  .bars {
    display: none;
  }
  @media (max-width: 640px) {
    .bars {
      width: 40px;
      height: 40px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      .bar {
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${(props) => (props.bar ? "transparent" : "#fff")};
        transition: transform 400ms ease-in-out;
      }
      ::before,
      :after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #fff;
      }
      :before {
        transform: ${(props) =>
          props.bar ? "rotate(45deg)" : "translateY(10px)"};
        transition: transform 400ms ease-in-out;
      }
      :after {
        transform: ${(props) =>
          props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
        transition: transform 400ms ease-in-out;
      }
    }
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 24px;
  }

  h1 {
    font-size: 20px;
    font-weight: 600;
  }
`;
const Nav = styled.div`
  @media (max-width: 640px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: #01be96;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    gap: 32px;
    height: ${(props) => (props.bar ? "100vh" : 0)};
    transition: height 400ms ease-in-out;
    overflow: hidden;
  }
  span {
    margin-left: 15px;
    a {
      color: #fff;
      text-decoration: none;
      font-weight: 400;
      position: relative;
    }
    :before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      background-color: #fff;
      height: 2px;
      bottom: -5px;
      transform: scale(0);
      transform-origin: right;
      transition: transform 400ms ease-in-out;
    }
    :hover:before {
      transform: scale(1);
      transform-origin: left;
    }
    :hover {
      opacity: 0.7;
    }
  }
`;
