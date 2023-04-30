import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


class SalesBrochure extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form>
                {/* for title*/}
                <Form.Group className="mb-3" controlId="salesBrochureTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title name" />
                </Form.Group>
                {/* for subject*/}
                <Form.Group className="mb-3" controlId="salesBrochureSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Enter subject" />
                </Form.Group>
                {/* for publisher*/}
                <Form.Group className="mb-3" controlId="salesBrochurePublisher">
                    <Form.Label>Publisher</Form.Label>
                    <Form.Control type="text" placeholder="Enter organization name" />
                </Form.Group>
                {/* for identifier*/}
                <Form.Group className="mb-3" controlId="salesBrochureIdentifier">
                    <Form.Label>Identifier</Form.Label>
                    <Form.Control type="text" placeholder="Enter organization identifier" />
                </Form.Group>
                {/* for description*/}
                <Form.Group className="mb-3" controlId="salesBrochureDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter description" />
                </Form.Group>
                {/* for date*/}
                <Form.Group className="mb-3" controlId="salesBrochureYear">
                    <Form.Label>?Year</Form.Label>
                    <Form.Control type="text" placeholder="Enter year" />
                </Form.Group>
                {/* for uploading file*/}
                <Form.Group className="mb-3" controlId="salesBrochureUpload">
                    <Form.Label>Select file</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
            </Form>
        );
    }

}
export default SalesBrochure;