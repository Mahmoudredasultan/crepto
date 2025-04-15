import React, { useState, useEffect } from "react";
import "./icon.css";
function Icon({ setOpend }) {
    const [clicked, setClicked] = useState(false);
    useEffect(() => {
        clicked ? setOpend(true) : setOpend(false);
    }, [clicked]);
    return (
        <div
            onClick={() => {
                if (clicked) {
                    document.querySelector(".navbar1 .mobile").style.height =
                        "0";
                    document.querySelector(".navbar1 .mobile").style.overflow =
                        "hidden";
                    setClicked(false);
                } else {
                    document.querySelector(".navbar1 .mobile").style.height =
                        "220px";
                    document.querySelector(".navbar1 .mobile").style.overflow =
                        "visible";
                    setClicked(true);
                }
            }}
            className="icon d-lg-none"
        >
            <div
                className={`i i1 main-bg ${clicked ? "clicked1" : null} `}
            ></div>
            <div
                className={`i i2 main-bg ${clicked ? "clicked2" : null}`}
            ></div>
            <div
                className={`i i3 main-bg ${clicked ? "clicked3" : null}`}
            ></div>
        </div>
    );
}
export default Icon;
