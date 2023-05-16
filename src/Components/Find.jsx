import React, { useState, useEffect } from 'react';

import styles from './Luxury.module.css'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


const Find = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch('http://44.202.58.84:3000/content/list-by-status?status=Approved')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    return (
      <div className={styles.luxury}>
        <div className={styles.heading}>
        <h1>Documents</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Discover Documents shared by others</span>
          </p>
        </div>

      </div>
      <div className={styles.container}>
        <div className={styles.card}>
        
        {data.map(item => (
        <div key={item.id}>
   
             {item.format.includes('.docx') ? ( <React.Fragment>
            <div style={{ display: 'flex', flexDirection: 'row' }}> 
       
             <div className={styles.content} style={{ display: 'flex' }}></div>
             <table style={{ width: '1110px'}}>
             <thead>
             <tr style= {{borderCollapse: 'collapse', border: '4px solid', borderColor: '#07a9f4'}}>
             <th style={{ width: '200px'}}><img src='https://cdn-icons-png.flaticon.com/512/29/29593.png?w=826&t=st=1684247315~exp=1684247915~hmac=32f57456764241253787e93ccc6babf3b73f258b5c1a5818e9c9a0fedf15a562' style={{ width: '80px', height: '100px', borderRadius: '0%' }}/></th>
             <th style={{textAlign: 'left' , paddingTop:'2rem', width:'10px' , height : '10px'}}></th><h5 style={{textAlign: 'left' , paddingTop:'2rem', maxWidth:'1500px', width:'100%'}}>{item.title}</h5>
             <th style={{ width: '100px'}}><a href ={item.format} style={{ textDecoration: 'none'}}><h6 style={{ paddingLeft: '0rem' ,  textAlign: 'Right', width: '50px', textDecoration: 'none'}}>Download</h6></a></th>
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

export default Find;
