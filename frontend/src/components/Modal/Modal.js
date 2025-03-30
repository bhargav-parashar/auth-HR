import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ handleOutsideClick, handleModalClose, handleSubmit }) => {
  
  
  return (
    <div id="Outer-Modal" className={styles.modal} onClick={handleOutsideClick}>
      <div className={styles["modal-content"]}>
        <h3 >Submit Request</h3>
        <p>Are you sure you want to submit this request ?</p>
        <div className={styles["button-layout"]}>
          <button  onClick={handleModalClose}>Cancel</button>
          <button  onClick={handleSubmit} >Yes</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
