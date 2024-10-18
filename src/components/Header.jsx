import React from "react";

function Header() {
    return (
        <div className="flex bg-white p-7">
            <Navbar />
            <Login />
        </div>
    );
}


function Login() {
    return (
        <div className="flex mx-4 ml-10">
            <button class=" text-color-main font-bold py-2 px-4 rounded hover:bg-color-main hover:text-white">
                Đăng nhập
            </button>
            <button class="text-color-main font-bold py-2 px-4 rounded hover:bg-color-main hover:text-white">
                Đăng kí
            </button>
        </div>

    );
}

function Navbar() {
    return (
        <div className="flex align-middle justify-between items-center ">
            <a href="#" className="py-2 px-4" >Về chúng tôi</a>
            <a href="#" className="py-2 px-4">Tin tức</a>
            <a href="#" className="py-2 px-4">voucher</a>
            <a href="#" className="py-2 px-4">Sản phẩm nổi bật</a>
        </div>
     
    );
}

export default Header;