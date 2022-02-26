import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  min-height: 6vh;
  background-color: #111011;
  width: 100%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  > div {
    margin: 0px 15px;
  }
  p {
    font-size: 16px;
    display: inline;
    margin-right: 5px;
    letter-spacing: 0.3ch;
  }
  a {
    text-decoration: underline;
    text-transform: uppercase;
    letter-spacing: 0.2ch;
  }
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.btnBackground};
  color: #0c0a0a;
  border: none;
  padding: 8px 10px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  min-width: 80px;
  background-color: white;
`;

function Footer() {
  return (
    <FooterWrapper>
      <div>
        <p>Developed by</p>
        <a href="http://www.akshaykadam.tech/">Akshay Kadam</a>
      </div>
      {/* <div>
        <a href="#">
          <Button>Source Code</Button>
        </a>
      </div> */}
    </FooterWrapper>
  );
}

export default Footer;
