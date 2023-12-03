import React from "react";

import logo from "../img/LogoLUKA.png";

import "../style/bannerSencillo.css";

export default function BannerSencillo() {

    return (
        <div className="banner">            
            <img className="banner-logo" src ={logo} alt="Logo" />
        </div>
    );
}