import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    return (
        <nav
            className={`
        ${styles.paddingX}
      w-full items-center py-f fixed top-0 z-20 bg-primary`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    relative="path"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img
                        src={logo}
                        alt="logo"
                        className="w-9 h-9 object-contain"
                    />
                    <p className="text-white text-[18px] fond-bold cursor-pointer flex">
                        {" "}
                        Tony &nbsp;
                        <span className="sm:block hidden"> | TS Mastery</span>
                    </p>
                </Link>
                {/* <p className='text-red-500'>Red</p> */}

                {/* mapping each navLink there is e.g. [About, Work, Contact] to have an hover effect and clicked on effect  */}
                {/* if the screen is anything from small to larger then is flex if is small then it's hidden */}
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((navLink) => (
                        <li
                            key={navLink.id}
                            // making the navlink e.g. about work, contact have an active UI effect (turning white) when clicked and hovered over. Also set the title e.g. [About, Work, Contact] as the "active" state hook
                            className={`${
                                active === navLink.title
                                    ? "text-white"
                                    : "text-secondary"
                            } hover:text-white font-poppins text-[18px]
              font-mdeium cursor-pointer`}
                            onClick={() => setActive(navLink.title)}
                        >
                            <a href={`#${navLink.id}`}>{navLink.title}</a>
                        </li>
                    ))}
                </ul>
                {/* apply below only at sm aka small screen size with responsive design in tailwind css sm:hidden is hidden until is small screensized*/}
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    {/* added close and menu asset based on the toggle */}
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />

                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {navLinks.map((navLink) => (
                                <li
                                    key={navLink.id}
                                    className={`${
                                        active === navLink.title
                                            ? "text-white"
                                            : "text-secondary"
                                    } font-poppins font-medium cursor-pointer text-[16px]`}
                                    onClick={() => {
                                        setActive(navLink.title);
                                        setToggle(!toggle);
                                    }}
                                >
                                    <a href={`#${navLink.id}`}>
                                        {navLink.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
