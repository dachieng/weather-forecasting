"use client";

import React, { useEffect } from "react";

import type { NextPage } from "next";
import { useRouter } from "next/navigation";

interface Props {}

const HomePage: NextPage<Props> = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/weather");
  }, []);

  return <div>This is the home page</div>;
};

export default HomePage;
