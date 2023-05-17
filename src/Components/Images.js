import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Luxury.module.css';
import { useNavigate } from "react-router-dom";
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardGroup,
    CCardHeader,
    CCardImage,
    CCardLink,
    CCardSubtitle,
    CCardText,
    CCardTitle,
    CListGroup,
    CListGroupItem,
    CNav,
    CNavItem,
    CNavLink,
    CCol,
    CRow,
} from '@coreui/react'

function UncontrolledExample() {
    const [images, setImages] = useState();
    const [documents, setDocs] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = () => {
            const URL_GET_CONTENT = "http://44.202.58.84:3000/content/home";

            var imgs = [];
            var docs = [];

            axios(URL_GET_CONTENT)
                .then(response => {
                    return (response.data).map((item) => {
                        if ((item.formatType).includes('image')) {
                            imgs.push(item);
                        }
                        else {
                            docs.push(item);
                        }
                        return item;
                    });
                })
                .then(data => {
                    setImages(imgs);
                    setDocs(docs);
                })
                .catch(error => {
                    console.error(error);
                });
        }

        fetchData();
    }, []);

    return (
        <>
            <h6 className='Text-display'>LATEST IMAGES</h6>
            <br />
            <Carousel class="carousel">
                {images ?
                    images.map(item => (
                        <Carousel.Item>
                            <img
                                className="d-block w-100 cimg box"
                                src={item.format}
                                onClick={() => navigate("/viewDetails", { state: { id: item._id } })}
                            />
                            <Carousel.Caption>
                                <h4>{item.title}</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))

                    : <div />}
            </Carousel>
            <br />
            <br/>
            <div className={styles.heading}>
            <h6 className='Text-display'>LATEST DOCUMENTS</h6>
            </div>
            <br/>
            <CCard className="mb-4">
          <CCardBody>
              <CRow>
              {documents ?
                    documents.map(item => (
                        <CCol lg={2}>
                            <CCard style={{ width: '18rem' }}>
                                <CCardImage class="box" orientation="top" src="https://media.istockphoto.com/id/1156672386/vector/pdf-vector-icon-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=bTjfw6GUzGTXegf2YdaO09t-BUMmnpnk7q0cWpY8T7A=" onClick={() => {navigate("/viewDetails", { state: { id: item._id } }); window.location.reload();}}/>
                                <CCardBody>
                                    <CCardText>{item.title}</CCardText>
                                </CCardBody>
                            </CCard>
                        </CCol>
                    ))
                    : <div />}
              </CRow>
          </CCardBody>
        </CCard>
        </>

    );
}

export default UncontrolledExample;