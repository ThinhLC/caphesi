import React from "react";
import Img_1 from "../assets/img/news1.png";
import CustomButton from "./CustomButton";
function News() {
    const news = [
        {
            title: "Giá cà phê hôm nay ngày 09/10/2024",
            link: "#",
            image: Img_1,
        },
        {
            title: "Giá cà phê hôm nay ngày 09/10/2024",
            link: "#",
            image: Img_1,
        },
        {
            title: "Giá cà phê hôm nay ngày 09/10/2024",
            link: "#",
            image: Img_1,
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8 bg-white mt-14 lg:mt-0">
            <h2 className="text-center text-2xl font-bold my-7 text-gray-600">
                Tin tức
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
                {news.map((item, index) => (
                    <div
                        key={index}
                        className="sm:w-1/2 md:w-1/3 lg:w-1/4 group hover:transform hover:scale-105 transition-transform duration-300"
                    >
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-52 object-cover rounded-t-lg"
                            />
                            <div className="p-4 bg-white shadow-lg -mt-6 mx-4 rounded-lg relative z-10">
                                <p className="text-center font-medium text-gray-800 mb-2">{item.title}</p>
                                <div className="text-center"> 
                                    <CustomButton className="">
                                    Đọc Thêm
                                </CustomButton></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;
