import React from "react";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HomeBanner />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
