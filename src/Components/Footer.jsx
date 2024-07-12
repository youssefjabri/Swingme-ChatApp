import React from 'react'
import Section from "./Section";
import { FaDiscord , FaGithub , FaLinkedin} from "react-icons/fa";

const Footer = () => {
    return (
        <Section crosses className="!px-0 !py-10">
            <div className="font-code container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <p className="caption text-n-4 lg:block">
                    © {new Date().getFullYear()}. All rights reserved.
                </p>
                
                <ul className="flex gap-5 flex-wrap">
                        <a href="https://discord.com/" target="_blank" className="flex text-[#2e2e2e] items-center justify-center w-10 h-10 text-xl hover:text-white bg-[#eee] rounded-full transition hover:bg-[#AC6AFF] ">
                            <FaDiscord />
                        </a>
                         <a href="https://github.com/" target="_blank" className="flex text-[#2e2e2e] items-center justify-center w-10 h-10 text-xl hover:text-white bg-[#eee] rounded-full transition hover:bg-[#AC6AFF] ">
                            <FaGithub />
                        </a>
                         <a href="https://www.linkedin.com/" target="_blank" className="flex text-[#2e2e2e] items-center justify-center w-10 h-10 text-xl hover:text-white bg-[#eee] rounded-full transition hover:bg-[#AC6AFF] ">
                            <FaLinkedin />
                        </a>
                </ul>
            </div>
        </Section>
    )
}

export default Footer