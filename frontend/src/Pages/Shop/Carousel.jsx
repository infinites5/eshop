import React from "react";
import { Carousel } from "antd";
//import "antd/dist/antd.css";
import "antd/lib/carousel/style/index.css";
import styled from "styled-components";

const Catalog = styled.div`
  background: url(${(props) => props.img});
  width: 100%;
  min-height: 400px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: grid;

  h3 {
    margin: 0;
    font-size: 40px;
    color: #ffffff;
    padding: 20px 40px;

    min-height: 400px;
    text-transform: uppercase;
    letter-spacing: 0.3ch;
  }
`;

const data = [
  {
    tag: "The Choice of Champions",
    img: "https://wallpapercave.com/wp/wp7546598.jpg",
  },
  {
    tag: "The way it's meant to be played",
    img: "https://wallpapercave.com/wp/wp8131604.jpg",
  },
  {
    tag: "Join the master race",
    img: "https://i.pinimg.com/originals/c7/49/ee/c749eeef2d1dbb42a71b2b5313e3dce9.jpg",
  },
];

function Hero() {
  return (
    <div>
      <Carousel effect="scrollx" dotPosition="right" autoplay>
        {data?.map((item) => (
          <Catalog img={item.img}>
            <h3>{item.tag}</h3>
          </Catalog>
        ))}
      </Carousel>
    </div>
  );
}

export default Hero;
