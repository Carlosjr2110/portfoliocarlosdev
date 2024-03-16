import { SocialLogo } from "./sociallogo";
import { Cube } from "./cube";
import instagram from '../assets/images/instagram.png';
import linkedin from "../assets/images/linkedin.png";
import whatsapp from "../assets/images/whatsapp.png";
import logo from "../assets/images/LogoDev.png";
import git from "../assets/images/github.png";

export const Header = () => {
    
    const phoneNumber = '5511930258999';

    const getWhatsAppLink = () => {
        const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');
        return `https://wa.me/${formattedPhoneNumber}`;};

    return (
    <div>
        <div className=" flex   " >
            <div className=" flex mt-10 md:flex md:mt-14 md:space-x-3 ml-[100px] lg:ml-[200px] xl:ml-[350px] 2xl:ml-[550px]">
                <a className="mr-1 ml-[-80px]" href="" target="_blank" rel="noopener noreferrer">
                    <SocialLogo img={instagram.src}/>
                </a>
                <a className="mr-1" href="https://www.linkedin.com/in/carlos-humberto-chaves-jr-b98ba71b9" target="_blank" rel="noopener noreferrer">
                    <SocialLogo img={linkedin.src}/>
                </a>
                <a className="mr-1" href="">
                    <SocialLogo img={git.src}/>
                </a>
                <a className="mr-1" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                    <SocialLogo img={whatsapp.src}/>
                </a>
                <div className=" text-white w-[200px] text-[15px] md:flex md:w-[300px] md:text-[40px] md:ml-5 justify-center items-center  font-semi rounded-md w-90 h-12">
                    11 93025-8999
                </div>
            </div>
            <div className="">
            <div className=" invisible md:visible md:ml-[100px] md:h-full md:w-full md:mt-14 ">
                    <Cube logo={logo.src} width="80px" height="80px" transform="40px"/>
            </div>
            </div>
        </div>    
    </div>
    )
}