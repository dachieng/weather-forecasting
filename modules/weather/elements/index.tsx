"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Search from "@/components/elements/Search";
import CurrentWeather from "./current-weather";
import TodaysHighlight from "./todays-highlight";

interface Props {}

const WeatherModule: React.FC<Props> = () => {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

  const handleOnSearchChange = (data: any) => {
    // let search = data.split(" ");

    const [latitude, longitude] = data.value.split(" ");

    setLatitude(latitude);
    setLongitude(longitude);
  };

  console.log("latitude", latitude);
  console.log("longitude", longitude);

  return (
    <div className='min-h-screen'>
      <Search handleOnSearchChange={handleOnSearchChange} />
      <div className='w-full md:max-w-[67.5rem] my-[0.5rem] md:my-[2rem] mx-auto px-[0.5rem]'>
        <div className='flex flex-col md:flex-row'>
          <div className='w-full md:max-w-[20rem] rounded-2xl shadow bg-gradient-to-br from-cyan-400 via-cyan-600 to-cyan-900 mr-0 md:mr-2 p-3 mb-3 min-h-[20rem]'>
            <CurrentWeather />
          </div>
          <div className='flex-1 shadow rounded-2xl bg-cyan-900 p-3 mb-3'>
            <TodaysHighlight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherModule;
