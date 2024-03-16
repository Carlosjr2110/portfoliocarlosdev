
import { Projetos } from "./projetos"
import { useState } from "react"
import { Modal } from "./modal"
import { projectList } from "@/data/projectList";


export const Portfolio = () => {

    const [showModal, setShowModal] = useState(false);
    const [imageOfModal, setImageOfModal] = useState([''])
    

const openModal = (id: number) => {
    const image = projectList.find (item => item.id === id);
    if (image) {
        setImageOfModal(image.fotos);
        setShowModal(true);
    }}

    const closeModal = () => {
        setShowModal(false)
    };
  
    return (
        <div className="">
            <div className="font-bold flex justify-center mt-[-25px] mb-2 md:mt-[-30px] italic md:mb-4 md:text-3xl ">Projetos Frontend</div>
            <div className="grid grid-flow-col grid-rows-8 p-5 bg-[#003a9b] rounded-md md:p-10 md:grid-rows-3 md:gap-x-20 md:gap-y-14 ">
              
               {projectList.map(item => (
               <Projetos key={item.id} onClick={()=> {openModal(item.id)}} onTouchStart={()=>{openModal(item.id)}} label={item.name}/>
               ))}
               
            </div>
            {showModal  &&
            <Modal
            fotos= {imageOfModal}
            closeModal={closeModal}/>
            }
        </div>
    )
};

