type Props = {
    logo: string;
    label: string;
}

export const Skills = ({logo, label}: Props) => {
    return (
        <div className="flex flex-col justify-centers items-center mb-2 bg-white rounded-md cursor-pointer md:w-18 md:h-18 ">
            <img className="w-10 h-10 rounded-ful md:w-16 md:h-16" src={logo} alt="" />
            <div className="text-[10px] md:text-[15px]">{label}</div>
              
        </div>
    )
}