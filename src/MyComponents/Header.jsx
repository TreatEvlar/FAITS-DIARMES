// src/MyComponents/Header.jsx
import { useState } from "react";
import { GiCrocSword, GiDoorway, GiTShirt } from "react-icons/gi";
import { FiShieldOff, FiGift } from "react-icons/fi";
import { FaHandshake, FaAngleDown, FaBars } from "react-icons/fa";
import { PiTreasureChest } from "react-icons/pi";
import { IoGlobeOutline, IoSearch } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
  const [showAmount, setShowAmount] = useState(false);
  const [showSearch, setSearchBar] = useState(false);
  const [showSidebar, setSideBar] = useState(false);
  
  const toggleAmount = () => setShowAmount(!showAmount);
  const toggleSearch = () => setSearchBar(!showSearch);
  const closeSearch = () => setSearchBar(false);
  const openSidebar = () => setSideBar(true);
  const closeSidebar = () => setSideBar(false);

  return (
    <>
      <div className="top-txt">
        <div className="container">
          <div className="head-options">
            <ul>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="language">
            <IoGlobeOutline />
            <span>English</span>
            <FaAngleDown />
          </div>
        </div>
      </div>

      <div className="nav">
        <div className="uppernav">
          <div className="logo">
            <img
              src="https://faitsdarmes.com/modules/roy_customizer/upload/logo-normal-1.png"
              alt="Unable to upload"
            />
          </div>

          <div className="other-items">
            <div className={`input ${showSearch ? 'active' : ''}`}>
              <input type="text" placeholder="Search" />
              <IoSearch className="IoSearch" />
              <FaXmark className="FaXmark" onClick={closeSearch}/>
            </div>
            <div className="mobile-input">
              <IoSearch className="Io2Search" onClick={toggleSearch}/>
            </div>
            <div className="cart">
              <span className="material-symbols-outlined" onClick={toggleAmount}>shopping_cart</span>
              <div className={`amount ${showAmount ? 'mobile-visible' : ''}`}>
                <span>Amount</span>
                <span>&#8364;120.00</span>
              </div>
            </div>
            <div className="user">
              <span className="material-symbols-outlined">person</span>
            </div>
            <div className="phone-nav">
              <FaBars onClick={openSidebar}/>
            </div>
          </div>
        </div>

        <div className={`lowernav ${showSidebar ? 'active' : ''}`}>
          <FaXmark className="sidebar" onClick={closeSidebar}/>
          <ul>
            <li><a href="#"><GiCrocSword /> Swords & Weapons</a></li>
            <li><a href="#"><GiDoorway /> Protections</a></li>
            <li><a href="#"><GiTShirt /> Accessories</a></li>
            <li><a href="#"><FiShieldOff /> Shields</a></li>
            <li><a href="#"><FaHandshake /> Deals</a></li>
            <li><a href="#"><PiTreasureChest /> Packs</a></li>
            <li><a href="#"><FiGift /> Ideas</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
