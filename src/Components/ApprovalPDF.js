import React, { Component } from "react";
import { useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { useState, useEffect } from "react";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { clear } from '@testing-library/user-event/dist/clear';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Tag } from 'primereact/tag';
import Card from 'react-bootstrap/Card';
import { Document, Page, pdfjs } from 'react-pdf';


function ApprovalPDF() {
    const [pdfFile, setPDFFile] = useState(null)
    const [viewPdf, setViewPdf] = useState(null)
    const fileType = ['application/pdf']
    const navigate = useNavigate();
    const URL_UpdateContentStatus = "http://44.202.58.84:3000/content/update-status/6455fdcec77562dfb4e62808?status=Rejected";
    const URL_ListByStatus = "http://44.202.58.84:3000/content/list-by-status?status=Pending";
    pdfjs.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.7.570/pdf_viewer.js.map";
    //for dynamic fields
    const { state } = useLocation();
    const { id, date, title } = state;    
 
    //for dynamic fields
    const [data, setData] = useState([]);
    const [pages, setPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        console.log("object:", numPages, pages);
        setPages(numPages);
        setPageNumber(1);
    }
    useEffect(() => {
        const fetchData = async () => {
            var url = 'http://44.202.58.84:3000/content/' + id;
                     
            const res = await fetch(url);
            const resdata = await res.json();
            console.log(resdata.creator);
            setData(resdata);
        }
        fetchData();
    }, []
    );
    const handleApprove = async (stat) => {
        var url = 'http://44.202.58.84:3000/content/update-status/' + id;
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ status: stat })
        })
        const resdata = await res;
        console.log(resdata);
    }

    /**
     * Fetch pending list by status
     */
    // useEffect(() => {
        // const fetchData = async () => {
            // var url = 'http://44.202.58.84:3000/content/645e4ed6f97604e432a9168e'

            // const idTemp = "645e4ed6f97604e432a9168e";
            // setID(idTemp);
            // const res = await fetch(url);
            // const resdata = await res.json();
            // console.log(resdata.creator);
            // setData(resdata);
        // }
        // fetchData();
    // }, []
    // );

    // const handleApprove = async (stat) => {
        // var url = 'http://44.202.58.84:3000/content/update-status/' + id;
        // const res = await fetch(url, {
            // method: 'POST',
            // body: JSON.stringify({ status: stat })
        // })
        // const resdata = await res;
        // console.log(resdata);
    // }

    // const handleSubmit = (e) => {
    // e.preventDefault()
    // let reader = new FileReader()        
    // reader.readAsDataURL(data.format)
    // reader.onload = (e) => {
    // setPDFFile(data.format)
    // }                                       
    //    
    // if (pdfFile !== null) {
    // setViewPdf(pdfFile)
    // }
    // else {
    // setViewPdf(null)
    // console.log("No Pending file")
    // }
    // }

    const newplugin = defaultLayoutPlugin()

    return (

        // <Card onSubmit={handleSubmit}>
        <Card >
            {/* for Choosing file for approval*/}
            <Form.Group className="Template-text" controlId="JournalViewforApproval" >
                {/* for title*/}
                <Form.Group className="mb-3" controlId="advertisementJournalTitle">
                    <Form.Label>Title: </Form.Label>
                    <Form.Control required type="text" placeholder={data.title} readOnly />


                </Form.Group>
                {/* for subject*/}
                <Form.Group className="mb-3" controlId="advertisementJournalSubject">
                    <Form.Label>Subject: </Form.Label>
                    <Form.Control required type="text" placeholder={data.subject} readOnly />

                </Form.Group>
                {/* for publisher*/}
                <Form.Group className="mb-3" controlId="advertisementJournalPublisher">
                    <Form.Label>Publisher: </Form.Label>
                    <Form.Control required type="text" placeholder={data.publisher} readOnly />
                </Form.Group>
                <Form.Label>Pending Article</Form.Label>
                {/* <Form.Control required type="file" onChange={handleChange} /> */}
                <Form.Control required type="label" placeholder={data.format} readOnly />

                {/* <Button variant="primary" type="submit" className="btn btn-success" > */}
                {/* View Article */}
                {/* </Button> */}
                <h1>_</h1>

                {/* <div className="pdf-container"> */}
                {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"> */}
                {/* {viewPdf && <> */}
                {/* <Viewer fileUrl={data.format} plugins={[newplugin]}></Viewer> */}
                {/* </>} */}
                {/* {!viewPdf && <>No PDF to View</>} */}
                {/* </Worker> */}
                {/* </div> */}
                <div className="property-overview-container property-flex-half">
                    <div className="description-overview">
                        <Document
                            
                            file={data.format}

                            // link={link}
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadError={(error) => console.log("Inside Error", error)}
                        >
                            <Page pageNumber={pageNumber} style={{ display: "none" }} />
                        </Document>
                    </div>
                </div>
            </Form.Group>

            <Row>

                <Col sm={3} className='Template-text'>

                    {/* for Approval */}
                    <Form.Group className="mb-3" controlId="formApproveJournal" >


                        <Button variant="primary" type="submit" onClick={() => handleApprove('Approved')}>

                            Approve
                        </Button>
                    </Form.Group>
                </Col>

                <Col sm={7} />
                <Col sm={2} className='Template-text'>
                    {/* for Decline */}
                    <Form.Group className="mb-3" controlId="formDeclineJournal" >


                        <Button variant="primary" type="submit" onClick={() => handleApprove('Rejected')}>

                            Reject
                        </Button>
                    </Form.Group>
                </Col>
                <Col sm={3} />
            </Row>
        </Card >


    );
}

//}
//}
export default ApprovalPDF;