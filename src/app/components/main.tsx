'use client'

import { useEffect, useState } from "react";
import { Quemsou } from "./quemsou";
import { Perfil } from "./perfil";
import { Portfolio } from "./portfolio";

export const Main = () => {
    
    const [showQuemSou, setShowQuemSou] = useState(false);
    const [showPerfil, setShowPerfil] = useState(false);
    const [showPortfolio, setShowPortfolio] = useState(false);
    
    const HandleQuemSou = () => {
        if (!showQuemSou)
        setShowQuemSou (true);
        setShowPerfil (false);
        setShowPortfolio(false);
    };

    const HandlePerfil = () => {
        if (!showPerfil)
        setShowPerfil (true);
        setShowQuemSou(false);
        setShowPortfolio(false);
    };

    const HandlePortFolio = () => {
        if (!showPortfolio)
        setShowPortfolio (true);
        setShowQuemSou(false);
        setShowPerfil(false);
    };


    return (
        <div>
           
            <div className="flex justify-center items-start mt-5 text-white font-semibold md:mt-14 md:text-[25px] ">
                <div className="flex space-x-4 md:space-x-28">
                    <button onClick={HandleQuemSou} onTouchStart={HandleQuemSou} className="cursor-pointer hover:underline">QUEM SOU</button>
                    <button onClick={HandlePerfil} onTouchStart={HandlePerfil} className="cursor-pointer hover:underline">O QUE FAÇO</button>
                    <button onClick={HandlePortFolio} onTouchStart={HandlePortFolio} className="cursor-pointer hover:underline">PORTFÓLIO</button>
                </div>
            </div>
            
            <div className="flex justify-center">
                <div className="w-[700px] h-[600px] mt-[-20px] bg-cover bg-center bg-[url(./assets/images/telacel.png)] md:bg-[url(./assets/images/note.png)]  md:w-[900px] md:h-[800px]  md:mt-[-20px] "></div>
                <div className={`flex absolute justify-center items-center mt-[30px] w-[215px] h-[500px] rounded-md bg-white md:mt-[92px] md:w-[857px] md:h-[476px]`}>
                    <div>{showQuemSou &&
                    <Quemsou></Quemsou>
                    }</div>
                    <div>{showPerfil &&
                    <Perfil></Perfil>
                    }</div>
                    <div>{showPortfolio &&
                    <Portfolio></Portfolio>
                    }</div>
                </div>
            </div>
        </div>

    )
}
