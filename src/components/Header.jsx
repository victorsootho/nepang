import React from "react";
import Logo from "../img/logo.png";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GrGroup } from "react-icons/gr";
import { FiBookmark, FiSearch } from "react-icons/fi";
import * as AiIcons from "react-icons/ai";

function Header() {
    return (
        <header className="bg-gray-300 top-0 sticky z-50">
            <div className="flex z-50 w-screen p-2 px-4">
                <nav className="flex w-full h-full items-center ">
                    
                    <div className="flex items-center gap-1 ml-8">
                        <img src={Logo} className="w-8 object-cover text" alt="logo" />
                        <span className="text-1xl font-normal mt-1">Nepang</span>
                    </div>

                    <div>
                        <div>
                            <form className="flex ml-5 w-full rounded relative px-8">
                                <input type="text" placeholder="Search" className="box-border rounded-full text-base bg-white w-340 bg-no-repeat border-2 m-0 px-5 pt-1 pb-1" />
                                <FiSearch className="cursor-pointer absolute h-9 right-16 text-gray-500 "/>
                            </form>
                        </div>
                    </div>

                    <div className="flex gap-12 ml-auto">
                        <div>
                            <ul className="flex gap-2">
                                <li>
                                    <AiIcons.AiOutlineHome className="cursor-pointer text-2xl" />
                                </li>
                                <li>
                                    <GrGroup className="cursor-pointer text-2xl" />
                                </li>
                                <li>
                                    <FiBookmark className="cursor-pointer text-2xl" />
                                </li>
                            </ul>
                        </div>
                            
                        <div className="">
                            <ul className="flex gap-2">
                                <li>
                                    <AiIcons.AiOutlineMenu className="cursor-pointer text-2xl" />
                                </li>
                                <li>
                                    <AiIcons.AiOutlineMessage className="cursor-pointer text-2xl" />
                                </li>
                                <li>
                                    <IoIosNotificationsOutline className="cursor-pointer text-2xl" />
                                </li>
                                <li>
                                    <AiIcons.AiOutlineUser className="cursor-pointer text-2xl" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <nav>
                    <ul>
                        <li></li>
                    </ul>
                </nav>
            </div>

            
        </header>
    );
}
export default Header;
