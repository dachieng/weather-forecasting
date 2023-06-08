import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-bytesize/location";
import calenderIcon from "@iconify/icons-simple-line-icons/calender";

interface Props {}

const CurrentWeather: React.FC<Props> = () => {
  return (
    <div className='p-3'>
      <div className='mb-2'>
        <Image src='/images/image1.png' alt='weather' width={90} height={80} />
      </div>
      <div className='relative flex text-white font-semibold'>
        <p className='text-5xl'>30</p>
        <p className='text-xl'>o</p>
        <p className='text-3xl'>c</p>
      </div>
      <div className='flex items-center border-b pb-[1rem] mb-[1rem]'>
        <Image src='/images/image2.png' alt='weather' width={30} height={20} />
        <p className='text-white px-2 my-3'>Rainy Storm Clouds</p>
      </div>
      <div className='flex items-center'>
        <Icon icon={locationIcon} className='text-[#fff] text-2xl' />
        <p className='text-slate-200 text-sm font-medium mx-1'>
          Nairobi, Kenya
        </p>
      </div>
      <div className='flex items-center my-3'>
        <Icon icon={calenderIcon} className='text-[#fff] text-xl' />
        <p className='text-slate-200 text-sm font-medium mx-2'>24 July, 2022</p>
        <p className='text-white'>8.00 A.M</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
