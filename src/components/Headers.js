import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from "../features/carSlice";
import { useSelector } from "react-redux";
function Headers() {
  
  const[burgertoggle ,setburgertoggle]=useState(false);

  const cars=useSelector(selectCars)
  console.log(cars)
  return (
    <div className=" flex    ">
      <div className="flex relative items-center ">
        <img
          className="min-h-[20px] fixed top-4 left-0"
          src="/logo.svg"
          alt=""
          logoimage
        />
        {/*Menu*/}
        <div className=" flex-1 flex-grow flex-shrink flex fixed top-4 left-0 right-0 items-center justify-center ">
          <a className="menua hidden md:inline" href="#">
            Model-S
          </a>

          <a className="menua  hidden md:inline" href="#">
            Model-X
          </a>

          <a className="menua hidden md:inline" href="#">
            Model-3
          </a>

          <a className="menua hidden md:inline" href="#">
            Model-Y
          </a>
        </div>
        {/*Right Menu*/}
        
        <div className="flex fixed top-4 right-0 items-center justify-between">
          <a className="menua" href="">
            Shop
          </a>
          <a className="menua" href="">
            Tesla Account
          </a>
          <span onClick={()=>setburgertoggle(true)} className="mr-5 cursor-pointer hover:animate-pulse border-none outline-none focus:border-none focus:outline-none active:border-none active:outline-none ">
            <MenuIcon />
          </span>
        </div>
        {/**Burger Menu */}
         
         
        <div className={`  flex flex-col justify-start p-5 fixed top-0 right-4 botton-0 h-screen z-50 list-none  w-[300px] bg-white transition ease-in duration-300 ${burgertoggle ? " translate-x-0":"transform translate-x-96"}`}>
         <div onClick={()=>setburgertoggle(!burgertoggle)} className="cursor-pointer hover:animate-bounce flex justify-end">
         <CloseIcon/>
         </div>
          <li className="pt-5 border-b font-bold">
            <a href="">Exisitng Inventory</a>
          </li>
          <li className="pt-5 border-b font-bold">
            <a href="">Used Inventory</a>
          </li>
          <li className="pt-5 border-b font-bold">
            <a href="">Trade In</a>
          </li>
          <li className="pt-5 border-b font-bold">
            <a href="">Cyber Truck</a>
          </li>
          <li className="pt-5 border-b font-bold">
            <a href="">Roadaster</a>
          </li>
          <li className="pt-5 border-b font-bold">
            <a href="">Exisitng Inventory</a>
          </li>
          <li className="pt-5 border-b font-bold">
            <a href="">Exisitng Inventory</a>
          </li>

          <li className="pt-5 border-b font-bold">
            <a href="">Exisitng Inventory</a>
          </li>
        </div>
        
      </div>
    </div>
  );
}

export default Headers;
