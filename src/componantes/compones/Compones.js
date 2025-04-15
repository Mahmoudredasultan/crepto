import React from "react";
import "./compones.css";
import Image1 from "../../images/uideck-white.svg";
import Image2 from "../../images/TailGrids-white.svg";
import Image3 from "../../images/PlainAdmin-white.svg";
import Image4 from "../../images/AyroUI-white.svg";
import Image5 from "../../images/LineIcons-white.svg";
const Compones = () => {
    return (
        <div className="compones">
            <div className="container pt-5 pb-5 " data-aos="fade-up">
                <h1 className="text-center pb-5">
                    Join the 20,000+ companies using the our platform
                </h1>
                <div className="cont d-flex justify-content-between align-items-center">
                    <a href="#">
                        <img src={Image1} alt="" />
                    </a>
                    <a href="#">
                        <img src={Image2} alt="" />
                    </a>
                    <a href="#">
                        <img src={Image3} alt="" />
                    </a>
                    <a href="#">
                        <img src={Image4} alt="" />
                    </a>
                    <a href="#">
                        <img src={Image5} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Compones;
