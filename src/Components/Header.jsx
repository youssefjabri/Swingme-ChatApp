import { useLocation } from "react-router-dom";
import { SwingmeLogo } from "../assets";
import { navigation } from "../Constants";
import { useState, useEffect } from "react";
import { HamburgerMenu } from "../design/Header";
import { FaBars } from "react-icons/fa6";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { MdKeyboardArrowRight } from "react-icons/md";

const Header = () => {
  const { hash: currentHash } = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  // Enable scroll when the location changes
  useEffect(() => {
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    }
  }, [currentHash]);

  return (
    <div
      className={`fixed font-code top-0 z-50 left-0 w-full  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#hero" className="block w-[12rem] xl:mr8">
          <img src={SwingmeLogo} width={190} height={40} alt="Brainwave logo" />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1
                            ${
                              item.onlyMobile ? "lg:hidden" : ""
                            } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold
                            ${
                              item.url === currentHash
                                ? "z-2 lg:text-n-1"
                                : "lg:text-n-1/50"
                            } lg:leading-5 lg:hover:text-n-1 xl:px-12
                            `}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="hidden lg:flex mr-8 text-n-1/50 transition-colors hover:text-n-1 "
        >
          New Account
        </a>
        <button className="hidden lg:flex bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <a href="#getstarted" className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1.5 px-6 ring-1 ring-white/10 ">
            <span>Get Started</span>
            <MdKeyboardArrowRight />
          </a>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-white to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
        <FaBars
          className="ml-auto text-2xl lg:hidden hover:text-[#8074a9] cursor-pointer "
          onClick={toggleNavigation}
        />
      </div>
    </div>
  );
};

export default Header;
