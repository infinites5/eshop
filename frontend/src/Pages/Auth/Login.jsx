import React from "react";
import { AuthButton, AuthForm } from "./Auth";
import { useDispatch, useSelector } from "react-redux";
import { getLoginHandler } from "../../Redux/Auth/action";
import Snackbar from "@material-ui/core/Snackbar";

const initState = {
  email: "",
  password: "",
};

function Login() {
  const [formData, setFormData] = React.useState(initState);
  const isLoading = useSelector((state) => state.authReducer.isLoading);
  const isError = useSelector((state) => state.authReducer.isError);
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const statusCode = useSelector((state) => state.authReducer.status);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  function onChangeHandler(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    dispatch(getLoginHandler(formData));

    if (isAuth) {
      return setOpen(false);
    } else if (isError) {
      return setOpen(true);
    }
  }

  const { email, password } = formData;
  return (
    <>
      <AuthForm onSubmit={onSubmitHandler}>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Please Check your email and password"
        />
        <div>
          <input
            onChange={onChangeHandler}
            name="email"
            value={email}
            placeholder="Email"
            type="email"
            required
          />
        </div>
        <div>
          <input
            onChange={onChangeHandler}
            name="password"
            value={password}
            placeholder="Password"
            type="password"
            required
          />
        </div>
        <div>
          <AuthButton disabled={isAuth}>
            {isAuth ? (
              <>
                Success
                <i class="far fa-check-circle"> </i>
              </>
            ) : (
              "Login"
            )}
          </AuthButton>
        </div>
      </AuthForm>
    </>
  );
}

export default Login;
