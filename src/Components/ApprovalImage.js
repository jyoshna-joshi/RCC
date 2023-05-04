import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

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
                                
                {/* for Choosing file for approval*/}
                <Form.Group className="Template-text" controlId="JournalViewforApproval">
                    <Form.Label>Select Image</Form.Label>
                    <Form.Control required type="file" />
                </Form.Group>
                {/* for Approval */}
                <Form.Group className="mb-3" controlId="formApproveJournal" >
                    <Button variant="primary" type="submit">
                        Approve Image
                    </Button>
                </Form.Group>
                {/* for Decline */}
                <Form.Group className="mb-3" controlId="formDeclineJournal" >
                    <Button variant="primary" type="submit">
                        Reject Image
                    </Button>
                </Form.Group>
            </Form>

        );
    }

}
export default ApprovalImage;