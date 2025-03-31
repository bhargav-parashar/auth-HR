import { useState } from "react";

const useModal = () =>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleModalOpen = () => {
        setIsModalOpen(true);
      };
      const handleModalClose = () => {
        setIsModalOpen(false);
      };
      const handleOutsideClick = (e) => {
        if (e.target.id === "Outer-Modal") {
          setIsModalOpen(false);
        }
      };

      return {handleModalOpen, handleModalClose, handleOutsideClick, isModalOpen };

}

export default useModal;