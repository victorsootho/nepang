import React from "react";
import Header from "../components/Header";
import HomeContainer from "../components/home/HomeContainer";

function Home() {
  return (
    <div>
      <Header />
      <div className="flex">
        <HomeContainer />
      </div>
    </div>
  );
}

export default Home;
