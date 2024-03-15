import Foto from "../assets/images/foto.png";
import logo from "../assets/images/LogoDev.png"

export const Quemsou = () =>{
    return(
        <div>
           <div className="md:flex">
                <img className="ml-2 mb-2 rounded-full w-[60px] h-[60px] md:w-[200px] md:h-[200px] " src={Foto.src} alt="" />
                <div className="w-[190px] h-[400px] ml-1 text-[#003a9b] font-bold text-[11px] border-solid border-2 border-[#003a9b] rounded-lg p-5 md:text-lg md:ml-10 md:w-[500px] md:h-[400px] ">
                Olá, <br />
                Sou Carlos H. C. Jr., desenvolvedor Frontend, especialista em React. Em constante estudo, aprendizado e evolução para me tornar um Dev FullStack. 
                <br /><br />
                Desenvolvo LandPages, WebPages, Aplicativos Web. No momento estou desenvolvendo o aplicativo Premia Kids. Um app de tarefas infantis para o dia a dia com premiações, pontuação, etc.
                <br /><br />
                Em breve estará disponível na web e nas lojas de aplivativos Android e Apple.
                </div>
            </div>
        </div>
    )
}