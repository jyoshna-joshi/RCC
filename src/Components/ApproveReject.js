import React, { Component } from "react";
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function ApproveReject() {
    const { state } = useLocation();
    const { id } = state;
    const navigate = useNavigate();
    const URL_ListByStatus = "http://44.202.58.84:3000/content/list-by-status?status=Pending";
    //for dynamic fields
    const [data, setData] = useState([]);
    const [IsJpg, setIsJPG] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [status, setStatus] = useState();
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


    const handleApprove = async (stat) => {
        var url = 'http://44.202.58.84:3000/content/update-status/' + id;
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ status: stat }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        setStatus(stat);
        setShow(true);
    }

    return (
        <Card  >
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
                        {/* for description*/}
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description </Form.Label>
                            <Form.Control required type="text" placeholder={data.description} as="textarea" rows="3" readOnly />
                        </Form.Group>
                        <Form.Label>Pending Article</Form.Label>
                        {/* <Form.Control required type="file" onChange={handleChange} /> */}
                        <Form.Control required type="label" placeholder={data.format} as="textarea" rows="3" readOnly />
                        {/* <Button variant="primary" type="submit" className="btn btn-success" > */}
                        {/* View Article */}
                        {/* </Button> */}
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
                    <Row>

                        <Col sm={11} className='Template-text'>
                            {/* for Approval */}
                            <Form.Group className="mb-3" controlId="formApproveJournal" >
                                <Button variant="secondary" type="submit" onClick={() => handleApprove('Approved') } >
                                    Approve
                                </Button>

                            </Form.Group>

                        </Col>
                        <Col sm={1} className='Template-text'>
                            {/* for Decline */}
                            <Form.Group className="mb-3" controlId="formDeclineJournal" >
                                <Button variant="secondary" type="submit" onClick={() => handleApprove('Rejected')}>
                                    Reject
                                </Button>

                            </Form.Group>
                        </Col>
                        <Modal show={show} onHide={handleClose} animation={false} >
                            <Modal.Header >
                                <Modal.Title >Review</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Content  {status} Successfully!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={()=> navigate("/admin/content/pending")} >
                                    OK
                                </Button>
                                
                            </Modal.Footer>
                        </Modal>

                    </Row>

                </Col>

                <Col sm={3} />
            </Row>

        </Card >
    );

}

export default ApproveReject