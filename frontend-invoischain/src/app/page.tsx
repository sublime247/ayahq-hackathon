
// import Link from "next/link";
import AfterJumbotron from "./components/AfterJumbotron";
import Jumbotron from "./components/Jumbotron";
import LastLandingComp from "./components/LastLandingComp";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import React from "react";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <div className="sticky top-0 transition-transform duration-300 ease-in-out" id="navbar-container">
        <NavBar/>
      </div>
    <div className="flex flex-col items-center justify-center">
      <Jumbotron />
      <AfterJumbotron />
    </div>
      <div>
        <LastLandingComp />
      </div>  
      <div>
          <Footer />
        </div>
    </div>
  );
}
