import React from "react";
import CustomButton from "./CustomButton";
import VoucherIcon from '../assets/img/voucherIcon.png';

function VoucherAndPriceState() {
    return (
        <section className="flex flex-col lg:flex-row lg:justify-between lg:space-x-12 px-4 sm:px-8 py-8 my-8 max-w-screen-xl mx-auto">
            <PriceState />
            <Voucher />
        </section>
    );
}

function Voucher() {
    return (
        <div className="bg-green-100 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg flex flex-col items-center w-full max-w-md lg:max-w-lg mb-8 lg:mb-0">
            <img src={VoucherIcon} alt="voucher" className="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6" />
            <h2 className="font-bold text-color-main text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6 text-center">Ưu đãi đặc biệt dành cho bạn</h2>
            <div className="space-y-4 sm:space-y-6 mb-6 w-full">
                <div className="px-2 sm:px-4 py-3 rounded-md">
                    <span className="bg-red-500 text-white p-1 sm:p-2 rounded-md text-sm sm:text-base">Chỉ người dùng mới</span>
                    <div className="bg-white p-4 sm:p-6 rounded-md shadow-md mt-2 sm:mt-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-red-600">GIẢM 10%</h3>
                        <p className="text-color-main font-medium text-sm sm:text-lg">Đơn hàng từ 500.000vnd</p>
                        <p className="text-color-main font-medium text-sm sm:text-lg">Hết hạn: 03/10/2024</p>
                    </div>
                </div>
                <div className="px-2 sm:px-4 py-3 rounded-md">
                    <span className="bg-red-500 text-white p-1 sm:p-2 rounded-md text-sm sm:text-base">Chỉ người dùng mới</span>
                    <div className="bg-white p-4 sm:p-6 rounded-md shadow-md mt-2 sm:mt-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-red-600">GIẢM 10%</h3>
                        <p className="text-color-main font-medium text-sm sm:text-lg">Đơn hàng từ 500.000vnd</p>
                        <p className="text-color-main font-medium text-sm sm:text-lg">Hết hạn: 03/10/2024</p>
                    </div>
                </div>
            </div>
            <CustomButton className="py-2 sm:py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg">
                Thu thập tất cả
            </CustomButton>
        </div>
    );
}

function PriceState() {
    return (
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg w-full max-w-2xl mb-8 lg:mb-0">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6">Bảng giá cà phê hôm nay</p>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6">
                <CustomButton className="py-2 sm:py-3 px-4 sm:px-6 rounded-md text-base sm:text-lg">
                    Xem ngày khác
                </CustomButton>
                <CustomButton className="flex items-center border border-green-600 text-green-600 py-2 sm:py-3 px-4 sm:px-6 rounded-full text-base sm:text-lg mt-4 sm:mt-0">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3">
                        <circle cx="7" cy="12" r="2" stroke="#02BA8E" strokeLinejoin="round"></circle>
                        <circle cx="17" cy="6" r="2" stroke="#02BA8E" strokeLinejoin="round"></circle>
                        <path d="M15 7L8.5 11" stroke="#02BA8E"></path>
                        <circle cx="17" cy="18" r="2" stroke="#02BA8E" strokeLinejoin="round"></circle>
                        <path d="M8.5 13.5L15 17" stroke="#02BA8E"></path>
                    </svg>
                    Chia sẻ
                </CustomButton>
            </div>
            <DataPriceState />
        </div>
    );
}

function createTablePriceState(columns, data) {
    return (
        <table className="w-full border-collapse text-base sm:text-lg">
            <thead>
                <tr className="bg-gray-100">
                    {columns.map((column, index) => (
                        <th key={index} className="border px-4 sm:px-6 py-2 sm:py-4 text-center">
                            {column}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className="text-center">
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className={`border px-4 sm:px-6 py-2 sm:py-4 ${cellIndex === 2 ? 'text-red-600' : 'font-bold'}`}>
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

function DataPriceState() {
    const columns = ["Thị trường", "Trung bình", "Thay đổi"];
    const data = [
        ["Đắk Lắk", "113,400", "-200"],
        ["Lâm Đồng", "112,800", "-200"],
        ["Gia Lai", "113,400", "-100"],
        ["Đắk Nông", "113,500", "-100"],
        ["Hồ tiêu", "146,000", "-1,000"],
        ["Tỷ giá USD/VND", "24,635", "0"],
    ];

    return createTablePriceState(columns, data);
}

export default VoucherAndPriceState;
