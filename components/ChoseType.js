"use client";
import React, { useState, useEffect } from "react";
import Search from "./Search";

function ChoseType({typeText1,typeText2,searchPlaceholder}) {
  const [isActive, setIsActive] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
console.log(isActive);
  useEffect(() => {
    // Sayfa yüklendiğinde veya isActive değiştiğinde switch-handle'ın konumunu güncelle
    if (isActive) {
      document.querySelector('.switch-handle').style.left = '15px '; // Online Görüşme için sol tarafa
    } else {
      document.querySelector('.switch-handle').style.left = '225px'; // Yüz Yüze Randevu için sağ tarafa
    }
  }, [isActive]);

  const toggleSwitch = (isOnline) => {
    if (isOnline && !isActive) {
      setIsActive(true);
      setShowDropdown(false);
    } else if (!isOnline && isActive) {
      setIsActive(false);
      setShowDropdown(false);
    }
  };
  const handleDropdownClick = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <>
      <div
      className="switch-container bg-switchBg text-headTxt1"
      >
        <div className={`switch-handle bg-switchHandleBg ${isActive ? "online-active" : ""}`}></div>
        <div className="switch-button left-button" onClick={() => toggleSwitch(true)}>{typeText1}</div>
        <div className="switch-button right-button"onClick={() => toggleSwitch(false)}>{typeText2}</div>
      </div>
     <Search searchPlaceholder={searchPlaceholder} isActive={isActive} showDropdown={showDropdown} setShowDropdown={setShowDropdown} handleDropdownClick={handleDropdownClick} />
    </>
  );
}

export default ChoseType;
