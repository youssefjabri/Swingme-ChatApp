import React, { useRef } from "react";
import Section from "./Section";
import { Underline, heroBackground, robot } from "../assets";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BackgroundCircles} from "../design/Hero";
import { heroIcons } from "../Constants";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import { ScrollParallax } from "react-just-parallax";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="home"
    >
      <div className="container relative">
        <div
          ref={parallaxRef}
          className="font-code relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem] "
        >
          <h1 className="h1 mb-6">
            Connect instantly to the world
            <span className="inline-block relative">
              Swingme
              <img
                src={Underline}
                alt="Curve"
                className="absolute top-full left-0 w-full xl:mt-1"
                width={624}
                height={28}
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            At Swingme, we bring people together. Enjoy seamless communication
            with cutting-edge technology that ensures your conversations are
            private, secure and always at your fingertips.
          </p>
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <a href="#getstarted" className="relative flex space-x-2 items-center text-lg z-10 rounded-full bg-zinc-950 py-1.5 px-6 ring-1 ring-white/10 ">
              <span>Get Started</span>
              <MdKeyboardArrowRight />
            </a>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-white to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </div>
        <div className="relative max-w[23rem] mx-auto md:max-w-5xl xl:mb-24 ">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient   ">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="aspect-[33/40] rounded-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  alt="img"
                  width={1024}
                  height={900}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]  "
                />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="font-code hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
    </Section>
  );
};

export default Hero;
