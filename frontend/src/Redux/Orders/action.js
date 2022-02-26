import axios from "axios";
import * as actionTypes from "./actionType";

//cart post

const postOrderRequest = () => {
  return {
    type: actionTypes.POST_ORDERS_REQUEST,
  };
};

const postOrderSuccess = (data) => {
  return {
    type: actionTypes.POST_ORDERS_SUCCESS,
    data,
  };
};

const postOrderFailure = () => {
  return {
    type: actionTypes.POST_ORDERS_FAILURE,
  };
};

export const postOrderHandler = (payload) => (dispatch) => {
  dispatch(postOrderRequest());
  return axios
    .post(`https://geekbackend.herokuapp.com/orders`, payload)
    .then((res) => dispatch(postOrderSuccess(res.data)))
    .catch((err) => dispatch(postOrderFailure()));
};

//cart get

const getOrdersRequest = () => {
  return {
    type: actionTypes.GET_ORDERS_REQUEST,
  };
};

const getOrdersSuccess = (data) => {
  return {
    type: actionTypes.GET_ORDERS_SUCCESS,
    data,
  };
};

const getOrdersFailure = () => {
  return {
    type: actionTypes.GET_ORDERS_FAILURE,
  };
};

export const getOrdersHandler = (id) => (dispatch) => {
  dispatch(getOrdersRequest());
  return axios
    .get(`https://geekbackend.herokuapp.com/orders/${id}`)
    .then((res) => dispatch(getOrdersSuccess(res.data)))
    .catch((err) => dispatch(getOrdersFailure()));
};
