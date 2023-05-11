import React, { useState, useEffect } from 'react';

import styles from './Luxury.module.css'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function ShowContent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://44.202.58.84:3000/content/list-by-status?status=Approved')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className={styles.luxury}>
        <div className={styles.heading}>
        <h1>Articles</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Read what others are sharing</span>
          </p>
        </div>

      </div>

      <div className={styles.container}>
        <div className={styles.card}>
        
        {data.map(item => (
        <div key={item.id}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
        <img src="https://w7.pngwing.com/pngs/491/951/png-transparent-red-adobe-pdf-logo-pdf-computer-icons-adobe-acrobat-encapsulated-postscript-pdf-miscellaneous-angle-text.png" style={{ width: '10%', height: 'auto', borderRadius: '100%' }}/>      
            <div className={styles.content}>
                <h3>{item.title}</h3>
                <a href={item.format}><h6 style={{ paddingTop: '0.5rem'}}>...Read More</h6></a>
                
            </div>
            </div>
        </div>))}
 
        </div>
        </div>
    </div>
  )
};

export default ShowContent;