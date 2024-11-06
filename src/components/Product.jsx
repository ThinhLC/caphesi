import React from "react";
import Img_prd from "../assets/img/product1.png"
import CustomButton from "./CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faHeart } from '@fortawesome/free-solid-svg-icons';

function Product() {
    return (
        <div className="max-w-6xl mx-auto p-5">
            <div className="flex justify-center items-center gap-5 mt-6 mb-11">
                <span className="bg-emerald-500 w-16 h-1 mt-1"></span>
                <h2 className="text-lg md:text-2xl font-bold ">Sản phẩm nổi bật</h2>
                <span className="bg-emerald-500 w-16 h-1 mt-1"></span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {products.map((product, index) => (
                    <div key={index} className="bg-white overflow-hidden group h-[373px]">
                        <div className="overflow-hidden relative z-10">
                            <img
                                src={product.imgUrl}
                                alt={product.title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4 bg-gray-50">
                                <h3 className="text-lg font-bold">{product.title}</h3>
                                <p className="text-sm text-gray-600">{product.brand}</p>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xl font-semibold">vnđ {product.price}</span>
                                    <span className="text-sm line-through text-gray-500">vnđ {product.oldPrice}</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative bg-gray-600 h-[374px] flex items-center justify-center bg-opacity-80 group-hover:-mt-[23.5rem] transition-all z-30 border">
                            <div className="block h-fit">
                                <div className="flex justify-center">
                                    <button className="bg-white m-auto text-[17px] border-none px-9 py-2 font-medium text-yellow-700">
                                        Thêm vào giỏ
                                    </button>
                                </div>
                                <div className="flex justify-center text-white gap-6 font-medium mt-4 items-center">
                                    <a href="/#" className="flex items-center gap-1">
                                       <FontAwesomeIcon icon={faShare} className="text-white w-4 h-4" /> 
                                        Chia sẻ
                                    </a>
                                    <a href="/#" className="flex items-center gap-1">
                                      <FontAwesomeIcon icon={faHeart} className="text-white w-4 h-4"/>
                                        Yêu thích
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center m-11">
                <CustomButton>
                    Xem thêm
                </CustomButton>
            </div>
        </div>
    );
}

const products = [
    {
        title: "Cà phê rang xay",
        brand: "Trung Nguyên",
        price: "250.000",
        oldPrice: "3.500.000",
        new: false,
        imgUrl: Img_prd,
    },
    {
        title: "Cà phê rang xay",
        brand: "Trung Nguyên",
        price: "250.000",
        oldPrice: "3.500.000",
        new: false,
        imgUrl: Img_prd,
    },
    {
        title: "Cà phê rang xay",
        brand: "Trung Nguyên",
        price: "250.000",
        oldPrice: "3.500.000",
        new: false,
        imgUrl: Img_prd,
    },
    {
        title: "Cà phê rang xay",
        brand: "Trung Nguyên",
        price: "250.000",
        oldPrice: "3.500.000",
        new: false,
        imgUrl: Img_prd,
    },
    {
        title: "Cà phê rang xay",
        brand: "Trung Nguyên",
        price: "250.000",
        oldPrice: "3.500.000",
        new: true,
        imgUrl: Img_prd,
    },
    {
        title: "Cà phê rang xay",
        brand: "Trung Nguyên",
        price: "250.000",
        oldPrice: "3.500.000",
        new: false,
        imgUrl: Img_prd,
    },
    {
        title: "Cà phê rang xay",
        brand: "Trung Nguyên",
        price: "250.000",
        oldPrice: "3.500.000",
        new: true,
        imgUrl: Img_prd,
    },
    {
        title: "Cà phê rang xay",
        brand: "Trung Nguyên",
        price: "250.000",
        oldPrice: "3.500.000",
        new: false,
        imgUrl: Img_prd,
    },
];


export default Product;