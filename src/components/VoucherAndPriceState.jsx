import React from "react";
import CustomButton from "./CustomButton";
import VoucherIcon from '../assets/img/voucherIcon.png';

function VoucherAndPriceState() {
    return (
        <section className="py-5 my-5 h-32 mx-14">
            <div className="flex" >
                <PriceState />
                <Voucher />
            </div>
        </section>

    );
}

function Voucher() {
    return (
        <div className="mx-2">
            <div><img src={VoucherIcon} alt="vouchertesst" className="w-16 h-16"/></div>
            <div className="px-80 bg-color-reduceconstract">
                <p className="font-bold text-color-main text-3xl text-center pd-5">Ưu đãi đặt biệt dành cho bạn</p>
                <div className="bg-red-500 text-white">
                    Chỉ người dùng mới 
                </div>
            </div>
            
        </div>
    )
}

function PriceState() {
    return (
        <div className="mx-2">
            <p className="text-3xl font-bold text-center pb-5">Bảng giá cà phê hôm nay</p>
            <div className="py-3 bg-white border rounded-2xl ">
                <div className="rounded flex bg-700 py-3">
                    <CustomButton size="large" className="md:text-xl xs:text-sm">
                        Xem  ngày khác
                    </CustomButton>
                    <CustomButton className="flex items-center rounded-full border border-color-main ml-1 px-6 py-0 text-xs font-bold xs:text-sm" size="py-s">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 w-8 h-8" >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g clip-path="url(#clip0_15_72)">
                                    {/* <rect width="24" height="24" fill="white"></rect> */}
                                    <circle cx="7" cy="12" r="2" stroke="#02BA8E" stroke-linejoin="round"></circle>
                                    <circle cx="17" cy="6" r="2" stroke="#02BA8E" stroke-linejoin="round"></circle>
                                    <path d="M15 7L8.5 11" stroke="#02BA8E"></path>
                                    <circle cx="17" cy="18" r="2" stroke="#02BA8E" stroke-linejoin="round"></circle>
                                    <path d="M8.5 13.5L15 17" stroke="#02BA8E"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_15_72">
                                        <rect width="24" height="24" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </g>
                        </svg>
                        Chia sẻ
                    </CustomButton>
                </div>
               
               <DataPriceState/>
            </div>
        </div>

    );
}


function createTablePriceState(columns, data) {
    return (
        <div className="p-4">
            <table className="w-full table-fixed border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        {columns.map((column, index) => (
                            <th key={index} className="border px-4 py-3 text-center">
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="border border-gray-300 px-4 py-2">
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function DataPriceState() {
    const columns = ["Thị trường", "Trung bình", "Thay đổi"];
    const data = [
        ["Đắk Lắk", "113.000", "-2000"],
        ["Đắk Lắk", "113.000", "-2000"],
        ["Đắk Lắk", "113.000", "-2000"],
    ];

    const tableComponent = createTablePriceState(columns, data);

    return (
        <div>
            {tableComponent}
        </div>
    );
}

export default VoucherAndPriceState;