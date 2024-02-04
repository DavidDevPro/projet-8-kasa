import React from "react";
import HomeBanner from "../components/HomeBanner";
import HomeGallery from "../components/HomeGallery";
import locations from "../data/locations.json"


const Home = () => {
  return (
    <div className="homePage">
      <HomeBanner />
      <HomeGallery locations={locations}/>
      
    </div>
  );
};

export default Home;
