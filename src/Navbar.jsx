import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/logo.svg";
import hamburger from "./assets/hamburger.svg";

export default function Navbar() {
    const navList = ["Home", "Industries", "Products", "Blog", "Contact Us", "About Us"];
    const location = useLocation();
    const currentPath = location.pathname;
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-[100] bg-[rgba(255,255,255,0.1)] backdrop-blur-xl">
            <div className="flex justify-between items-center md:px-7 md:py-5 md:px-10 px-5 py-3">
                <img src={logo} alt="logo" className="lg:w-36 md:w-28 w-24 md:hidden" />
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-white"
                >
                    <img src={hamburger} alt="hamburger" className="w-5" />
                </button>

                <div className="hidden md:flex items-center w-full justify-between gap-7">
                    <img src={logo} alt="logo" className="lg:w-36 md:w-28 w-24" />
                    <div className="flex items-center gap-7">
                        {navList.map((item, i) => (
                            <Link
                                key={i}
                                to={item === "About Us" ? "/About" : "/"}
                                className={`navItem manrope ${(item === "Home" && currentPath === "/") ||
                                    (item === "About Us" && currentPath === "/About")
                                    ? "activeNav"
                                    : ""
                                    }`}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                    <button className="primaryBtn md:text-base text-sm md:px-5 py-2 px-2">
                        Get a Demo
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden flex flex-col gap-4 text-center py-4 bg-[rgba(255,255,255,0.2)] backdrop-blur-md">
                    {navList.map((item, i) => (
                        <Link
                            key={i}
                            to={item === "About Us" ? "/About" : "/"}
                            onClick={() => setMenuOpen(false)} // close menu on click
                            className={`py-2 navItem manrope ${(item === "Home" && currentPath === "/") ||
                                (item === "About Us" && currentPath === "/About")
                                ? "activeNav"
                                : ""
                                }`}
                        >
                            {item}
                        </Link>
                    ))}

                    <button className="primaryBtn text-sm w-[90%] mx-auto py-2">
                        Get a Demo
                    </button>
                </div>
            )
            }
        </nav >
    );
}
