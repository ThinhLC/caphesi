import React, { useState } from "react";
import Navbar from "./Navbar";
import CustomButton from "./CustomButton";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col md:flex-row justify-start items-start bg-white p-7">
            <div className="flex justify-end items-end md:hidden">
                <button
                    onClick={toggleNavbar}
                    className="text-color-main font-bold py-2 px-4 rounded focus:outline-none">
                    <div className="space-y-2">
                        <span className="block w-8 h-1 bg-black"></span>
                        <span className="block w-8 h-1 bg-black"></span>
                        <span className="block w-8 h-1 bg-black"></span>
                    </div>
                </button>
            </div>
    
            {/* Navbar và Login */}
            <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:items-center md:space-x-4`}>
                <div className="flex flex-col md:flex-row  md:justify-center md:flex-grow space-x-8">
                    <Navbar />
                </div>
                <Login />
            </div>
        </div>
    );    
}

function Login() {
    return (
        <div className="flex flex-row items-start justify-start mt-1 md:mt-0 ">
            <CustomButton size="medium" className="rounded text-xl">
                Đăng kí
            </CustomButton>
            <CustomButton size="medium" className="rounded text-xl">
                Đăng nhập
            </CustomButton>
        </div>
    );
}


export default Header;
