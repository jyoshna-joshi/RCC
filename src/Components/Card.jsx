import React from 'react';
import styles from './Find.module.css';

const Card = ({ image, make, discription }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt='/' />
      <p>{make}</p>
      <p>{discription}</p>
    </div>
  );
};

export default Card;
