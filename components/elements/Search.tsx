"use client";

import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

interface Props {
  data: any;
}

const Search: React.FC<Props> = ({ data }) => {
  return (
    <div className='w-full md:max-w-[67.5rem] my-[0.5rem] md:my-[2rem] mx-auto px-[0.5rem] relative'>
      {/* <AsyncPaginate
        value={search}
        placeholder='Search location'
        debounceTimeout={600}
      /> */}
      This is the search component
    </div>
  );
};

export default Search;
