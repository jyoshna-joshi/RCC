import React, { Component } from "react";
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";

import Card from 'react-bootstrap/Card';

function ViewDetails() {
    const { state } = useLocation();
    const { id } = state;

    const navigate = useNavigate();
    const URL_ListByStatus = "http://44.202.58.84:3000/content/list-by-status?status=Pending";
    //for dynamic fields
    const [data, setData] = useState([]);
    const [IsJpg, setIsJPG] = useState(false);


    //const [_id, setID] = useState();
    /**
     * Fetch pending list by status
     */
    useEffect(() => {
        const fetchData = async () => {
            var url = 'http://44.202.58.84:3000/content/' + id;
            const res = await fetch(url);
            const resdata = await res.json();
            console.log(resdata.creator);
            setData(resdata);
            try {
                const extension = resdata.format.split('.').pop();
                if (extension.toLowerCase() == "jpg") {
                    setIsJPG(true);
                } else {
                    setIsJPG(false);
                }
                console.log(IsJpg);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []
    );

    /**
     *Go to home page 
     */
    const handleClose = async () => {
        navigate("/home");
    }

    return (
        <><Card>
            <Row>
                <Col sm={3} />
                <Col sm={6} className='Template-text'>
                    {/* for Choosing file for approval*/}
                    <Form.Group className="Template-text" controlId="ImageViewforApproval" >
                        {/* for title*/}
                        <Form.Group className="mb-3" controlId="advertisementJournalTitle">
                            <Form.Label>Title </Form.Label>
                            <Form.Control required type="text" placeholder={data.title} readOnly />
                        </Form.Group>
                        {/* for subject*/}
                        <Form.Group className="mb-3" controlId="advertisementJournalSubject">
                            <Form.Label>Subject </Form.Label>
                            <Form.Control required type="text" placeholder={data.subject} readOnly />
                        </Form.Group>
                        {/* for publisher*/}
                        <Form.Group className="mb-3" controlId="advertisementJournalPublisher">
                            <Form.Label>Publisher </Form.Label>
                            <Form.Control required type="text" placeholder={data.publisher} readOnly />
                        </Form.Group>
                        <Form.Label>Pending Article</Form.Label>
                        {/* <Form.Control required type="file" onChange={handleChange} /> */}
                        <Form.Control required type="label" placeholder={data.format} as="textarea" rows="3" readOnly />
                        <h1>_</h1>
                        <div className="mb-3">
                            {IsJpg ? (<img
                                src={data.format}
                                alt="car"
                                width="100%"
                                height="600"
                                objectFit='contain' />) :
                                (<iframe width="100%" height="600" frameborder="0" src={`https://docs.google.com/gview?url=${data.format}&embedded=true`}></iframe>)}
                        </div>
                    </Form.Group>
                </Col>
                <Col sm={3} />
                <Row>
                    <Col className='Close-button'>
                        {/* for Approval */}
                        <Form.Group className="mb-3" controlId="formApproveJournal" >
                            <Button variant="secondary" type="submit" onClick={() => handleClose()} >
                                Close
                            </Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Row>

        </Card><Footer /></>
    );

}

export default ViewDetails