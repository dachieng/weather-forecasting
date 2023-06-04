"use client";

import { fetchCities } from "@/redux/cities/actionCreators";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {}

const WeatherModule: React.FC<Props> = () => {
  const cities = useSelector((state: any) => state.cities);
  const dispatch = useDispatch();

  useEffect(() => {
    //@ts-expect-error Argument of type '(dispatch: any) => Promise<void>' is not assignable to parameter of type 'AnyAction'
    dispatch(fetchCities(""));
  }, []);

  console.log("cities", cities);
  return <div className='min-h-screen'>kj</div>;
};

export default WeatherModule;
