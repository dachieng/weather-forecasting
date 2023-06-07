"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Search from "@/components/elements/Search";
import { fetchCities } from "@/redux/cities/actionCreators";

interface Props {}

const WeatherModule: React.FC<Props> = () => {
  const [search, setSearch] = useState("");

  const cities = useSelector((state: any) => state.cities);
  const dispatch = useDispatch();

  const handleOnSearchChange = (data: any) => {
    console.log("data", data);
  };

  console.log("search", search);

  useEffect(() => {
    //@ts-expect-error Argument of type '(dispatch: any) => Promise<void>' is not assignable to parameter of type 'AnyAction'
    dispatch(fetchCities(""));
  }, []);

  return (
    <div className='min-h-screen'>
      <Search handleOnSearchChange={handleOnSearchChange} />
    </div>
  );
};

export default WeatherModule;
