
type Props = {
    img: string;
}

export const SocialLogo = ({img}: Props) => {
    return (
        <div className="flex w-8 h-8 justify-center items-center bg-white rounded-md cursor-pointer md:w-12 md:h-12 ">
            <img className=" rounded-full w-6 h-6 md:w-10 md:h-10" src={img} alt="" />
              
        </div>
    )
}