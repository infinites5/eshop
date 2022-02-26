import * as actionTypes from "./actionType";

const initState = {
  isLoading: false,
  isError: false,
  orders : []
};

export const ordersReducer = (state = initState, { type, data }) => {
  switch (type) {
    case actionTypes.POST_ORDERS_REQUEST:
      return { ...state, isError: false, isLoading: true };

    case actionTypes.POST_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case actionTypes.POST_ORDERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case actionTypes.GET_ORDERS_REQUEST:
      return { ...state, isError: false, isLoading: true };

    case actionTypes.GET_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        orders: data.data,
      };

    case actionTypes.GET_ORDERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
 

    default:
      return state;
  }
};
