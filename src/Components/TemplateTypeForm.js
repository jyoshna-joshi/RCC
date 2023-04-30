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
import AdvertisementJournal from './AdvertisementJournal';
import ArticleJournal from './ArticleJournal';
import ArticleNewspaper from './ArticleNewspaper';
import BookHistorical from './BookHistorical';
import BookTechnical from './BookTechnical';
import PhotographCommercial from './PhotographCommercial';
import AdvertiseNewspaper from './AdvertiseNewspaper';
import PhotographPersonal from './PhotographPersonal';
import SalesBrochure from './SalesBrochure';
import SalesRecord from './SalesRecord';
function TemplateTypeForm() {

    return (
        <Tab.Container id="list-group-tabs" defaultActiveKey="#advertisementJournal"  >

            <h4 className='Upload-form' style={{ color: 'blueviolet' }}>Are you ready to upload your content?</h4>
            <Row>
                <Col sm={3} />
                <Col sm={2} className='Template-text'>
                    <h6>Please choose the type of the file</h6>
                    <ListGroup>
                        <ListGroup.Item action href="#advertisementJournal">
                            Advertisement Journal
                        </ListGroup.Item>
                        <ListGroup.Item action href="#advertisementNewspaper">
                            Advertisement Newspaper
                        </ListGroup.Item>
                        <ListGroup.Item action href="#articleJournal">
                            Article Journal
                        </ListGroup.Item>
                        <ListGroup.Item action href="#articleNewspaper">
                            Article Newspaper
                        </ListGroup.Item>
                        <ListGroup.Item action href="#bookHistorical">
                            Book Historical
                        </ListGroup.Item>
                        <ListGroup.Item action href="#bookTechnical">
                            Book Technical
                        </ListGroup.Item>
                        <ListGroup.Item action href="#photographCommercial">
                            Photograph Commercial
                        </ListGroup.Item>
                        <ListGroup.Item action href="#photographPersonal">
                            Photograph Personal
                        </ListGroup.Item>
                        <ListGroup.Item action href="#salesBrochure">
                            Sales Brochure
                        </ListGroup.Item>
                        <ListGroup.Item action href="#salesRecord">
                            Sales Record
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={4} className='Template-text'>
                    <Tab.Content>
                        {/* advertisementJournal */}
                        <Tab.Pane eventKey="#advertisementJournal">
                            <AdvertisementJournal />
                        </Tab.Pane>
                        {/* advertisementNewspaper */}
                        <Tab.Pane eventKey="#advertisementNewspaper">
                            <AdvertiseNewspaper />
                        </Tab.Pane>
                        {/* articleJournal */}
                        <Tab.Pane eventKey="#articleJournal">
                            <ArticleJournal />
                        </Tab.Pane>
                        {/* articleNewspaper */}
                        <Tab.Pane eventKey="#articleNewspaper">
                            <ArticleNewspaper />
                        </Tab.Pane>
                        {/* bookHistorical */}
                        <Tab.Pane eventKey="#bookHistorical">
                            <BookHistorical />
                        </Tab.Pane>
                        {/* bookTechnical */}
                        <Tab.Pane eventKey="#bookTechnical">
                            <BookTechnical />
                        </Tab.Pane>
                        {/* photographCommercial */}
                        <Tab.Pane eventKey="#photographCommercial">
                            <PhotographCommercial />
                        </Tab.Pane>
                        {/* photographPersonal */}
                        <Tab.Pane eventKey="#photographPersonal">
                            <PhotographPersonal />
                        </Tab.Pane>
                        {/* salesBrochure */}
                        <Tab.Pane eventKey="#salesBrochure">
                            <SalesBrochure />
                        </Tab.Pane>
                        {/* salesRecord */}
                        <Tab.Pane eventKey="#salesRecord">
                            <SalesRecord />
                        </Tab.Pane>

                    </Tab.Content>
                </Col>
                <Col sm={3} />
            </Row>
        </Tab.Container>
    );
}
export default TemplateTypeForm;