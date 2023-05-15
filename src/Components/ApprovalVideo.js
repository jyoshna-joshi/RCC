import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { clear } from '@testing-library/user-event/dist/clear';
import { FilterMatchMode, FilterOperator } from 'primereact/api';

import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';

import Card from 'react-bootstrap/Card';


function ApprovalVideo() {
    const navigate = useNavigate();
    const URL_ListByStatus = "http://44.202.58.84:3000/content/list-by-status?status=Pending";

    //for dynamic fields
    const [data, setData] = useState([]);
    const [id, setID] = useState();
    /**
     * Fetch pending list by status
     */
    useEffect(() => {
        const fetchData = async () => {
            var url = 'http://44.202.58.84:3000/content/645e4e75f97604e432a91688'

            const idTemp = "645e4e75f97604e432a91688";
            setID(idTemp);
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

    const handleSubmit = (e) => {
        // e.preventDefault()
        // if (pdfFile !== null) {
            // setViewPdf(pdfFile)
        // }
        // else {
            // setViewPdf(null)
        // }
    }
    const newplugin = defaultLayoutPlugin()
    return (

        <Card onSubmit={handleSubmit}>
            {/* for Choosing file for approval*/}
            <Form.Group className="Template-text" controlId="ImageViewforApproval" >
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

export default ApprovalVideo;