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
import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/TextLayer.css";
import { height } from 'dom7';

function UncontrolledExample() {
    const [images, setImages] = useState();
    const [documents, setDocs] = useState();
    const navigate = useNavigate();
    const [pageNumber, setPageNumber] = useState(1);

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
        pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
            <br />
            <div className={styles.heading}>
                <h6 className='Text-display'>LATEST DOCUMENTS</h6>
            </div>
            <br />
            <CCard className="mb-4">
                <CCardBody>
                    <CRow>
                        {documents ?
                            documents.map(item => (
                                <CCol lg={2}>
                                    <CCard style={{ width: '24rem' }}>
                                        <CCardBody class="box" onClick={() => navigate("/viewDetails", { state: { id: item._id } })}>
                                            <Document file={item.format}>
                                                <Page pageNumber={pageNumber} />
                                            </Document>
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