import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


class ArticleJournal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form>
            {/* for title*/}
            <Form.Group className="mb-3" controlId="articleJournalTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title name" />
            </Form.Group>
            {/* for subject*/}
            <Form.Group className="mb-3" controlId="articleJournalSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter subject" />
            </Form.Group>
            {/* for publisher*/}
            <Form.Group className="mb-3" controlId="articleJournalPublisher">
                <Form.Label>Publisher</Form.Label>
                <Form.Control type="text" placeholder="Enter journal name" />
            </Form.Group>
            {/* for identifier*/}
            <Form.Group className="mb-3" controlId="articleJournalIdentifier">
                <Form.Label>Identifier</Form.Label>
                <Form.Control type="text" placeholder="Enter volume issue page" />
            </Form.Group>
            {/* for description*/}
            <Form.Group className="mb-3" controlId="articleJournalDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter description" />
            </Form.Group>
            {/* for date*/}
            <Form.Group className="mb-3" controlId="articleJournalDate">
                <Form.Label>Date</Form.Label>
                <Form.Control type="text" placeholder="Enter date" />
            </Form.Group>
            {/* for creator*/}
            <Form.Group className="mb-3" controlId="articleJournalCreator">
                <Form.Label>Creator</Form.Label>
                <Form.Control type="text" placeholder="Enter author name list " />
            </Form.Group>
        </Form>
        );
    }

}
export default ArticleJournal;