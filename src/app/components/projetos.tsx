import { Cube } from "./cube";
import logo from '../assets/images/LogoDev.png';

type Props = {
    label: string;
    onClick: () => void;
    onTouchStart: () => void;
    
}
export const Projetos = ({label, onClick, onTouchStart}: Props) => {
   
    
    return (
        <div className="flex items-center mb-8">
                <div onClick={onClick} onTouchStart={onTouchStart} className="w-2 h-4 cursor-pointer">
                <Cube  logo={logo.src} width="32px" height="32px" transform="16px"/>
                </div>
                <div  className="text-white w-24 ml-12 text-[12px] md:w-36 md:text-[17px] ">{label}</div>   
        </div>
    )
}