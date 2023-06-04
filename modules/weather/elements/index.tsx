"use client";

import React, { useState } from "react";

import Search from "@/components/elements/Search";

interface Props {}

const WeatherModule: React.FC<Props> = () => {
  const [search, setSearch] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  console.log("search: ", search);

  return (
    <div className='min-h-screen'>
      <Search search={search} onChange={handleSearchChange} />
    </div>
  );
};

export default WeatherModule;
