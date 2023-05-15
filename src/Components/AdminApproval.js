import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ApprovalImage from './ApprovalImage';
import ApprovalPDF from './ApprovalPDF';
import ApprovalVideo from './ApprovalVideo';
import Card from 'react-bootstrap/Card';



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
            <Card>
                <Tab.Container id="list-group-tabs" defaultActiveKey="#approvalPDF"  >
                    <h4 className='AdminApproval-form' style={{ color: 'blueviolet' }}>Approve or reject uploaded content</h4>
                    <Row>
                        <Col sm={3} />
                        <Col sm={2} className='Template-text'>
                            <h6>Please choose type of article to approve</h6>
                            <ListGroup>

                                <ListGroup.Item action href="#approvalImage">
                                    Approve Image articles
                                </ListGroup.Item>
                                <ListGroup.Item action href="#approvalPDF">
                                    Approve Document articles
                                </ListGroup.Item>
                                <ListGroup.Item action href="#approvalVideo">
                                    Approve Video articles
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={6} className='Template-text'>
                            <Tab.Content>
                                {/* ApprovalImage */}
                                <Tab.Pane eventKey="#approvalImage">
                                    <ApprovalImage />
                                </Tab.Pane>
                                {/* ApprovalPDF */}
                                <Tab.Pane eventKey="#approvalPDF">
                                    <ApprovalPDF />
                                </Tab.Pane>
                                {/* ApprovalVideo */}
                                <Tab.Pane eventKey="#approvalVideo">
                                    <ApprovalVideo />
                                </Tab.Pane>
                            </Tab.Content>

                        </Col>
                        <Col sm={1} />

                    </Row>
                </Tab.Container>
            </Card>
        );
    }
}


export default AdminApproval;