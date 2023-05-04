import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function UploadTemplateForm() {
    //  need to do dynamic template type
    const templateTypes = ["AdvertisementJournal", "AdvertisementNewspaper", "ArticleJournal", "ArticleNewspaper", "BookHistorical", "BookTechnical", "PhotographCommercial", "PhotographPersonal", "SalesBrochure", "SalesRecord"];
    //for dynamic fields
    const [fields, setFields] = useState([]);
    //for selected template type
    const [selectedTemplateType, setSelectedTemplateType] = useState("Select Template Type");

    /**
     * fetch forms data from api
     * @param {type of template} templateType 
     */
    function fetchUserData(templateType) {
        fetch("http://44.202.58.84:3000/fields?type=" + templateType)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setFields(data)
            })
        setSelectedTemplateType(templateType);
    }

    /**
     * onchange values
     * @param  event 
     * @param index 
     */
    const handleInputChange = (event, index) => {
        const { name, value } = event.target;
        const updatedFields = [...fields];
        updatedFields[index] = { ...updatedFields[index], [name]: value };
        setFields(updatedFields);
    };

    /**
     * when submit button is clicked
     * @param  event 
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        //hit url
        alert(fields);
    
    };

    return (
        <Form >
            <Tab.Container id="list-group-tabs" defaultActiveKey="#advertisementJournal"  >
                <h4 className='Upload-form' style={{ color: 'blueviolet' }}>Are you ready to upload your content?</h4>
                <Row>
                    <Col sm={3} />
                    <Col sm={2} className='Template-text'>
                        <h6>Please choose the type of the file</h6>
                             {/* for types */}
                        <ListGroup >
                            {templateTypes.map((templateType) => (
                                <ListGroupItem eventKey={templateType} onClick={() => fetchUserData(templateType)}>
                                    {templateType}
                                </ListGroupItem>
                            ))}
                            <pre>You choose: {selectedTemplateType}</pre>
                        </ListGroup>
                    </Col>
                    <Col sm={4} className='Template-text'>
                        <Tab.Content>
                            {/* for forms */}
                            <Tab.Pane eventKey={selectedTemplateType}>
                                {fields.map((field, index) =>
                                    <Form.Group className="mb-3" controlId="title" key={index}>
                                        <Form.Label>{field.title}</Form.Label>
                                        <Form.Control required type={field.type}
                                            placeholder={field.placeholder}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>
                                )}
                            </Tab.Pane>
                            <Form.Group className="mb-3" controlId="formSubmitForApproval" onClick={handleSubmit}>
                                <Button variant="primary" type="submit">
                                    Submit for approval
                                </Button>
                            </Form.Group>
                        </Tab.Content>
                    </Col>
                    <Col sm={3} />
                </Row>
            </Tab.Container>
        </Form>
    );
}
