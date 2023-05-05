import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import axios from "axios";
const AdvertisementJournal = () => {
    const UPLOAD_URL = "http://44.202.58.84:3000/save-template"
    const selectedType = "AdvertisementJournal"
    const [selectedTitle, setSelectedTitle] = useState("");
    const [selectedFile, setSelectedFile] = useState("");
    const [selectedPublisher, setSelectedPublisher] = useState("");
    const [selectedDate, setSelectDate] = useState("");
    const [selectedIdentifier, setSelectIdentifier] = useState("");
    const [selectedDescription, setSelectedDescription] = useState("");
    const [selectSubject, setSelectedSubject] = useState("");
    //set selected title
    const titleChangeHandler = (e) => {
        setSelectedTitle(e.target.value);
    };
    //set selected publisher name
    const publisherChangeHandler = (e) => {
        setSelectedPublisher(e.target.value);
    };
    //set selected subject
    const subjectChangeHandler = (e) => {
        setSelectedSubject(e.target.value);
    };
    //set selected identifier 
    const identifierChangeHandler = (e) => {
        setSelectIdentifier(e.target.value);
    };
    //set selected description
    const descriptionChangeHandler = (e) => {
        setSelectedDescription(e.target.value);
    };
    //set selected date
    const dateChangeHandler = (e) => {
        setSelectDate(e.target.value);
    };
    const SubmitForm = () => {
        const formdData = new FormData();
        formdData.append("type", selectedType);
        formdData.append("title", selectedTitle);
        formdData.append("publisher", selectedPublisher);
        formdData.append("subject", selectSubject);
        formdData.append("identifier", selectedIdentifier);
        formdData.append("date", selectedDate);
        formdData.append("description", selectedDescription);
        // formdData.append("file", selectedFile);
        // for (const pair of formdData.entries()) {
        //     alert(pair + ', ' + formdData);
        // }
        alert(UPLOAD_URL);
        axios
            .post(UPLOAD_URL, formdData)
            .then(function (response) {
                console.log(response);
                // alert("File Upload success");
            })
            .catch(function (error) {
                console.log(error);}

            // alert("File Upload Error")
            );
    };
    return (
        <Form>
            {/* for title*/}
            <Form.Group className="mb-3" controlId="advertisementJournalTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control required type="text"
                    placeholder="Enter title name"
                    value={selectedTitle}
                    onChange={titleChangeHandler} />
            </Form.Group>
            {/* for subject*/}
            <Form.Group className="mb-3" controlId="advertisementJournalSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control required type="text"
                    placeholder="Enter subject"
                    value={selectSubject}
                    onChange={subjectChangeHandler} />
            </Form.Group>
            {/* for publisher*/}
            <Form.Group className="mb-3" controlId="advertisementJournalPublisher">
                <Form.Label>Publisher</Form.Label>
                <Form.Control required type="text"
                    placeholder="Enter journal name"
                    value={selectedPublisher}
                    onChange={publisherChangeHandler} />
            </Form.Group>
            {/* for identifier*/}
            <Form.Group className="mb-3" controlId="advertisementJournalIdentifier">
                <Form.Label>Identifier</Form.Label>
                <Form.Control required type="text"
                    placeholder="Enter volume issue page list"
                    value={selectedIdentifier}
                    onChange={identifierChangeHandler} />
            </Form.Group>
            {/* for description*/}
            <Form.Group className="mb-3" controlId="advertisementJournalDescription"  >
                <Form.Label>Description</Form.Label>
                <Form.Control required type="text"
                    placeholder="Enter description" as="textarea" rows={3}

                    value={selectedDescription}
                    onChange={descriptionChangeHandler} />
            </Form.Group>
            {/* for date*/}
            <Form.Group className="mb-3" controlId="advertisementJournalDate">
                <Form.Label>Date</Form.Label>
                <Form.Control required type="date"
                    value={selectedDate}
                    onChange={dateChangeHandler} />
            </Form.Group>
            {/* for uploading file*/}
            {/* <Form.Group className="mb-3" controlId="advertisementJournalUpload">
                    <Form.Label>Select file</Form.Label>
                    <Form.Control required  type="file" />
                </Form.Group> */}
            <Form.Group className="mb-3" controlId="formSubmitForApproval" onClick={SubmitForm}>
                <Button variant="primary" type="submit">
                    Submit for approval
                </Button>
            </Form.Group>
        </Form >

    )
}

export default AdvertisementJournal;