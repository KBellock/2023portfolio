import React from 'react';
import styles from './modal.module.css';

const Modal = ({ project, onClose }) => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
        <span className={styles.modalCloseButton} onClick={onClose}>
          Close &times;
        </span>
        <h2>{project.title}</h2>
        <p>{project.desc}</p>
        </div>
        {/* Display other project details */}
      </div>
    </div>
  );
};

export default Modal;
