import { Skills } from "./skills";
import Java from "../assets/images/javascript.jpg";
import html from "../assets/images/html5-e-css3.jpg";
import Type from "../assets/images/typescript.jpg";
import React from "../assets/images/reactjs.jpg";
import Tailwind from "../assets/images/tailwindcss.jpg";
import Next from "../assets/images/nextjs.jpg";
import Git from "..//assets/images/git.jpg";
import Data from "../assets/images/database.jpg";
import Wordpress from "../assets/images/wordpress.png";
import nodejs from "../assets/images/nodejs.png";
import reactnative from "../assets/images/react-native.jpg";

export const Perfil = () => {
    return (
        <div >
            <div className="font-bold flex justify-center italic md:mt-[-30px] md:mb-4 md:text-3xl ">
            FRONTEND <div className="rounded-full ml-1 mr-1 bg-[#CE0287] w-2 h-2 mt-[8px] md:w-3 md:h-3 md:mt-[12px] "></div> DEVELOPER
            </div>
            <div className="grid grid-rows-6 grid-flow-col gap-y-3 md:grid-rows-3 mt-3 md:gap-x-24 md:gap-y-6 md:mt-6">
                <Skills logo={html.src} label='HTML e CSS'/>
                <Skills logo={Java.src} label='Javascript'/>
                <Skills logo={Type.src} label='Typescript'/>
                <Skills logo={React.src} label='Reactjs'/>
                <Skills logo={Tailwind.src} label='Tailwind'/>
                <Skills logo={Next.src} label='Nextjs'/>
                <Skills logo={Git.src} label='GitHub'/>
                <Skills logo={Data.src} label='Database'/>
                <Skills logo={Wordpress.src} label='Wordpress'/>
                <Skills logo={nodejs.src} label="Nodejs (em Breve)"/>
                <Skills logo={reactnative.src} label="React-Native (em Breve)"/>

            </div>
        </div>
    )
}