import {
  FETCH_CITIES_ERROR,
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
} from "./actionTypes";

const url = process.env.NEXT_PUBLIC_CITIES_API_URL;
const key = process.env.NEXT_PUBLIC_XRAPID_API_KEY as string;
const host = process.env.NEXT_PUBLIC_XRAPID_API_HOST as string;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": key,
    "X-RapidAPI-Host": host,
  },
};

const fetchCitiesRequest = () => {
  return {
    type: FETCH_CITIES_REQUEST,
  };
};

const fetchCitiesSuccess = (cities: any) => {
  return {
    type: FETCH_CITIES_SUCCESS,
    payload: cities,
  };
};

const fetchCitiesError = (error: any) => {
  return {
    type: FETCH_CITIES_ERROR,
    payload: error,
  };
};

export const fetchCities = (search: any) => {
  return async (dispatch: any) => {
    dispatch(fetchCitiesRequest());
    try {
      const res = await fetch(`${url}/cities?namePrefix=${search}`, options);
      const data = await res.json();

      console.log("data", data.data);

      dispatch(fetchCitiesSuccess(data.data));
    } catch (error: any) {
      dispatch(fetchCitiesError(error.message));
      console.log("error", error);
    }
  };
};
