import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';


class ApprovalImage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const submitTemplate = () => {
            return (
                alert("API Call")
            );
        };
        return (

            <Form>
                {/* for title*/}
                <Form.Group className="mb-3" controlId="advertisementJournalTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control required type="text" placeholder="Title name" />
                </Form.Group>
                {/* for subject*/}
                <Form.Group className="mb-3" controlId="advertisementJournalSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control required type="text" placeholder="Subject" />
                </Form.Group>
                {/* for publisher*/}
                <Form.Group className="mb-3" controlId="advertisementJournalPublisher">
                    <Form.Label>Publisher</Form.Label>
                    <Form.Control required type="text" placeholder="Journal name" />
                </Form.Group>
                {/* for Choosing file for approval*/}
                <Form.Group className="Template-text" controlId="JournalViewforApproval">
                    <Form.Label>Pending Article</Form.Label>
                    <Form.Control required type="file" />
                </Form.Group>
                <Row>
                    <Col sm={3} className='Template-text'>
                        {/* for Approval */}
                        <Form.Group className="mb-3" controlId="formApproveJournal" >
                            <Button variant="primary" type="submit">
                                Approve
                            </Button>
                        </Form.Group>
                    </Col>
                    <Col sm={7} />
                    <Col sm={2} className='Template-text'>
                        {/* for Decline */}
                        <Form.Group className="mb-3" controlId="formDeclineJournal" >
                            <Button variant="primary" type="submit">
                                Reject
                            </Button>
                        </Form.Group>
                    </Col>
                    <Col sm={3} />
                </Row>

            </Form >

        );
    }

}
export default ApprovalImage;