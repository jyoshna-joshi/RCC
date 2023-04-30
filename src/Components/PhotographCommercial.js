import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


class PhotographCommercial extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form>
                {/* for title*/}
                <Form.Group className="mb-3" controlId="photographCommercialTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title name" />
                </Form.Group>
                {/* for subject*/}
                <Form.Group className="mb-3" controlId="photographCommercialSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Enter subject" />
                </Form.Group>
                {/* for publisher*/}
                <Form.Group className="mb-3" controlId="photographCommercialPublisher">
                    <Form.Label>Publisher</Form.Label>
                    <Form.Control type="text" placeholder="Enter publisher name or organisationName name" />
                </Form.Group>
                {/* for identifier*/}
                <Form.Group className="mb-3" controlId="photographCommercialIdentifier">
                    <Form.Label>Identifier</Form.Label>
                    <Form.Control type="text" placeholder="Enter publication identifier" />
                </Form.Group>
                {/* for description*/}
                <Form.Group className="mb-3" controlId="photographCommercialDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter description" as="textarea" rows={3}/>
                </Form.Group>
                {/* for date*/}
                <Form.Group className="mb-3" controlId="photographCommercialYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="text" placeholder="Enter year" />
                </Form.Group>
                {/* for creator*/}
                <Form.Group className="mb-3" controlId="photographCommercialCreator">
                    <Form.Label>Creator</Form.Label>
                    <Form.Control type="text" placeholder="Enter author name list  or organisation name  " />
                </Form.Group>
            </Form>);
    }

}
export default PhotographCommercial;