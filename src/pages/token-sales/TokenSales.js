import React from "react";
import "./token-sales.css";
import Image from "../../images/payment-method.svg";
const TokenSales = () => {
    return (
        <divn className="token-sales pt-5 pb-5">
            <div className="container pt-5 mt-5">
                <h3 className="text-center">CRYPTO FEATURE</h3>
                <h1 className="header text-center">Token Sale</h1>
                <p className="text-center mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc sed congue arcu, In et dignissim quam condimentum vel.
                </p>
                <div className="cont d-flex justify-content-between align-items-center gap-5 pt-5">
                    <div className="cont-1">
                        <h3>Information About Tokens</h3>
                        <ul>
                            <li>
                                <p>Token Name</p>
                                <p>ethereum</p>
                            </li>
                            <li>
                                <p>Nominal Price</p>
                                <p>1eth = 0.025USD</p>
                            </li>
                            <li>
                                <p>Total Number of Token Produced</p>
                                <p>7 BN smt</p>
                            </li>
                            <li>
                                <p>Unsold Tokens</p>
                                <p>Burn Smart Contrac</p>
                            </li>
                            <li>
                                <p>Type of Token</p>
                                <p>ERC-20</p>
                            </li>
                            <li>
                                <p>Minimal transaction amount</p>
                                <p>1 ETH/ 1 BTC/ 1 LTC</p>
                            </li>
                        </ul>
                    </div>
                    <div className="cont-2">
                        <div className="box d-flex justify-content-between">
                            <div className="date">
                                <h1>616</h1>
                                <p>Days</p>
                            </div>
                            <h1>:</h1>
                            <div className="date">
                                <h1>0</h1>
                                <p>HOURS</p>
                            </div>
                            <h1>:</h1>
                            <div className="date">
                                <h1>45</h1>
                                <p>MINUTES</p>
                            </div>
                            <h1>:</h1>
                            <div className="date">
                                <h1>03</h1>
                                <p>SECONDS</p>
                            </div>
                        </div>
                        <div className="draw mx-aotu mt-5">
                            <div className="fill"></div>
                            <div className="line"></div>
                        </div>
                        <a href="#" className="button mt-4 mx-auto  d-block ">
                            {" "}
                            Buy Token Now
                        </a>
                        <img
                            src={Image}
                            alt=""
                            className="mx-auto d-block mt-5"
                        />
                    </div>
                </div>
            </div>
        </divn>
    );
};

export default TokenSales;
