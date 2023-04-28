import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { FormControl } from "react-bootstrap";

function TemplateTypeForm() {
    const submitTemplate = () => {
        return (
           alert("Hit api")
        );
    };
    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
                <Col sm={4}>
                    <ListGroup>
                        <ListGroup.Item action href="#advertisementJournal">
                            AdvertisementJournal
                        </ListGroup.Item>
                        <ListGroup.Item action href="#advertisementNewspaper">
                            AdvertisementNewspaper
                        </ListGroup.Item>
                        <ListGroup.Item action href="#articleJournal">
                            ArticleJournal
                        </ListGroup.Item>
                        <ListGroup.Item action href="#articleNewspaper">
                            ArticleNewspaper
                        </ListGroup.Item>
                        <ListGroup.Item action href="#bookHistorical">
                            BookHistorical
                        </ListGroup.Item>
                        <ListGroup.Item action href="#bookTechnical">
                            BookTechnical
                        </ListGroup.Item>
                        <ListGroup.Item action href="#photographCommercial">
                            PhotographCommercial
                        </ListGroup.Item>
                        <ListGroup.Item action href="#photographPersonal">
                            PhotographPersonal
                        </ListGroup.Item>
                        <ListGroup.Item action href="#salesBrochure">
                            SalesBrochure
                        </ListGroup.Item>
                        <ListGroup.Item action href="#salesRecord">
                            SalesRecord
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                        {/* advertisementJournal */}
                        <Tab.Pane eventKey="#advertisementJournal">
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
                                <Form.Group className="mb-3" controlId="formUploadFile">
                                    <Form.Label>Select file</Form.Label>
                                    <Form.Control type="file"
                                    />
                                </Form.Group>
                                {/* for submit */}
                                <Form.Group className="mb-3" controlId="formSubmitForApproval" >
                                    <Button variant="primary" type="submit" onClick={submitTemplate}>
                                    Submit for approval
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Tab.Pane>
                        {/* advertisementNewspaper */}
                        <Tab.Pane eventKey="#advertisementNewspaper">
                            <Form>
                                {/* for title*/}
                                <Form.Group className="mb-3" controlId="advertisementNewspaperTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter title name" />
                                </Form.Group>
                                {/* for subject*/}
                                <Form.Group className="mb-3" controlId="advertisementNewspaperSubject">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text" placeholder="Enter subject" />
                                </Form.Group>
                                {/* for publisher*/}
                                <Form.Group className="mb-3" controlId="advertisementNewspaperPublisher">
                                    <Form.Label>Publisher</Form.Label>
                                    <Form.Control type="text" placeholder="Enter newspaper name" />
                                </Form.Group>
                                {/* for identifier*/}
                                <Form.Group className="mb-3" controlId="advertisementNewspaperIdentifier">
                                    <Form.Label>Identifier</Form.Label>
                                    <Form.Control type="text" placeholder="Enter pagelist" />
                                </Form.Group>
                                {/* for description*/}
                                <Form.Group className="mb-3" controlId="advertisementNewspaperDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" placeholder="Enter description" />
                                </Form.Group>
                                {/* for date*/}
                                <Form.Group className="mb-3" controlId="advertisementNewspaperDate">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="text" placeholder="Enter date" />
                                </Form.Group>
                            </Form>
                        </Tab.Pane>
                        {/* articleJournal */}
                        <Tab.Pane eventKey="#articleJournal">
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
                        </Tab.Pane>
                        {/* articleNewspaper */}
                        <Tab.Pane eventKey="#articleNewspaper">
                            <Form>
                                {/* for title*/}
                                <Form.Group className="mb-3" controlId="articleNewspaperTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter title name" />
                                </Form.Group>
                                {/* for subject*/}
                                <Form.Group className="mb-3" controlId="articleNewspaperSubject">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text" placeholder="Enter subject" />
                                </Form.Group>
                                {/* for publisher*/}
                                <Form.Group className="mb-3" controlId="articleNewspaperPublisher">
                                    <Form.Label>Publisher</Form.Label>
                                    <Form.Control type="text" placeholder="Enter newspaper name" />
                                </Form.Group>
                                {/* for identifier*/}
                                <Form.Group className="mb-3" controlId="articleNewspaperIdentifier">
                                    <Form.Label>Identifier</Form.Label>
                                    <Form.Control type="text" placeholder="Enter pagelist" />
                                </Form.Group>
                                {/* for description*/}
                                <Form.Group className="mb-3" controlId="articleNewspaperDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" placeholder="Enter description" />
                                </Form.Group>
                                {/* for date*/}
                                <Form.Group className="mb-3" controlId="articleNewspaperDate">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="text" placeholder="Enter date" />
                                </Form.Group>
                                {/* for creator*/}
                                <Form.Group className="mb-3" controlId="articleJournalCreator">
                                    <Form.Label>Creator</Form.Label>
                                    <Form.Control type="text" placeholder="Enter author name  " />
                                </Form.Group>
                            </Form>
                        </Tab.Pane>
                        {/* bookHistorical */}
                        <Tab.Pane eventKey="#bookHistorical">
                            <Form>
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
                        </Tab.Pane>
                        {/* bookTechnical */}
                        <Tab.Pane eventKey="#bookTechnical">
                            <Form>
                                {/* for title*/}
                                <Form.Group className="mb-3" controlId="bookTechnicalTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter title name" />
                                </Form.Group>
                                {/* for subject*/}
                                <Form.Group className="mb-3" controlId="bookTechnicalSubject">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text" placeholder="Enter subject" />
                                </Form.Group>
                                {/* for publisher*/}
                                <Form.Group className="mb-3" controlId="bookTechnicalPublisher">
                                    <Form.Label>Publisher</Form.Label>
                                    <Form.Control type="text" placeholder="Enter publisher name or organisationName name" />
                                </Form.Group>
                                {/* for identifier*/}
                                <Form.Group className="mb-3" controlId="bookTechnicalIdentifier">
                                    <Form.Label>Identifier</Form.Label>
                                    <Form.Control type="text" placeholder="Enter publication identifier" />
                                </Form.Group>
                                {/* for description*/}
                                <Form.Group className="mb-3" controlId="bookTechnicalDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" placeholder="Enter description" />
                                </Form.Group>
                                {/* for date*/}
                                <Form.Group className="mb-3" controlId="bookTechnicalYear">
                                    <Form.Label>Year</Form.Label>
                                    <Form.Control type="text" placeholder="Enter year" />
                                </Form.Group>
                                {/* for creator*/}
                                <Form.Group className="mb-3" controlId="bookTechnicalCreator">
                                    <Form.Label>Creator</Form.Label>
                                    <Form.Control type="text" placeholder="Enter author name list  or organisation name  " />
                                </Form.Group>
                            </Form>
                        </Tab.Pane>
                        {/* photographCommercial */}
                        <Tab.Pane eventKey="#photographCommercial">
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
                                    <Form.Control type="text" placeholder="Enter description" />
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
                            </Form>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}
export default TemplateTypeForm;