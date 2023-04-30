import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


class BookTechnical extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Form>
            {/* for title*/}
            <Form.Group className="mb-3" controlId="bookTechnicalTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title name" />
            </Form.Group>
            {/* for subject*/}
            <Form.Group className="mb-3" controlId="bookTechnicalSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter subject" />
            </Form.Group>
            {/* for publisher*/}
            <Form.Group className="mb-3" controlId="bookTechnicalPublisher">
                <Form.Label>Publisher</Form.Label>
                <Form.Control type="text" placeholder="Enter publisher name or organisationName name" />
            </Form.Group>
            {/* for identifier*/}
            <Form.Group className="mb-3" controlId="bookTechnicalIdentifier">
                <Form.Label>Identifier</Form.Label>
                <Form.Control type="text" placeholder="Enter publication identifier" />
            </Form.Group>
            {/* for description*/}
            <Form.Group className="mb-3" controlId="bookTechnicalDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter description" as="textarea" rows={3} />
            </Form.Group>
            {/* for date*/}
            <Form.Group className="mb-3" controlId="bookTechnicalYear">
                <Form.Label>Year</Form.Label>
                <Form.Control type="text" placeholder="Enter year" />
            </Form.Group>
            {/* for creator*/}
            <Form.Group className="mb-3" controlId="bookTechnicalCreator">
                <Form.Label>Creator</Form.Label>
                <Form.Control type="text" placeholder="Enter author name list  or organisation name  " />
            </Form.Group>
            {/* for uploading file*/}
            <Form.Group className="mb-3" controlId="bookTechnicalUpload">
                <Form.Label>Select file</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
        </Form>
        );
    }

}
export default BookTechnical;