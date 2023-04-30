import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


class AdvertisementJournal extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Form>
                {/* for title*/}
                <Form.Group className="mb-3" controlId="advertisementJournalTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title name" />
                </Form.Group>
                {/* for subject*/}
                <Form.Group className="mb-3" controlId="advertisementJournalSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Enter subject" />
                </Form.Group>
                {/* for publisher*/}
                <Form.Group className="mb-3" controlId="advertisementJournalPublisher">
                    <Form.Label>Publisher</Form.Label>
                    <Form.Control type="text" placeholder="Enter journal name" />
                </Form.Group>
                {/* for identifier*/}
                <Form.Group className="mb-3" controlId="advertisementJournalIdentifier">
                    <Form.Label>Identifier</Form.Label>
                    <Form.Control type="text" placeholder="Enter volumeIssuePageList" />
                </Form.Group>
                {/* for description*/}
                <Form.Group className="mb-3" controlId="advertisementJournalDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter description" />
                </Form.Group>
                {/* for date*/}
                <Form.Group className="mb-3" controlId="advertisementJournalDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="text" placeholder="Enter date" />
                </Form.Group>
                {/* for uploading file*/}
                <Form.Group className="mb-3" controlId="advertisementJournalUpload">
                    <Form.Label>Select file</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                {/* for submit */}
                {/* <Form.Group className="mb-3" controlId="formSubmitForApproval" >
                                    <Button variant="primary" type="submit" onClick={submitTemplate}>
                                    Submit for approval
                                    </Button>
                                </Form.Group> */}
            </Form>
        );
    }

}
export default AdvertisementJournal;