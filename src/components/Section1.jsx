import React from "react";
import logo from "../assets/img/logo.png";
import logo_app from "../assets/img/logo-app.png";
import infor_app from "../assets/img/infor-app-in-store.png";
import qr_app from "../assets/img/QR-app.png";
import gg_play from "../assets/img/gg-play.png";
import appstore from "../assets/img/appstore.png";
import order_icon from "../assets/img/order-icon.png";
import voucher_icon from "../assets/img/voucher-icon.png";
import suport_icon from "../assets/img/suport-icon.png";
import NotifyIcon from "../assets/img/bell.png";
import ShopingCart from "../assets/img/shopping-cart.png";
import SearchIcon from "../assets/img/search-interface-symbol.png";
import CustomButton from "./CustomButton";
import Carousel from "./Carosel";

function Section1() {
  return (
    <section className={`bg-color-reduceconstract bg-cover bg-center pb-5`}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-14" />
          </div>
          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-3xl border-green-400 border py-1 pr-0 pl-0 w-4/6">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm tại đây"
              className="ml-4 px-4 py-2 rounded w-full border-none outline-none"
            />
            <img src={SearchIcon} alt="Search" className="h-6 mr-2" />
          </div>
          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8">
              <img src={ShopingCart} alt="Cart" />
            </div>
          </div>
          {/* Notification Icon */}
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8">
              <img src={NotifyIcon} alt="Notification" />
            </div>
          </div>
        </div>

        {/* Slide Section */}
        <div className="flex flex-col md:flex-row gap-4 mt-4 px-6">
          <div className="flex-1">
            <Carousel />
          </div>
          {/* Near Slide */}
          <div className="flex flex-col space-y-4">
            <div className="h-full p-3 bg-white rounded-2xl">
              <div className="flex items-center hover:shadow-2xl transition-shadow duration-300">
                <img className="w-24 h-24 rounded-2xl" src={logo_app} alt="App Logo" />
                <span className="py-2 px-4 font-bold text-xl text-gray-600">Tải app CaPheSi</span>
              </div>
              <div className="my-3">
                <img className="w-72 rounded-2xl" src={infor_app} alt="Info" />
              </div>
              <div className="flex justify-between items-center">
                <img className="w-28" src={qr_app} alt="QR Code" />
                <div className="flex flex-col">
                  <a className="p-2 rounded-2xl border w-40 m-2 hover:shadow-2xl transition-shadow duration-300" href="/#">
                    <img className="md:w-40 md:h-8" src={appstore} alt="App Store" />
                  </a>
                  <a className="p-2 rounded-2xl border w-40 m-2 hover:shadow-2xl transition-shadow duration-300" href="/#">
                    <img className="md:w-40 md:h-8" src={gg_play} alt="Google Play" />
                  </a>
                </div>
              </div>
              <span className="text-gray-600">Quét mã để tải app ngay bây giờ!</span>
            </div>
          </div>
        </div>

        {/* Order, Vouchers, Support Section */}
        <div className="mt-4 px-6">
          <div className="grid md:flex gap-5">
            {/* Đặt hàng */}
            <div className="md:w-2/6 bg-white p-6 rounded-lg flex hover:shadow-2xl transition-shadow duration-300">
              <div>
                <h2 className="text-2xl font-bold">Đặt hàng</h2>
                <p className="mt-2 text-gray-600">Đặt hàng nhanh chóng chỉ trong vài phút</p>
              </div>
              <img className="w-32 h-32" src={order_icon} alt="Order" />
            </div>

            {/* Vouchers */}
            <div className="md:w-2/6 bg-white p-6 rounded-lg flex hover:shadow-2xl transition-shadow duration-300">
              <div>
                <h2 className="text-2xl font-bold">Vouchers</h2>
                <p className="mt-2 text-gray-600">Nhiều voucher giảm giá cực hot</p>
                <CustomButton className="rounded-full">
                  Xem ngay
                </CustomButton>
              </div>
              <img className="w-32 h-32" src={voucher_icon} alt="Vouchers" />
            </div>

            {/* Hỗ trợ */}
            <div className="md:w-2/6 bg-white p-6 rounded-lg flex hover:shadow-2xl transition-shadow duration-300">
              <div>
                <h2 className="text-2xl font-bold">Hỗ trợ, tư vấn</h2>
                <p className="mt-2 text-gray-600">Đội ngũ tư vấn hỗ trợ 24/24</p>
              </div>
              <img className="w-32 h-32" src={suport_icon} alt="Support" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
