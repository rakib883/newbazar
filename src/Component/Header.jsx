import Container from "./Container"
import logo from "../../src/assets/download.png"
import { Link } from "react-router-dom"
import cart from "../assets/cart.png"
import { FaUserLarge } from "react-icons/fa6";
import { useEffect, useState } from "react";
function Header() {
    const menuItems = [
        {name : "Home",path:"/"},
        {name : "Page",path:"/page"},
        {name : "Shop",path:"/shop"},
        {name : "Element",path:"/element"},
        {name : "Blog",path:"/blog"},
    ]

   

   
  return (
    <div  className="parent border-b-2 sticky z-50 top-0 bg-white">
        <Container className="">
            <div className="lg:flex flex justify-between items-center lg:justify-between py-6">
                <div className="logo-area w-[120px]"><img src={logo} alt="" /></div>
                <div className="menu-main flex items-center gap-8 ">
                    <div className="menu-area flex items-center gap-8 md:inline-flex lg:gap-8 hidden">{
                        menuItems.map((item)=>(
                            <Link className="text-base text-black font-bold hover:underline duration-300 font-mainFont" key={item.name} to={item.path}>{item.name}</Link>
                        ))
                    }</div>
                    <div className="user-area   flex items-center lg:gap-1 md:gap-8">
                        <div className="cart-area w-6 cursor-pointer relative">
                            <img src={cart} alt="" />
                            <div className="count absolute top-1 left-[8px]">0</div>
                        </div>
                        <div className="user-area cursor-pointer flex items-center font-mainFont">
                           <FaUserLarge className="w-10 text-black" />
                           <p className="text-black font-bold text-base">Login</p>
                        </div>
                    </div>
                </div>
            </div>
      </Container>
    </div>
  )
}

export default Header