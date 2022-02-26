import { deleteData, getData, storeData } from "../../Utils/persistUser";
import * as actionTypes from "./actionType";
let initState;

let localUser = getData();

if (localUser !== null) {
  initState = {
    isLoading: false,
    isError: false,
    isAuth: true,
    userData: localUser,
    status: 0,
  };
} else {
  initState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    userData: {},
    status: 0,
  };
}

export const authReducer = (state = initState, { type, data, status }) => {
  switch (type) {
    case actionTypes.GET_LOGIN_REQUEST:
      return { ...state, isError: false, isLoading: true, isAuth: false };

    case actionTypes.GET_LOGIN_SUCCESS:
      storeData(data.userData);
      return {
        ...state,
        isLoading: false,
        isError: false,
        userData: data.userData,
        isAuth: true,
        status: status,
      };

    case actionTypes.GET_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        status: status,
      };

    case actionTypes.GET_SIGNUP_REQUEST:
      return { ...state, isError: false, isLoading: true, isAuth: false };

    case actionTypes.GET_SIGNUP_SUCCESS:
      storeData(data.userData);
      return {
        ...state,
        isLoading: false,
        isError: false,
        userData: data.userData,
        isAuth: true,
        status: status,
      };

    case actionTypes.GET_SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        status: status,
      };

    case actionTypes.HANDLE_LOGOUT:
      deleteData();
      return {
        ...state,
        isLoading: false,
        isError: false,
        userData: {},
        isAuth: false,
        status: 0,
      };

    default:
      return state;
  }
};
