import React, { useState } from "react";

const Ask = ({ quition, anser }) => {
    const [click, setClick] = useState(false);
    return (
        <div className="box mb-4 mx-auto">
            <div
                onClick={() => {
                    click ? setClick(false) : setClick(true);
                }}
                className={`cont1 d-flex justify-content-between align-items-center `}
            >
                <h3>{quition}</h3>
                <span>
                    <svg
                        className={`${click ? "trans" : "no-trans"}`}
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_50_132)">
                            <path
                                d="M8.82033 1.91065L4.99951 5.73146L1.17869 1.91064L-0.000488487 3.08978L4.99951 8.08978L9.99951 3.08979L8.82033 1.91065Z"
                                fill="currentColor"
                            ></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_50_132">
                                <rect
                                    width="10"
                                    height="10"
                                    fill="white"
                                    transform="translate(-0.000488281 0.000488281)"
                                ></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </span>
            </div>
            <p className={`${click ? "d-blok" : "d-none"}`}>{anser}</p>
        </div>
    );
};

export default Ask;
