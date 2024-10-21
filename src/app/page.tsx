"use client"

import React, { useEffect } from 'react';
import Imagery from "../../components/ImageProp";
import Items from "../../components/ImageJson";

const MainPage = () => {
  useEffect(() => {
    document.title = "Casa Nostra || Our Home";
  }, []);

  return (
    <>
      {Items && Items.map((item, index) => (
        <Imagery
          alt={item.alt}
          source={item.source}
          key={index}
        />
      ))}
    </>
  );
};

export default MainPage;
