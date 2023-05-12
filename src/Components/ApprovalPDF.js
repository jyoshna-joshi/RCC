import React, { Component } from "react";
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
import { ListGroup, ListGroupItem, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { clear } from '@testing-library/user-event/dist/clear';

function ApprovalPDF() {
    const [pdfFile, setPDFFile] = useState(null)
    const [viewPdf, setViewPdf] = useState(null)
    const fileType = ['application/pdf']
    const navigate = useNavigate();
    const URL_GetTemplateTypes = "http://44.202.58.84:3000/template/types";
    const URL_FIELD_TYPE = "http://44.202.58.84:3000/template/fields?type=";
    const URL_UpdateContentStatus = "http://44.202.58.84:3000/content/update-status/:id";
    const URL_ListByStatus = "http://44.202.58.84:3000/content/list-by-status?status=Pending";
    //for dynamic fields
    const [fields, setFields] = useState([]);
    const [content, setContent] = useState([]);
    //for dynamic templatetypes
    const [types, setTypes] = useState([]);
    //for selected template type
    const [selectedTemplateType, setSelectedTemplateType] = useState("Select Template Type");

    /**
        * api integration for template type
        */
    useEffect(() => {
        axios.get(URL_GetTemplateTypes)
            .then(response => {
                setTypes(response.data);
                fetchUserData(response.data[0]);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    /**
     * fetch forms data from api
     * @param {type of template} templateType 
     */
    function fetchUserData(templateType) {
        setFields([]);

        fetch(URL_FIELD_TYPE + templateType)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setFields(data.fields)
            })
        setSelectedTemplateType(templateType);
    }

    /**
     * param {event} event 
     * param {position} index 
     */

    const handleInputChange = (event, index) => {
        fields[index]["value"] = event.target.value;
        setFields(fields);
    };

    const handleChange = (e) => {
        let selectedFile = e.target.files[0]
        if (selectedFile) {

            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader()
                reader.readAsDataURL(selectedFile)
                reader.onload = (e) => {
                    setPDFFile(e.target.result)
                }
            }
            else {
                setPDFFile(null)
            }
        }
        else {
            console.log("Please select")
        }
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        if (pdfFile !== null) {
            setViewPdf(pdfFile)
        }
        else {
            setViewPdf(null)
        }
    }
    const newplugin = defaultLayoutPlugin()
    return (

        <Form onSubmit={handleSubmit}>
            {/* for Choosing file for approval*/}
            <Form.Group className="Template-text" controlId="JournalViewforApproval" >
                {/* for title*/}
                <Form.Group className="mb-3" controlId="advertisementJournalTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Label >  </Form.Label>
                    {
                        //<Form.Control required type="text" placeholder="Title name" />
                    }
                </Form.Group>
                {/* for subject*/}
                <Form.Group className="mb-3" controlId="advertisementJournalSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Label >  </Form.Label>
                    {
                        //<Form.Control required type="text" placeholder="Subject" />
                    }
                </Form.Group>
                {/* for publisher*/}
                <Form.Group className="mb-3" controlId="advertisementJournalPublisher">
                    <Form.Label>Publisher</Form.Label>
                    <Form.Label >  </Form.Label>
                    {
                        //<Form.Control required type="text" placeholder="Journal name" />
                    }
                </Form.Group>
                <Form.Label>Pending Article</Form.Label>
                <Form.Control required type="file" onChange={handleChange} />
                <Button variant="primary" type="submit" className="btn btn-success" >
                    View Article
                </Button>
                <h1>_</h1>

                <div className="pdf-container">
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                        {viewPdf && <>
                            <Viewer fileUrl={viewPdf} plugins={[newplugin]}></Viewer>
                        </>}
                        {!viewPdf && <>No PDF to View</>}
                    </Worker>
                </div>
            </Form.Group>

            <Row>

                <Col sm={3} className='Template-text'>

                    {/* for Approval */}
                    <Form.Group className="mb-3" controlId="formApproveJournal" >


                        <Button variant="primary" type="submit">
                            Approve
                        </Button>
                    </Form.Group>
                </Col>

                <Col sm={7} />
                <Col sm={2} className='Template-text'>
                    {/* for Decline */}
                    <Form.Group className="mb-3" controlId="formDeclineJournal" >


                        <Button variant="primary" type="submit">
                            Reject
                        </Button>
                    </Form.Group>
                </Col>
                <Col sm={3} />
            </Row>
        </Form >

    );
}

//}
//}
export default ApprovalPDF;