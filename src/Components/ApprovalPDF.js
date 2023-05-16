import React, { Component } from "react";
import { useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Document, Page, pdfjs } from 'react-pdf';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import * as pdfjsLib from "pdfjs-dist";
pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.550/pdf.worker.js";

function ApprovalPDF() {
    const fileType = ['application/pdf']
    const navigate = useNavigate();

    //for dynamic fields
    const { state } = useLocation();
    const { id, date, title } = state;

    //for dynamic fields
    const [data, setData] = useState([]);

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
        var resdatajson = JSON.stringify({ status: stat });
        console.log(resdatajson);
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ status: stat }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const resdata = await res;
        console.log(resdata);
    }
    const docs = [

        {
            uri: "http://rcc-project.s3.ap-southeast-2.amazonaws.com/PC_P6_Rover3500S_RoverCompany_1971.docx",
            fileType:'docx'
        },
        // Remote file
    ];

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
                <h1>_</h1>
                <DocViewer documents={docs} pluginRenderers={DocViewerRenderers}
                     style={{ width: 500, height: 500 }}
                    initialActiveDocument={docs[1]}
                />

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