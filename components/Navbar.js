"use client";
import React, { useState } from "react";
import { FaStethoscope, FaArrowRightLong,FaCaretDown,FaCaretUp } from "react-icons/fa6";


function Navbar({menuItems,askQuestions,doctor}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  
  const handleMenuClick = (title) => {
    if (activeMenu === title) {
      // Aynı menü tekrar tıklandığında kapanır
      setActiveMenu(null);
    } else {
      setActiveMenu(title);
    }
  };
  return (
    <nav className=" w-[80vw] mt-8  ml-8 md:ml-0">
      <div className=" hidden md:flex justify-between w-full ">
        <div className="flex justify-center items-center">
          <div className="mr-16">
            <span className="font-bold text-gray-100">LOGO</span>
          </div>
          <div>
            <button className="flex justify-center items-center bg-switchHandleBg hover:text-headTxt2 hover:bg-white hover:duration-500 text-headTxt1 rounded-xl py-3 px-5 ">
              <span>
                <FaStethoscope />
              </span>
              <span className="ml-4">{doctor}</span>
            </button>
          </div>
        </div>
        <div className="flex">
          <button className="bg-switchBg text-headTxt1 py-3 px-5 rounded-xl hover:bg-srcBtn hover:duration-500">
            Hemen Kaydol
          </button>
          <button className="border border-white text-white rounded-xl py-3 px-5 flex justify-center items-center ml-5 hover:bg-white hover:text-headTxt2">
            Giriş Yap <FaArrowRightLong className="ml-5 " />
          </button>
        </div>
      </div>

      {/* Mobile nav */}

      <div className="flex  justify-between items-center md:hidden z-40  ">
        <div className="ml-5 z-40">
          <span
            className={`font-bold text-2xl  ${
              isOpen ? "text-black" : "text-gray-100"
            }`}
          >
            LOGO
          </span>
        </div>
        <div
          className={`  p-8 rounded-2xl z-40 ${
            isOpen ? "bg-hmbgrBg" : "bg-switchHandleBg"
          }`}
        >
          <label>
            <input type="checkbox" onClick={() => setIsOpen(!isOpen)} />
            <div className="bar">
              <span
                className={`top ${isOpen ? "bg-switchBg" : "bg-white"}`}
              ></span>

              <span
                className={`bottom ${isOpen ? "bg-switchBg" : "bg-white"}`}
              ></span>
            </div>
          </label>
        </div>
      </div>

      {/* Menü İçeriği */}
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-white md:hidden">
          <div className="flex flex-col justify-center mt-32 border-t border-b py-9 border-hmbgrBorder">
          <div className="flex justify-evenly">
          <button className="bg-switchBg text-headTxt1 py-5 px-5 rounded-xl  ">
              Hemen Kaydol
            </button>
            <button className="border border-switchBg text-switchBg rounded-xl py-3 px-5 flex justify-center items-center ml-5 ">
              Giriş Yap <FaArrowRightLong className="ml-5 " />
            </button>
          </div>
          <div>
          {menuItems.map((item, index) => (
            <div key={index} className="w-[80%] ml-10 mt-6 text-hmbgrTxt font-semibold text-lg">
              <button onClick={() => handleMenuClick(item.title)} className="flex  justify-center items-center ">
               <span className={`rounded-full p-2 mr-2 ${activeMenu === item.title ? "bg-srcBtn":"bg-hmbgrBg"}`}>{activeMenu === item.title ? (
                <FaCaretUp className="w-6 h-6 text-hmbgrBg " />
              ) : (
                <FaCaretDown className="w-6 h-6 text-hmbgrCurentBg" />
              )}</span> <span className={`${activeMenu === item.title ? "text-gray-900" : ""}`}>
              {item.title}
              </span>
              </button>
              {activeMenu === item.title && (
                <ul>
                  {item.children.map((child, idx) => (
                    <li key={idx} className={`font-[300] mt-2 ml-2 ${activeMenu  ? 'slide-animation' : ''}`}>{child}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          </div>
            
          </div>
          <div className="text-hmbgrTxt font-semibold text-lg mt-8  ml-9">
          <h3 className="mb-5">{askQuestions}</h3>
          <h3 className="mb-5">Makale</h3>
          <button className="flex justify-evenly items-center bg-hmbgrBg  text-switchBg font-semibold w-[90%] rounded-xl py-3 px-5 ">
          <span>
            <FaStethoscope className="text-3xl" />
          </span>
          <span className="ml-4">{doctor}</span>
        </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
