import React from "react";
import Logo from "../img/logo.png";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GrGroup } from "react-icons/gr";
import { FiBookmark, FiSearch } from "react-icons/fi";
import * as AiIcons from "react-icons/ai";

function Header() {
    return (
        <header className=" z-50 w-screen p-2 px-4">
            <nav className="flex w-full h-full items-center ">
                
                <div className="flex items-center gap-2 ">
                    <img src={Logo} className="w-5 object-cover" alt="logo" />
                    <span className="text-headColor text-1xl font-normal">Nepang</span>
                </div>

                <div>
                    <div>
                        <form className="flex w-full rounded relative px-8">
                            <input type="text" placeholder="Search" className="box-border rounded-full text-base bg-white bg-no-repeat border-2 m-0 px-2 pt-1 pb-1" />
                            <FiSearch className="cursor-pointer absolute h-9 right-10 text-gray-500 "/>
                        </form>
                    </div>
                </div>

                <div className="flex gap-12 ml-auto">
                    <div>
                        <ul className="flex gap-2">
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
        </header>
    );
}
export default Header;
