import {
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
} from "./actionTypes";

const url = process.env.NEXT_PUBLIC_WEATHER_URL as string;
const api_key = "1f88adfee54ac93485473d4c1fe27cde";

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
  return async (dispatch: any) => {
    dispatch(fetchWeatherRequest());
    try {
      const res = await fetch(
        `${url}?lat=${latitude}&lon=${longitude}&appid=${api_key}`
      );

      console.log("re", api_key);
      console.log("url", url);
      console.log(
        "hfjh",
        `${url}?lat=${latitude}&lon=${longitude}&appid=${api_key}`
      );

      const data = await res.json();

      console.log("response", data);

      dispatch(fetchWeatherSuccess(data));

      console.log("hhhss", data);
    } catch (error) {
      dispatch(fetchWeatherError(error));
      console.log("error", error);
    }
  };
};
