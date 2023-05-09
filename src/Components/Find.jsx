import React from 'react';
import styles from './Find.module.css';
import Card from './Card';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


const Find = () => {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>Explore</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Discover what others are sharing</span>
          </p>
        </div>
      </div>
      <div className={styles.slider_container}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          breakpoints={{
            // when window width is >= 340px
            340: {
              width: 200,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 4,
            },
            // when window width is >= 1040px
            1040: {
              width: 1040,
              slidesPerView: 5,
            },
          }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <Card
              image='http://rovercarclubaust.asn.au/wp-content/uploads/2023/04/Rover-1-1.jpg'
              make='2005 Rover 75 CDTi Diesel'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='http://rovercarclubaust.asn.au/wp-content/uploads/2023/04/99CC64B4-EE4C-43AF-B948-DF2614CC93C9.jpeg'
              make='2002 Rover 75'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='http://rovercarclubaust.asn.au/wp-content/uploads/2023/03/IMG_20230301_094031549-1.jpg'
              make='975 Rover P6B 3500'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='http://rovercarclubaust.asn.au/wp-content/uploads/2023/02/PXL_20220717_015253859-1.jpg'
              make='Rover P4 90 1959'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='http://rovercarclubaust.asn.au/wp-content/uploads/2022/08/IMG_0812.jpg'
              make='1969 Rover P6 2000 TC'
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              image='https://i0.wp.com/roverp6australia.net/wp-content/uploads/2018/02/DSC_0770-1976-Rover-3500-Canberra-4-12-2011.jpg?ssl=1'
              make='Rover 3500 P6B Series 2'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1588636142475-a62d56692870?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amVlcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
              make='Jeep'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1604108415419-6d4bd73a1c2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
              make='Ford'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVzbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
              make='Tesla'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9yc2NoZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
              make='Porsche'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Find;
