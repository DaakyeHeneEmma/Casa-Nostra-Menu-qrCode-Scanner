"use client"

import React, {useState, useEffect} from "react"
import Imagery from "../../components/ImageProp";
import Items from "../../components/ImageJson";
import { Item } from "../../components/ImageJson";

const MainPage = () => {

  const [cachedImages, setCachedImages] = useState<Item[]>([]);

  useEffect(() => {
      const cached:Item[] = Items.map((res)=>res);
      setCachedImages(cached);
  }, []);

  return (
    <>
      {cachedImages && cachedImages.map((item, index) => (
        <Imagery
          alt={item?.alt}
          source={item?.source}
          layout="responsive"
          key={index}
        />
      ))}
    </>
  );
};

export default MainPage;
