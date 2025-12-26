import React from "react";
import Invoice from "./assets/Invocie.png";
import Doc from "./assets/Doc.png";
import License from "./assets/License.png";

const Hero = () => {
    return (
        <div className="bgImg md:pb-7 pb-4">
            <div className="md:pt-20 md:pt-10 pt-15 pb-5 md:mt-7 grid md:grid-cols-10 gap-4 items-center md:px-10 px-5">

                <div className="md:col-span-4 w-full">
                    <div className="textDiv flex flex-col md:items-start items-center gap-5">
                        <p className="font-bold lg:text-[48px] md:text-[30px] text-[24px] md:text-left text-center lg:pt-0 pt-5">
                            <span className="heroGradient">AI-Powered </span>
                            Document Automation & Fraud Detection
                        </p>
                        <p className="text-xl font-normal md:text-left text-center text-justify manrope">
                            Enhance security, accuracy, and efficiency with our cutting-edge AI solutions for seamless document processing and fraud prevention.
                        </p>
                        <div className="flex gap-5 w-full">
                            <button className="primaryBtn md:text-base text-sm w-full md:px-5 py-2 px-2">Get a Demo</button>
                            <button className="primaryBtn md:text-base text-sm w-full md:px-5 py-2 px-2">Explore Solutions</button>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-6 w-full">
                    <div className="carousel">
                        <img src={Doc} className="doc img1" alt="doc" />
                        <img src={Invoice} className="doc img2" alt="invoice" />
                        <img src={License} className="doc img3" alt="license" />
                    </div>
                </div></div>
        </div>
    );
};

export default Hero;
