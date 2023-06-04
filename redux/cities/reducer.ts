import {
  FETCH_CITIES_ERROR,
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
} from "./actionTypes";

const initialState = {
  loading: false,
  cities: [],
  error: "",
};

export const citiesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_CITIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CITIES_SUCCESS:
      return {
        loading: false,
        cities: action.payload,
        error: "",
      };
    case FETCH_CITIES_ERROR:
      return {
        loading: false,
        cities: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
