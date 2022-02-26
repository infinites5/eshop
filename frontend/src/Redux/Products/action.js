import axios from "axios";
import * as actionTypes from "./actionType";

const getProductsRequest = () => {
  return {
    type: actionTypes.GET_PRODUCTS_REQUEST,
  };
};

const getProductsSuccess = (data) => {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    data,
  };
};

const getProductsFailure = () => {
  return {
    type: actionTypes.GET_PRODUCTS_FAILURE,
  };
};

export const getProductsHandler =
  (payload, currentPage, sortSelection) => (dispatch) => {
    dispatch(getProductsRequest());
    return axios
      .post(
        `https://geekbackend.herokuapp.com/products?page=${currentPage}&sort=${sortSelection}`,
        payload
      )
      .then((res) => dispatch(getProductsSuccess(res.data)))
      .catch((err) => dispatch(getProductsFailure()));
  };

const getCategoriesRequest = () => {
  return {
    type: actionTypes.GET_CATEGORIES_REQUEST,
  };
};

const getCategoriesSuccess = (data) => {
  return {
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    data,
  };
};

const getCategoriesFailure = () => {
  return {
    type: actionTypes.GET_CATEGORIES_FAILURE,
  };
};

export const getCategoriesHandler = () => (dispatch) => {
  dispatch(getCategoriesRequest());
  return axios
    .get("https://geekbackend.herokuapp.com/categories")
    .then((res) => dispatch(getCategoriesSuccess(res.data)))
    .catch((err) => dispatch(getCategoriesFailure()));
};

const getBrandsRequest = () => {
  return {
    type: actionTypes.GET_BRANDS_REQUEST,
  };
};

const getBrandsSuccess = (data) => {
  return {
    type: actionTypes.GET_BRANDS_SUCCESS,
    data,
  };
};

const getBrandsFailure = () => {
  return {
    type: actionTypes.GET_BRANDS_FAILURE,
  };
};

export const getBrandsHandler = () => (dispatch) => {
  dispatch(getBrandsRequest());
  return axios
    .get("https://geekbackend.herokuapp.com/brands")
    .then((res) => dispatch(getBrandsSuccess(res.data)))
    .catch((err) => dispatch(getBrandsFailure()));
};

const getSoloProductRequest = () => {
  return {
    type: actionTypes.GET_SOLO_PRODUCT_REQUEST,
  };
};

const getSoloProductSuccess = (data) => {
  return {
    type: actionTypes.GET_SOLO_PRODUCT_SUCCESS,
    data,
  };
};

const getSoloProductFailure = () => {
  return {
    type: actionTypes.GET_SOLO_PRODUCT_FAILURE,
  };
};

export const getSoloProductHandler = (id) => (dispatch) => {
  dispatch(getSoloProductRequest());
  return axios
    .get(`https://geekbackend.herokuapp.com/products/${id}`)
    .then((res) => {
      dispatch(getSoloProductSuccess(res.data));
    })
    .catch((err) => dispatch(getSoloProductFailure()));
};

// getting reviews for a product

const getProductReviewRequest = () => {
  return {
    type: actionTypes.GET_PRODUCT_REVIEWS_REQUEST,
  };
};

const getProductReviewSuccess = (data) => {
  return {
    type: actionTypes.GET_PRODUCT_REVIEWS_SUCCESS,
    data,
  };
};

const getProductReviewFailure = () => {
  return {
    type: actionTypes.GET_PRODUCT_REVIEWS_FAILURE,
  };
};

export const getProductReviewHandler = (id) => (dispatch) => {
  dispatch(getProductReviewRequest());
  return axios
    .get(`https://geekbackend.herokuapp.com/reviews/${id}`)
    .then((res) => dispatch(getProductReviewSuccess(res.data)))
    .catch((err) => dispatch(getProductReviewFailure()));
};

//posting reviews for a product

