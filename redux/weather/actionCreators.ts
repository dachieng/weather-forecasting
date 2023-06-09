import {
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
} from "./actionTypes";

const api_key = process.env.NEXT_PUPLIC_WEATHER_API_KEY;
const url = process.env.NEXT_PUBLIC_WEATHER_URL;

const fetchWeatherRequest = () => {
  return {
    type: FETCH_WEATHER_REQUEST,
  };
};

const fetchWeatherSuccess = (data: any) => {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: data,
  };
};

const fetchWeatherError = (data: any) => {
  return {
    type: FETCH_WEATHER_ERROR,
    payload: data,
  };
};

export const fetchWeather = (latitude: number, longitude: number) => {
  return async () => {
    fetchWeatherRequest();
    try {
      const res = await fetch(
        `${url}?lat=${latitude}&lon=${longitude}&appid=${api_key}`
      );

      const data = res.json();

      console.log("hhh", data);
    } catch (error) {
      console.log("error", error);
    }
  };
};
