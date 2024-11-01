
import React from "react";
import SearchIcon from '../assets/img/search-interface-symbol.png'
import ShopingCartIcon from '../assets/img/shopping-cart.png'
import NotifyIcon from '../assets/img/bell.png'
function Search() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center mx-4 md:mx-10 p-4 md:p-6 gap-4 md:gap-6">
            {/* Logo */}
            <img src="../assets/img/loloCaphesi.png" alt="Logo" className="object-contain h-6 md:h-8 mr-10" />

            {/* Search Bar */}
            <div className="relative flex-1 w-full md:max-w-lg mr-10">
                <input
                    type="search"
                    placeholder="Tìm kiếm sản phẩm tại đây"
                    className="bg-white rounded-full px-4 md:px-8 py-3 md:py-4 outline-none border-none text-sm w-full"
                />
                <img
                    src={SearchIcon}
                    alt="Search Icon"
                    className="absolute right-3 w-4 h-4 md:w-5 md:h-5"
                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-3 md:gap-4">
                <img src={ShopingCartIcon} alt="Shopping Cart" className="h-11" />
                <img src={NotifyIcon} alt="Notifications" className="h-11" />
            </div>
        </div>
    );
}

export default Search;