const postProductReviewRequest = () => {
  return {
    type: actionTypes.POST_PRODUCT_REVIEWS_REQUEST,
  };
};

const postProductReviewSuccess = () => {
  return {
    type: actionTypes.POST_PRODUCT_REVIEWS_SUCCESS,
  };
};

const postProductReviewFailure = () => {
  return {
    type: actionTypes.POST_PRODUCT_REVIEWS_FAILURE,
  };
};

export const postProductReviewHandler = (payload) => (dispatch) => {
  dispatch(postProductReviewRequest());

  return axios
    .post(`https://geekbackend.herokuapp.com/reviews/post`, payload)
    .then((res) => dispatch(postProductReviewSuccess(res.data)))
    .catch((err) => dispatch(postProductReviewFailure()));
};

// getting recommendations

const getRecommendationsRequest = () => {
  return {
    type: actionTypes.GET_RECOMMENDATIONS_REQUEST,
  };
};

const getRecommendationsSuccess = (data) => {
  return {
    type: actionTypes.GET_RECOMMENDATIONS_SUCCESS,
    data,
  };
};

const getRecommendationsFailure = () => {
  return {
    type: actionTypes.GET_RECOMMENDATIONS_FAILURE,
  };
};

export const getRecommendationsHandler = (id) => (dispatch) => {
  dispatch(getRecommendationsRequest());
  return axios
    .get(`https://geekbackend.herokuapp.com/products/category/${id}`)
    .then((res) => dispatch(getRecommendationsSuccess(res.data)))
    .catch((err) => dispatch(getRecommendationsFailure()));
};

// more from same brand
const getFromSameBrandRequest = () => {
  return {
    type: actionTypes.GET_FROM_SAME_BRAND_REQUEST,
  };
};

const getFromSameBrandSuccess = (data) => {
  return {
    type: actionTypes.GET_FROM_SAME_BRAND_SUCCESS,
    data,
  };
};

const getFromSameBrandFailure = () => {
  return {
    type: actionTypes.GET_FROM_SAME_BRAND_FAILURE,
  };
};

export const getFromSameBrandHandler = (id) => (dispatch) => {
  dispatch(getFromSameBrandRequest());
  return axios
    .get(`https://geekbackend.herokuapp.com/products/brand/${id}`)
    .then((res) => dispatch(getFromSameBrandSuccess(res.data)))
    .catch((err) => dispatch(getFromSameBrandFailure()));
};

//search query for nav

// more from same brand
const getSearchRequest = () => {
  return {
    type: actionTypes.GET_SEARCH_REQUEST,
  };
};

const getSearchSuccess = (data) => {
  return {
    type: actionTypes.GET_SEARCH_SUCCESS,
    data,
  };
};

const getSearchFailure = () => {
  return {
    type: actionTypes.GET_SEARCH_FAILURE,
  };
};

export const getSearchHandler = (query) => (dispatch) => {
  dispatch(getSearchRequest());
  return axios
    .get(`https://geekbackend.herokuapp.com/products/search/${query}`)
    .then((res) => dispatch(getSearchSuccess(res.data)))
    .catch((err) => dispatch(getSearchFailure()));
};

//for home

const getProductsHomeRequest = () => {
  return {
    type: actionTypes.GET_PRODUCTS_HOME_REQUEST,
  };
};

const getProductsHomeSuccess = (data) => {
  return {
    type: actionTypes.GET_PRODUCTS_HOME_SUCCESS,
    data,
  };
};

const getProductsHomeFailure = () => {
  return {
    type: actionTypes.GET_PRODUCTS_HOME_FAILURE,
  };
};

export const getProductsHomeHandler = (payload, currentPage) => (dispatch) => {
  dispatch(getProductsHomeRequest());
  return axios
    .get(`https://geekbackend.herokuapp.com/products/home/products`)
    .then((res) => dispatch(getProductsHomeSuccess(res.data)))
    .catch((err) => dispatch(getProductsHomeFailure()));
};
