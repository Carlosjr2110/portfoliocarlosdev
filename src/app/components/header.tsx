'use client'

import { SocialLogo } from "./sociallogo";
import { Cube } from "./cube";
import instagram from '../assets/images/instagram.png';
import linkedin from "../assets/images/linkedin.png";
import whatsapp from "../assets/images/whatsapp.png";
import logo from "../assets/images/LogoDev.png";
import git from "../assets/images/github.png";
import { useEffect, useState } from "react";

export const Header = () => {
    
    const [cubeSize, setCubeSize] = useState<{ width: string; height: string; transform: string }>({
        width: "40px",
        height: "40px",
        transform: "20px",
    });

    useEffect(() => {
        function handleResize() {
            const screenWidth = window.innerWidth;
            let newSize = { width: "40px", height: "40px", transform: "20px" };

            if (screenWidth >= 1024) {
                newSize = { width: "70px", height: "70px", transform: "35px" };
            } else if (screenWidth >= 768) {
                newSize = { width: "70px", height: "70px", transform: "35px" };
            }

            setCubeSize(newSize);
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const phoneNumber = '5511930258999';
    
    
    const getWhatsAppLink = () => {
        const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');
        return `https://wa.me/${formattedPhoneNumber}`;};

    return (
    <div>
        <div className=" flex   " >
            <div className=" flex mt-10 md:flex md:mt-14 md:space-x-3 ml-[100px] lg:ml-[200px] xl:ml-[350px] 2xl:ml-[550px]">
                <a className="mr-1 ml-[-80px]" href="https://www.instagram.com/carlosjr2110" target="_blank" rel="noopener noreferrer">
                    <SocialLogo img={instagram.src}/>
                </a>
                <a className="mr-1" href="https://www.linkedin.com/in/carlos-humberto-chaves-jr-b98ba71b9" target="_blank" rel="noopener noreferrer">
                    <SocialLogo img={linkedin.src}/>
                </a>
                <a className="mr-1" href="https://www.github.com/carlosjr2110 " target="_blank" rel="noopener noreferrer">
                    <SocialLogo img={git.src}/>
                </a>
                <a className="mr-1" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                    <SocialLogo img={whatsapp.src}/>
                </a>
                <div className=" text-white w-[200px] text-[15px] md:flex md:w-[300px] md:text-[15px] lg:text-[30px] md:ml-5 justify-center items-center  font-semi rounded-md w-90 h-12">
                    11 93025-8999
                </div>
            </div>
            <div className="">
            <div className=" mt-8 ml-[-40px] md:mt-12 lg:mt-14 lg:ml-[150px]  ">
                    <Cube logo={logo.src} width={cubeSize.width} height={cubeSize.height} transform={cubeSize.transform}/>
            </div>
            </div>
        </div>    
    </div>
    )
}