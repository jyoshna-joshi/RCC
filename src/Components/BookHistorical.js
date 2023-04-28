import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


class BookHistorical extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Form>
            {/* for title*/}
            <Form.Group className="mb-3" controlId="bookHistoricalTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title name" />
            </Form.Group>
            {/* for subject*/}
            <Form.Group className="mb-3" controlId="bookHistoricalSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter subject" />
            </Form.Group>
            {/* for publisher*/}
            <Form.Group className="mb-3" controlId="bookHistoricalPublisher">
                <Form.Label>Publisher</Form.Label>
                <Form.Control type="text" placeholder="Enter publisher name" />
            </Form.Group>

            {/* for description*/}
            <Form.Group className="mb-3" controlId="bookHistoricalDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter description" />
            </Form.Group>
            {/* for date*/}
            <Form.Group className="mb-3" controlId="bookHistoricalYear">
                <Form.Label>Year</Form.Label>
                <Form.Control type="text" placeholder="Enter year" />
            </Form.Group>
            {/* for creator*/}
            <Form.Group className="mb-3" controlId="bookHistoricalCreator">
                <Form.Label>Creator</Form.Label>
                <Form.Control type="text" placeholder="Enter author name list or organisation name  " />
            </Form.Group>
        </Form>
        );
    }

}
export default BookHistorical;