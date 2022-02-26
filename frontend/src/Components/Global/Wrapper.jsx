import styled from "styled-components";

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
`;

export { PageWrapper };
