import React from "react";

import type { NextPage } from "next";

interface Props {}

const WeatherPage: NextPage<Props> = () => {
  return <div className='min-h-screen'>{process.env.XRAPID_API_HOST}</div>;
};

export default WeatherPage;
