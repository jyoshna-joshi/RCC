import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


class PhotographPersonal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form>
                {/* for title*/}
                <Form.Group className="mb-3" controlId="photographPersonalTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control required  type="text" placeholder="Enter title name" />
                </Form.Group>
                {/* for subject*/}
                <Form.Group className="mb-3" controlId="photographPersonalSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control required  type="text" placeholder="Enter subject" />
                </Form.Group>
                {/* for publisher*/}
                <Form.Group className="mb-3" controlId="photographPersonalPublisher">
                    <Form.Label>Publisher</Form.Label>
                    <Form.Control required  type="text" placeholder="Enter organization or collection name" />
                </Form.Group>
                {/* for identifier*/}
                <Form.Group className="mb-3" controlId="photographPersonalIdentifier">
                    <Form.Label>Identifier</Form.Label>
                    <Form.Control required  type="text" placeholder="Enter collection or publication identifier" />
                </Form.Group>
                {/* for description*/}
                <Form.Group className="mb-3" controlId="photographPersonalDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control required  type="text" placeholder="Enter description" as="textarea" rows={3}/>
                </Form.Group>
                {/* for date*/}
                <Form.Group className="mb-3" controlId="photographPersonalYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control required  type="text" placeholder="Enter year" />
                </Form.Group>
                {/* for creator*/}
                <Form.Group className="mb-3" controlId="photographPersonalCreator">
                    <Form.Label>Creator</Form.Label>
                    <Form.Control required  type="text" placeholder="Enter photographer or organization name " />
                </Form.Group>
                {/* for uploading file*/}
                <Form.Group className="mb-3" controlId="photographPersonalUpload">
                    <Form.Label>Select file</Form.Label>
                    <Form.Control required  type="file" />
                </Form.Group>
            </Form>
        );
    }

}
export default PhotographPersonal;