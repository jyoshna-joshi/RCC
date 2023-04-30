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
    const submitTemplate = () => {
        return (
            alert("Hit api")
        );
    };
    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#advertisementJournal">
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
            </Row>
        </Tab.Container>
    );
}
export default TemplateTypeForm;