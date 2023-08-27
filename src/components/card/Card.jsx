"use client"
import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './card.module.css';
import Image from 'next/image';

const Card = ({ application }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div className={styles.card} onClick={handleCardClick}>
        <img src={application.img} alt={application.title} className={styles.cardImg}/>
        <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{application.title}</h3>
        <p>{application.desc}</p>
        <p>Tap/Click Card to Learn More</p>
        </div>
      {/* Add other project details */}
    </div>
    {isModalOpen && <Modal project={application} onClose={closeModal} />}
    </>
  );
};

export default Card;

