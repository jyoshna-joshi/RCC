import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


class SalesRecord extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form>
                {/* for title*/}
                <Form.Group className="mb-3" controlId="salesRecordTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title name" />
                </Form.Group>
                {/* for subject*/}
                <Form.Group className="mb-3" controlId="salesRecordSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Enter subject" />
                </Form.Group>
                {/* for publisher*/}
                <Form.Group className="mb-3" controlId="salesRecordPublisher">
                    <Form.Label>Publisher</Form.Label>
                    <Form.Control type="text" placeholder="Enter organization name" />
                </Form.Group>
                {/* for description*/}
                <Form.Group className="mb-3" controlId="salesRecordDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter description" />
                </Form.Group>
                {/* for date*/}
                <Form.Group className="mb-3" controlId="salesRecordYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="text" placeholder="Enter year" />
                </Form.Group>
                {/* for uploading file*/}
                <Form.Group className="mb-3" controlId="salesRecordUpload">
                    <Form.Label>Select file</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
            </Form>
        );
    }

}
export default SalesRecord;