import * as actionTypes from "./actionType";

const initState = {
  isLoading: false,
  isError: false,
  cart: [],
  wishlist: [],
  uniqueCart: [],
  uniqueWishlist: [],
};

export const cartWishReducer = (state = initState, { type, data }) => {
  switch (type) {
    case actionTypes.POST_CART_REQUEST:
      return { ...state, isError: false, isLoading: true };

    case actionTypes.POST_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case actionTypes.POST_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case actionTypes.GET_CART_REQUEST:
      return { ...state, isError: false, isLoading: true };

    case actionTypes.GET_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        cart: data.data,
      };

    case actionTypes.GET_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case actionTypes.DELETE_CART_REQUEST:
      return { ...state, isError: false, isLoading: true };

    case actionTypes.DELETE_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case actionTypes.DELETE_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case actionTypes.POST_WISHLIST_REQUEST:
      return { ...state, isError: false, isLoading: true };

    case actionTypes.POST_WISHLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case actionTypes.POST_WISHLIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case actionTypes.GET_WISHLIST_REQUEST:
      return { ...state, isError: false, isLoading: true };

    case actionTypes.GET_WISHLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        wishlist: data.data,
      };

    case actionTypes.GET_WISHLIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case actionTypes.DELETE_WISHLIST_REQUEST:
      return { ...state, isError: false, isLoading: true };

    case actionTypes.DELETE_WISHLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case actionTypes.DELETE_WISHLIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case actionTypes.UNIQUE_CART:
      return {
        ...state,
        uniqueCart: data,
      };

    case actionTypes.UNIQUE_WISHLIST:
      return {
        ...state,
        uniqueWishlist: data,
      };

    case actionTypes.EMPTY_CART_REQUEST:
      return { ...state, isError: false, isLoading: true };

    case actionTypes.EMPTY_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case actionTypes.EMPTY_CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
