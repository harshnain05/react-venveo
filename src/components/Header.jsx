import React, { useState } from "react";
import { HEADER_LIST } from "../utils/helper";
import { ArrowIcon} from "../utils/icon";
import { ScopIcon } from "../utils/icon";

const Header = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
        setActiveIndex(null);
    };

    return (
        <div className="max-w-[1440px]">
            <div className="container justify-between mx-auto max-w-[1440px] max-lg:px-4">
                <nav className="flex justify-between bg-pine-green max-lg:items-center text-white lg:pl-14">
                    <div className="z-[52] relative">
                        <a href="/"><img src="./assets/image/svg/nav-logo.svg" alt="navLogo" className="sm:w-[59px] lg:pt-8 pt-4 w-11" /></a>
                    </div>
                    <button onClick={handleOpen} className={`hidden size-8 justify-center relative z-[60] max-lg:flex flex-col overflow-hidden`}>
                        <span className={`w-8 transition-all duration-300 h-0.5 bg-white mb-2 rounded-md ${open ? 'translate-x-10' : ''}`}></span>
                        <span className={`w-8 transition-all duration-300 h-0.5 bg-white rounded-md relative after:w-full after:h-full after:bg-white after:absolute after:top-0 after:left-0 after:rounded-md ${open ? 'rotate-45 after:rotate-90' : ''}`}></span>
                    </button>

                    <div className={`flex gap-[42px] max-lg:fixed max-lg:top-0 lg:pl-12 lg:items-center max-lg:h-full lg:h-[80px] font-maisonneue max-lg:w-full max-lg:flex-col bg-white max-lg:bg-gray-800 max-lg:duration-300 max-lg:justify-center max-lg:items-center z-40 ${open ? 'max-lg:left-0' : 'max-lg:top-full'}`}>
                        {HEADER_LIST.map((item, index) => (
                            <div key={index} className="relative lg:text-black">
                                <button onClick={() => handleClick(index)} className="relative z-[51] text-[15px] font-medium duration-200 focus:outline-none">
                                    {item.name}
                                </button>

                                {item.subMenu && activeIndex === index && (
                                    <div className="absolute left-0 mt-2 w-48 z-[52] bg-white text-gray-800 rounded shadow-lg">
                                        {item.subMenu.map((subItem, subIndex) => (
                                            <a key={subIndex} href="#" onClick={() => setActiveIndex(null)} className="block px-4 py-2
                                             hover:bg-gray-100  duration-200">{subItem}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="max-lg:hidden">
                            <ScopIcon />
                        </div>
                        <button className="bg-[#D2F038] text-black font-semibold font-maisonneue py-7 px-8 flex items-center gap-1.5">Let’s Talk <ArrowIcon /> </button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
