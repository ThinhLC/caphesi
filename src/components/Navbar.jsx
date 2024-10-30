import React from "react";

function Navbar() {
    return (
        <div className="flex flex-col md:flex-row justify-start items-start">
            <a href="/#" className="py-2 px-4  hover:text-color-main hover:font-bold text-2xl">Về chúng tôi</a>
            <a href="/#" className="py-2 px-4  hover:text-color-main hover:font-bold text-2xl">Tin tức</a>
            <a href="/#" className="py-2 px-4  hover:text-color-main hover:font-bold text-2xl">Voucher</a>
            <a href="/#" className="py-2 px-4  hover:text-color-main hover:font-bold text-2xl">Sản phẩm nổi bật</a>
        </div>
    );
}

export default Navbar