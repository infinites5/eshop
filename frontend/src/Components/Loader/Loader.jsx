import React from "react";
import styled from "styled-components";
import preLoader from "../../Images/ring.svg";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  opacity: 0.9;
  background-color: #f1f2f3;
  position: relative;
`;

const PreLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

function Loader() {
  return (
    <Wrapper>
      <PreLoader>
        <figure>
          <img src={preLoader} alt="preloader"></img>
          <figcaption>
            If the site doesn't load automatically, please refresh after 5
            seconds.
          </figcaption>
        </figure>
      </PreLoader>
    </Wrapper>
  );
}

export default Loader;
