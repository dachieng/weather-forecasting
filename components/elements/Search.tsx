"use client";

import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

interface Props {
  handleOnSearchChange: (data: any) => void;
}

const Search: React.FC<Props> = ({ handleOnSearchChange }) => {
  const [search, setSearch] = useState<any>(null);

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

  const handleChange = (opt: any) => {
    setSearch(opt);
    handleOnSearchChange(opt);
  };

  const loadOptions = async (inputValue: string | "Nairobi") => {
    try {
      const res = await fetch(
        `${url}/cities?namePrefix=${inputValue}`,
        options
      );
      const data = await res.json();

      const dataValues = data.data.map((city: any) => ({
        label: `${city.countryCode} - ${city.name}`,
        value: `${city.latitude} ${city.longitude}`,
      }));

      return {
        options: dataValues,
      };
    } catch (error: any) {
      console.log("error", error);
    }
  };

  return (
    <div className='w-full md:max-w-[67.5rem] my-[0.5rem] md:my-[2rem] mx-auto px-[0.5rem]'>
      <AsyncPaginate
        // @ts-expect-error
        loadOptions={loadOptions}
        value={search}
        onChange={handleChange}
        debounceTimeout={200}
      />
    </div>
  );
};

export default Search;
