import React from "react";
import { Icon } from "@iconify/react";
import searchIcon from "@iconify/icons-icons8/search";

interface Props {
  search: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = (props) => {
  return (
    <div className='w-full md:max-w-[67.5rem] my-[0.5rem] md:my-[2rem] mx-auto px-[0.5rem] relative'>
      <input
        className='w-full py-[0.3rem] rounded px-6 outline-0'
        {...props}
        value={props.search}
        onChange={props.onChange}
      />
      <Icon
        className='text-lg text-gray-500 font-medium absolute bottom-[0.4rem] left-3'
        icon={searchIcon}
      />
    </div>
  );
};

export default Search;
