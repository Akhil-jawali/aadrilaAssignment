import { useState } from "react";
import team1 from "./assets/team1.png";
import team2 from "./assets/team2.png";
import team3 from "./assets/team3.png";
import smallDots from './assets/smallDots.svg'


const data = [
    {
        img: team1,
        name: "MANSI SHUKLA",
        title: "CEO FutureSphere",
        desc: "For this time-constrained generation in a NOW economy, we would want to play our parts. We intend to make banking not feel out of place."
    },
    {
        img: team2,
        name: "JOHN CARTER",
        title: "CTO FutureSphere",
        desc: "Driving innovation using AI & automation for operational excellence and compliance."
    },
    {
        img: team3,
        name: "VIKRAM SINGH",
        title: "COO FutureSphere",
        desc: "Focused on scaling technology with customer-centric experiences and fraud prevention."
    }
];

const Team = () => {
    const [index, setIndex] = useState(1);

    const prev = () => setIndex((prev) => (prev - 1 + data.length) % data.length);
    const next = () => setIndex((prev) => (prev + 1) % data.length);

    return (
        <div className="industryBg">
            <div className="flex flex-col gap-2 items-center">
                <p className="mt-3 text-3xl font-semibold md:text-5xl z-[15]">
                    Meet our team
                </p>
                <p className="md:text-2xl text-lg heroGradient text-center manrope">
                    Meet our passionate and talented team, committed to delivering exceptional results.
                </p>
            </div>

            <div className="flex gap-4 justify-center z-20 py-5 relative">
                <img src={smallDots} alt="dots" className="absolute lg:top-[30px] top-[0px] lg:right-[150px] right-0 z-8 w-[150px] md:block hidden" />

                <svg onClick={prev} width="35" height="35" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="60" height="60" rx="12" fill="#1E73BE" />
                    <path d="M34 18L22 30L34 42" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>


                <svg onClick={next} width="35" height="35" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="60" height="60" rx="12" fill="#1E73BE" />
                    <path d="M26 18L38 30L26 42" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>

            <div className="w-full md:py-10 pt-5 pb-15 relative flex flex-col items-center">

                {/* Buttons */}

                {/* IMAGE ROW SECTION */}
                <div className="relative w-full flex justify-center gap-14 md:gap-20 items-start h-[45vh] md:h-[65vh]">

                    {/* MOBILE (ONLY ACTIVE PROFILE VISIBLE) */}
                    <div className="flex md:hidden flex-col items-center">
                        <img
                            src={data[index].img}
                            className="w-36 h-36 rounded-full border-4 border-white shadow-xl transition-all duration-500"
                        />

                        <div className="bg-[#0054A6] rounded-lg text-white text-center mt-6 p-8 w-[90vw] shadow-lg animate-fadeIn flex flex-col md:gap-5 gap-2">
                            <h2 className="text-xl font-bold">{data[index].name}</h2>
                            <p className="text-[#CD6028] font-semibold manrope">{data[index].title}</p>
                            <p className="text-sm manrope">{data[index].desc}</p>
                        </div>
                    </div>

                    {/* LARGE SCREENS (3 PROFILES VISIBLE) */}
                    <div className="hidden md:flex justify-center gap-20 items-center relative">
                        {data.map((member, i) => (
                            <div key={i} className="relative flex flex-col items-center justify-start">
                                <img
                                    src={member.img}
                                    className={`
                    transition-all duration-500 rounded-full
                    ${index === i
                                            ? "w-52 h-52 border-4 border-white shadow-xl z-10"
                                            : "w-32 h-32 opacity-60"
                                        }
                  `}
                                />

                                {index === i && (
                                    <div className="absolute top-full mt-6 left-1/2 -translate-x-1/2 bg-[#0054A6] rounded-lg text-white text-center p-8 w-[60vw] lg:w-[50vw] shadow-lg animate-fadeIn z-50">
                                        <h2 className="text-2xl md:text-3xl font-bold">{member.name}</h2>
                                        <p className="text-[#9CE4FF] font-semibold md:text-xl">{member.title}</p>
                                        <p className="pt-3">{member.desc}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Team;
