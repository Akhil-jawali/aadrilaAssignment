import React from 'react'
import insuranceImg from './assets/Insurance_Icon.svg'
import lendingImg from './assets/Lending_Icon.svg'
import healthcareImg from './assets/Healthcare_Icon.svg'
import spaceDots from './assets/spaceDots.svg'
import smallDots from './assets/smallDots.svg'
import IndustryCard from './IndustryCard';

const industries = [
    {
        name: "Insurance",
        description:
            "Automate claims processing with accurate document validation.",
        img: insuranceImg,
    },
    {
        name: "Lending",
        description:
            "Ensure faster loan approvals with fraud detection and instant verification.",
        img: lendingImg,
        featured: true, // middle card
    },
    {
        name: "Healthcare",
        description:
            "Streamline patient record management and ensure HIPAA compliance.",
        img: healthcareImg,
    },
];


const Industires = () => {
    return (
        <>
            <div className="relative w-full md:mt-16 industryBg md:h-[100vh] h-[130vh] ">
                <div className="md:px-10 px-5 md:pb-5 px-3 py-3">
                    <div className="lg:flex flex-col z-20 hidden">
                        <p className="md:text-2xl text-lg font-bold heroGradient manrope">
                            AI-driven innovation for growth.
                        </p>
                        <p className="md:mt-3 text-3xl font-semibold md:text-5xl">
                            Industries We Empower
                        </p>
                    </div>
                    <div className="absolute top-0 right-0 w-full lg:px-16 px-5 py-5">
                        <div className="flex lg:flex-row flex-col gap-5 w-full lg:h-[90vh]">
                            <div className="flex flex-col items-center z-20 lg:hidden mb-5">
                                <p className="md:text-2xl text-lg font-bold heroGradient text-center manrope">
                                    AI-driven innovation for growth.
                                </p>
                                <p className="mt-3 text-3xl font-semibold md:text-5xl text-center">
                                    Industries We Empower
                                </p>
                            </div>
                            <div className="w-full p-5 flex lg:flex-col justify-end">
                                <IndustryCard name={industries[0].name} description={industries[0].description} img={industries[0].img} />
                            </div>
                            <div className="w-full p-5 flex lg:flex-col justify-center relative">
                                <img src={smallDots} alt="dots" className="absolute top-[0px] left-[0px] z-8 w-[150px] lg:invisible visible" />
                                <IndustryCard name={industries[1].name} description={industries[1].description} img={industries[1].img} />
                            </div>
                            <div className="w-full p-5 flex lg:flex-col justify-start relative">
                                <IndustryCard name={industries[2].name} description={industries[2].description} img={industries[2].img} />
                                <img src={spaceDots} alt="dots" className="absolute bottom-[20px] right-0 z-10 w-[200px] lg:visible invisible" />
                                <img src={smallDots} alt="dots" className="absolute lg:top-[30px] top-[0px] lg:left-[-60px] right-0 z-8 w-[150px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Industires