import * as actionTypes from "./actionType";

const initState = {
  isLoading: false,
  isError: false,
  isSoloLoading: false,
  isSoloError: false,
  minPrice: 0,
  maxPrice: 0,
  productsTotal: 0,
  products: [],
  brands: [],
  categories: [],
  soloProduct: {},
  reviews: [],
  recommendations: [],
  moreFromSameBrand: [],
  searchSuggestions: [],
  featured: [],
  popular: [],
};

export const productReducer = (state = initState, { type, data }) => {
  switch (type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return { ...state, isLoading: true };

    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: data.products,
        productsTotal: data.totalProducts,

        minPrice: data.min,
        maxPrice: data.max,
      };

    case actionTypes.GET_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case actionTypes.GET_CATEGORIES_REQUEST:
      return { ...state, isLoading: true };

    case actionTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: data.data,
      };

    case actionTypes.GET_CATEGORIES_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case actionTypes.GET_BRANDS_REQUEST:
      return { ...state, isLoading: true };

    case actionTypes.GET_BRANDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        brands: data.data,
      };

    case actionTypes.GET_BRANDS_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case actionTypes.GET_SOLO_PRODUCT_REQUEST:
      return { ...state, isSoloLoading: true };

    case actionTypes.GET_SOLO_PRODUCT_SUCCESS:
      return {
        ...state,
        isSoloLoading: false,
        soloProduct: data.data,
      };

    case actionTypes.GET_SOLO_PRODUCT_FAILURE:
      return { ...state, isSoloLoading: false, isSoloError: true };

    case actionTypes.GET_PRODUCT_REVIEWS_REQUEST:
      return { ...state, isLoading: true };

    case actionTypes.GET_PRODUCT_REVIEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        reviews: data.data,
      };

    case actionTypes.GET_PRODUCT_REVIEWS_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case actionTypes.POST_PRODUCT_REVIEWS_REQUEST:
      return { ...state, isLoading: true };

    case actionTypes.POST_PRODUCT_REVIEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case actionTypes.POST_PRODUCT_REVIEWS_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case actionTypes.GET_RECOMMENDATIONS_REQUEST:
      return { ...state, isLoading: true };

    case actionTypes.GET_RECOMMENDATIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        recommendations: data.data,
      };

    case actionTypes.GET_RECOMMENDATIONS_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case actionTypes.GET_FROM_SAME_BRAND_REQUEST:
      return { ...state, isLoading: true };

    case actionTypes.GET_FROM_SAME_BRAND_SUCCESS:
      return {
        ...state,
        isLoading: false,
        moreFromSameBrand: data.data,
      };

    case actionTypes.GET_FROM_SAME_BRAND_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case actionTypes.GET_SEARCH_REQUEST:
      return { ...state, isLoading: true };

    case actionTypes.GET_SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        searchSuggestions: data.data,
      };

    case actionTypes.GET_SEARCH_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case actionTypes.GET_PRODUCTS_HOME_REQUEST:
      return { ...state, isLoading: true };

    case actionTypes.GET_PRODUCTS_HOME_SUCCESS:
      return {
        ...state,
        isLoading: false,
        featured: data.featured,
        popular: data.popular,
      };

    case actionTypes.GET_PRODUCTS_HOME_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
