import React from "react";
import BannerImg from "../assets/img/pexels-photo-7100323.jpeg";

function Banner(){
    return(
      <div className="flex items-center justify-center">
        <img src={BannerImg} alt="" className="w-full max-h-24 object-cover" />
      </div>
    );
}

export default Banner;