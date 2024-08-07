"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import Loading from "@/components/Loader";
import React, { useState, useEffect } from "react";
import Game from "@/components/Game";

const PlayerPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col bg-white h-full">
      <div className="pt-10"></div>
      <div className="pt-1 mt-1"></div>
      <Game />
    </div>
  );
};

export default PlayerPage;
