import React from "react";
import Banner from "./Banner";
import FeaturedProduct from "./FeaturedProduct";
import HeroSection from "./HeroSection";
import LatestBlogs from "./LatestBlogs";
import NewsLetter from "./NewsLetter";

const Home = () => {
  return (
    <div className=" ">
      <Banner />
      <HeroSection />
      <FeaturedProduct />
      <LatestBlogs />
      <NewsLetter />
    </div>
  );
};

export default Home;
