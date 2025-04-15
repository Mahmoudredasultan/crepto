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
                clicked ? setClicked(false) : setClicked(true);
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
