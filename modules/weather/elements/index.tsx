"use client";

import React, { useEffect, useState } from "react";

import { fetchCities } from "../hooks/fetchCities";

interface Props {}

const WeatherModule: React.FC<Props> = () => {
  const [cityData, setCityData] = useState<any>([]);

  const { cities } = fetchCities();

  useEffect(() => {
    const loadCities = async () => {
      const data = await cities("");
      setCityData(data);
    };

    loadCities();
  }, []);

  console.log("city", cityData);

  return (
    <div className='min-h-screen'>
      kdf
      {/* <Search search={search} onChange={handleSearchChange} /> */}
    </div>
  );
};

export default WeatherModule;
