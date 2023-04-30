import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


class AdvertiseNewspaper extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form>
                {/* for title*/}
                <Form.Group className="mb-3" controlId="advertisementNewspaperTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control required  type="text" placeholder="Enter title name" />
                </Form.Group>
                {/* for subject*/}
                <Form.Group className="mb-3" controlId="advertisementNewspaperSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control required  type="text" placeholder="Enter subject" />
                </Form.Group>
                {/* for publisher*/}
                <Form.Group className="mb-3" controlId="advertisementNewspaperPublisher">
                    <Form.Label>Publisher</Form.Label>
                    <Form.Control required  type="text" placeholder="Enter newspaper name" />
                </Form.Group>
                {/* for identifier*/}
                <Form.Group className="mb-3" controlId="advertisementNewspaperIdentifier">
                    <Form.Label>Identifier</Form.Label>
                    <Form.Control required  type="text" placeholder="Enter page list" />
                </Form.Group>
                {/* for description*/}
                <Form.Group className="mb-3" controlId="advertisementNewspaperDescription" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control required  type="text" placeholder="Enter description" as="textarea" rows={3}/>
                </Form.Group>
                {/* for date*/}
                <Form.Group className="mb-3" controlId="advertisementNewspaperDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control required  type="date" placeholder="Enter date" />
                </Form.Group>
                {/* for uploading file*/}
                <Form.Group className="mb-3" controlId="advertisementNewspaperUpload">
                    <Form.Label>Select file</Form.Label>
                    <Form.Control required  type="file" />
                </Form.Group>
            </Form>
        );
    }

}
export default AdvertiseNewspaper;