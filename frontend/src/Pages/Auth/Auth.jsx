import React from "react";
import styled from "styled-components";
import Login from "./Login";
import Signup from "./Signup";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import Snackbar from "@material-ui/core/Snackbar";

const AuthWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  transition: all 500ms ease;
`;

const AuthSection = styled.div`
  min-height: 70vh;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -30%);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
`;

const AuthNav = styled.div`
  display: flex;
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  * {
    transition: all 200ms ease;
  }

  > div {
    width: 50%;
    padding: 30px;
    text-align: center;
  }
  > div:nth-child(1) {
    color: ${(props) => (props.status === "login" ? "black" : "grey")};
  }
  > div:nth-child(2) {
    color: ${(props) => (props.status === "login" ? "grey" : "black")};
  }
`;

export const AuthForm = styled.form`
  width: 100%;
  > div {
    width: 100%;
    margin: 20px 0;
    > input {
      width: 100%;
      padding: 20px;
      border: 1px solid #e4e4e4;
      border-radius: 5px;
      outline: none;
      font-size: 18px;
      transition: all 500ms ease;
      :focus {
        border: 1px solid #858282;
      }
    }
    button {
      width: 100%;
    }
  }
`;

export const AuthButton = styled.button`
  transition: all 500ms ease;
  background-color: ${(props) => props.theme.btnBackground};
  color: white;
  border: none;
  padding: 15px;
  border-radius: 5px;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.2ch;
  font-weight: 600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border: 1px solid ${(props) => props.theme.btnBackground};
  :hover {
    background-color: white;
    color: ${(props) => props.theme.btnBackground};
  }
  :disabled {
    background-color: #42b813;
    border: 1px solid #42b813;
  }
`;

const AuthMain = styled.div``;

function Auth() {
  const { auth } = useParams();
  const history = useHistory();
  const [current, setCurrent] = React.useState(auth);
  const isLoading = useSelector((state) => state.authReducer.isLoading);
  const isError = useSelector((state) => state.authReducer.isError);
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const statusCode = useSelector((state) => state.authReducer.status);
  const [open, setOpen] = React.useState(false);

  function onSwitchHandler(flag) {
    if (flag === 1) {
      setCurrent("signup");
      history.push("/auth/signup");
    } else {
      setCurrent("login");
      history.push("/auth/login");
    }
  }

  React.useEffect(() => {
    if (isError) {
      setOpen(true);
    }
  }, [isError]);

  return (
    <AuthWrapper>
      <AuthSection>
        <AuthNav status={current}>
          <div onClick={() => onSwitchHandler(0)}>
            <h1>Login</h1>
          </div>
          <div onClick={() => onSwitchHandler(1)}>
            <h1>Signup</h1>
          </div>
        </AuthNav>
        <AuthMain>{current === "login" ? <Login /> : <Signup />}</AuthMain>
      </AuthSection>
    </AuthWrapper>
  );
}

export default Auth;
