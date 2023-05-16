import React, { useState, useEffect } from 'react';

import styles from './Luxury.module.css'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Luxury = () => {
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
            <span>Read Articles shared by others</span>
          </p>
        </div>

      </div>
      <div className={styles.container}>
        <div className={styles.card}>
        
        {data.map(item => (
        <div key={item.id}>
   
             {item.format.includes('.pdf') ? ( <React.Fragment>
            <div style={{ display: 'flex', flexDirection: 'row' }}> 
       
             <div className={styles.content} style={{ display: 'flex' }}></div>
             <table style={{ width: '1110px'}}>
             <thead>
             <tr style= {{borderCollapse: 'collapse', border: '4px solid', borderColor: '#07a9f4'}}>
             <th style={{ width: '200px'}}><img src='https://w7.pngwing.com/pngs/491/951/png-transparent-red-adobe-pdf-logo-pdf-computer-icons-adobe-acrobat-encapsulated-postscript-pdf-miscellaneous-angle-text.png' style={{ width: '80px', height: '100px', borderRadius: '0%' }}/></th>
             <th style={{textAlign: 'left' , paddingTop:'2rem', width:'10px' , height : '10px'}}></th><h5 style={{textAlign: 'left' , paddingTop:'2rem', maxWidth:'1500px', width:'100%'}}>{item.title}</h5>
             <th style={{ width: '100px'}}><a href ={item.format} style={{ textDecoration: 'none'}}><h6 style={{ paddingLeft: '0rem' ,  textAlign: 'Right', width: '50px', textDecoration: 'none'}}>Read More</h6></a></th>
             </tr>
             </thead>
             </table>
             </div>
             </React.Fragment>):(<React.Fragment></React.Fragment>)}
             
         </div>
        
       
        
        ))}
 
        </div>
        </div>
    </div>
  )
};

export default Luxury

