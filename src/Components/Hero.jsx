import React from 'react';
import styles from './Hero.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <form>
        <div className={styles.text}>
          <label>What are you looking for?</label>
          <input
            className={styles.text_input}
            type='text'
            placeholder='Search by title'
          />
        </div>
        
        <div className={styles.search_btn}>
          <button className={styles.btn}>Search for cars</button>
          <AiOutlineSearch size={25} className={styles.icon} />
        </div>
      </form>
    </div>
  );
};

export default Hero;
