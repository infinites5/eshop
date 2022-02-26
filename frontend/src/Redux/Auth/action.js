import axios from "axios";
import * as actionTypes from "./actionType";

const getLoginRequest = () => {
  return {
    type: actionTypes.GET_LOGIN_REQUEST,
  };
};

const getLoginSuccess = (data, status) => {
  return {
    type: actionTypes.GET_LOGIN_SUCCESS,
    data,
    status,
  };
};

const getLoginFailure = (status) => {
  return {
    type: actionTypes.GET_LOGIN_FAILURE,
    status,
  };
};

export const getLoginHandler = (payload) => (dispatch) => {
  dispatch(getLoginRequest());
  return axios
    .post(`https://geekbackend.herokuapp.com/auth/login`, payload)
    .then((res) => dispatch(getLoginSuccess(res.data, res.status)))
    .catch((err) => dispatch(getLoginFailure(err.status)));
};

//sign up

const getSignupRequest = () => {
  return {
    type: actionTypes.GET_SIGNUP_REQUEST,
  };
};

const getSignupSuccess = (data, status) => {
  return {
    type: actionTypes.GET_SIGNUP_SUCCESS,
    data,
    status,
  };
};

const getSignupFailure = (status) => {
  return {
    type: actionTypes.GET_SIGNUP_FAILURE,
    status,
  };
};

export const getSignupHandler = (payload) => (dispatch) => {
  dispatch(getSignupRequest());
  return axios
    .post(`https://geekbackend.herokuapp.com/auth/signup`, payload)
    .then((res) => dispatch(getSignupSuccess(res.data, res.status)))
    .catch((err) => dispatch(getSignupFailure(err.status)));
};

export const handleLogout = () => {
  return {
    type: actionTypes.HANDLE_LOGOUT,
  };
};
