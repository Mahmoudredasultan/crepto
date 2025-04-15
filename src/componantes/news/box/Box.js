import React from "react";

const Box = ({ Image1 }) => {
    return (
        <div className="box col-lg-4 col-md-12 col-sm-12">
            <img src={Image1} alt="" />
            <div className="text">
                <div className="d-flex justify-content-between data mb-3">
                    <div>
                        <i className="fas fa-user"></i> <span>By Admin</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-calendar-days "></i>
                        <span>By Admin</span>
                    </div>
                </div>
                <h3 className="mb-3">
                    Quis nostrud exercitati ullamc laboris nisi aliquip
                </h3>
                <p className="last">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc sed congue arcu, In et dignissim quam condime vel.
                </p>
            </div>
        </div>
    );
};

export default Box;
