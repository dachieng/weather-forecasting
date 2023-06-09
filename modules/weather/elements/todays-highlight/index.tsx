/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const TodaysHighlight = () => {
  return (
    <div className='p-3'>
      <h1 className='text-white text-medium mb-1'>Today{"'"} Highlight</h1>
      <div className='grid grid-cols-2 gap-2'>
        <div className='shadow rounded-lg bg-gradient-to-br from-sky-400 via-sky-600 to-sky-900 mr-0 md:mr-2 p-3 mb-3 min-h-[10rem]'>
          <h1 className='text-white text-base mb-1 font-semibold'>Wind</h1>
          <div className=''>
            <img src='/images/wind2.png' className='h-[150px] w-full' />
          </div>
          <div className='flex justify-between text-white items-center'>
            <div className='flex items-center'>
              <h3 className='text-3xl'>60</h3>
              <p className='text-xs text-slate-200 px-1 pt-1'>km/h</p>
            </div>
            <p className='text-slate-200'>5.01 AM</p>
          </div>
        </div>
        <div className='shadow rounded-lg bg-gradient-to-br from-sky-900 via-sky-600 to-sky-400 mr-0 md:mr-2 p-3 mb-3 min-h-[10rem]'>
          <h1 className='text-white text-base mb-1 font-semibold'>Pressure</h1>
          <div className=''>
            <img src='/images/pressure.png' className='h-[150px] w-full' />
          </div>
          <div className='flex justify-between text-white items-center'>
            <div className='flex items-center'>
              <h3 className='text-3xl'>60</h3>
              <p className='text-xs text-slate-200 px-1 pt-1'>km/h</p>
            </div>
            <p className='text-slate-200'>5.01 AM</p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-2'>
        <div className='shadow rounded-lg bg-gradient-to-br from-sky-400 via-sky-600 to-sky-900 mr-0 md:mr-2 p-3 mb-3 min-h-[4rem]'>
          <h1 className='text-white text-base mb-1 font-semibold'>Humidity</h1>

          <div className='flex justify-between text-white items-center'>
            <div className='flex items-center'>
              <h3 className='text-3xl'>84</h3>
              <p className='text-xs text-slate-200 px-1 pt-1'>%</p>
            </div>
            <p className='text-slate-200'>desc</p>
          </div>
        </div>
        <div className='shadow rounded-lg bg-gradient-to-br from-sky-400 via-sky-600 to-sky-900 mr-0 md:mr-2 p-3 mb-3 min-h-[4rem]'>
          <h1 className='text-white text-base mb-1 font-semibold'>
            Temparature
          </h1>

          <div className='flex justify-between text-white items-center'>
            <div className='flex items-center'>
              <h3 className='text-3xl'>03</h3>
              <p className='text-xs text-slate-200 px-1 pt-1'>km</p>
            </div>
            <p className='text-slate-200'>desc</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysHighlight;
