// src/App.jsx
import { useState } from "react";
import './App.css';
import Header from "./MyComponents/Header";
import HeroSection from "./MyComponents/HeroSection"; 
import Mainstore from "./MyComponents/Mainstore";
import Ministore from "./MyComponents/Ministore";
import Microstore from "./MyComponents/Microstore";
import Ads from "./MyComponents/Ads";
import Weapon from "./MyComponents/Weapon";
import Armor from "./MyComponents/Armor";
import Slider from "./MyComponents/Slider";
import Shield from "./MyComponents/Shield";
import Blog from "./MyComponents/Blogs";
import Footer from "./MyComponents/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection/>
      <Mainstore/>
      <Ministore/>
      <Microstore/>
      <Ads/>
      <Weapon/>
      <Armor/>
      <Slider/>
      <Shield/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;