import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class AdminApproval extends Component {
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
            <Row>
                <Form>
                    <h4 className='AdminApproval-form' style={{ color: 'blueviolet' }}>Approve or reject uploaded content</h4>
                    <Col sm={8} >
                        {/* for Choosing file for approval*/}
                        <Form.Group className="Template-text" controlId="JournalViewforApproval">
                            <Form.Label>Select file</Form.Label>
                            <Form.Control required type="file" />
                        </Form.Group>
                    </Col>
                    {/* for Approval */}
                    <Form.Group className="mb-3" controlId="formApproveJournal" >

                        <Button variant="primary" type="submit">
                            Approve Journal
                        </Button>
                    </Form.Group>
                    {/* for Decline */}
                    <Form.Group className="mb-3" controlId="formDeclineJournal" >
                        <Button variant="primary" type="submit">
                            Decline Journal
                        </Button>
                    </Form.Group>

                </Form>

            </Row>
        );
    }

}
export default AdminApproval;