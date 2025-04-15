import React from "react";
import "./sales.css";
const Sales = () => {
    return (
        <div className="sales">
            <div
                className="container d-flex justify-content-between align-items-center gap-5"
                data-aos="fade-up"
            >
                <div className="cont1">
                    {" "}
                    <div className="chart-container mx-auto ">
                        <div className="donut-chart"></div>
                        <div className="chart-center">Token</div>

                        <span className="label label-1">39.2%</span>
                        <span className="label label-2">29.6%</span>
                        <span className="label label-3">20.4%</span>
                        <span className="label label-4">10.8%</span>
                    </div>
                </div>
                <div className="cont ">
                    <h3>TOKEN</h3>
                    <h1>Token Sale</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus condimentum tellus at lectus pulvinar, id
                        auctor felis iaculis. In vestibulum neque sem, at
                        dapibus justo facilisis in.
                    </p>
                    <ul className="mt-5">
                        <li>
                            <span></span>
                            <p>73% Financial Overhead</p>
                        </li>
                        <li>
                            <span></span>
                            <p>55% Bonus & found</p>
                        </li>
                        <li>
                            <span></span>
                            <p>38% it infastrueture</p>
                        </li>
                        <li>
                            <span></span>
                            <p>20.93% Gift Code Inventory</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sales;
