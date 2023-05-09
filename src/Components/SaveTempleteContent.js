import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { clear } from '@testing-library/user-event/dist/clear';

export default function UploadTemplateForm() {
    const navigate = useNavigate();
    const URL_TEMPLATE_TYPES = "http://44.202.58.84:3000/template/types";
    const URL_FIELD_TYPE = "http://44.202.58.84:3000/template/fields?type=";
    const URL_SAVE_CONTENT = "http://44.202.58.84:3000/content/save";
    //for dynamic fields
    const [fields, setFields] = useState([]);
    const [content, setContent] = useState([]);
    //for dynamic templatetypes
    const [types, setTypes] = useState([]);
    //for selected template type
    const [selectedTemplateType, setSelectedTemplateType] = useState("Select Template Type");

    /**
     * api integration for template type
     */
    useEffect(() => {
        axios.get(URL_TEMPLATE_TYPES)
            .then(response => {
                setTypes(response.data);
                fetchUserData(response.data[0]);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    /**
     * fetch forms data from api
     * @param {type of template} templateType 
     */
    function fetchUserData(templateType) {
        setFields([]);
        fetch(URL_FIELD_TYPE + templateType)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setFields(data.fields)
            })
        setSelectedTemplateType(templateType);
    }

    /**
     * @param {event} event 
     * @param {position} index 
     */

    const handleInputChange = (event, index) => {
        fields[index]["value"] = event.target.value;
        setFields(fields);
    };

    /**
     * when submit button is clicked
     * @param  event 
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        const formdData = new FormData();
        fields.map((field, index) => {
            formdData.append(field.field, field.value);
        })
        axios
            .post(URL_SAVE_CONTENT, formdData)
            .then((res) => {
                alert("File Upload success");
                navigate(-1);
            })
            .catch((err) =>
                alert("File Upload Error"));
    };

    return (
        <Form >
            <Tab.Container id="list-group-tabs" defaultActiveKey="#advertisementJournal"  >
                <h4 className='Upload-form' style={{ color: 'blueviolet' }}>Are you ready to upload your content?</h4>
                <Row>
                    <Col sm={3} />
                    <Col sm={3} className='Template-text'>
                        <h6>Please choose the type of the file</h6>
                        {/* for types */}
                        <ListGroup >
                            {types.map((templateType) => (
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
                                {fields.map((field, index) => {
                                    if (field.field == "format") {
                                        field.type = "file";
                                    } else if (field.field == "date") {
                                        field.type = "date";
                                    }
                                    else {
                                        field.type = "text";
                                    }
                                    return <Form.Group className="mb-3" controlId="title" key={index} >
                                        <Form.Label>{field.title}</Form.Label>
                                        <Form.Control required type={field.type}
                                            placeholder={field.placeholder}
                                            onChange={(e) => handleInputChange(e, index)}
                                        />
                                    </Form.Group>
                                })}
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
