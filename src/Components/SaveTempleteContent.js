import { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ListGroup, ListGroupItem, Spinner } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import { CAlert } from '@coreui/react';
import { clear } from '@testing-library/user-event/dist/clear';
import { styles } from 'dom7';
import Footer from "./Footer";
import Modal from 'react-bootstrap/Modal';

export default function SaveTempleteContent() {
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
    //for submit spinner
    const [isFileLoading, setIsFileLoading] = useState(false);
    //for spinner
    const [isLoading, setIsLoading] = useState(false);
    //for alert
    const [home, setHome] = useState(false)
    const [message, addMessage] = useState()
    const [uploadby, setUploadBy] = useState()
    const [submit, setSubmit] = useState()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    /**
     * load spinner
     * @returns spinner
     */
    function loadSpinner() {
        if (isLoading) {
            return <Spinner animation="grow" variant="secondary" >
            </Spinner>
        }
    }

    /**
 * load spinner
 * @returns spinner
 */
    function loadSpinnerForSubmit() {
        if (isFileLoading) {
            return <Spinner animation="grow" variant="secondary" >
            </Spinner>
        }
    }


    /**
     * api integration for template type
     */
    useEffect(() => {
        var path = window.location.pathname;
        path = path.substring(path.lastIndexOf('/') + 1);

        if (path === "upload") {
            setUploadBy("admin");
            setSubmit("Upload Content");
            setHome('/admin/dashboard');

        }
        else {
            setUploadBy("public");
            setSubmit("Submit for approval");
            setHome('/');

        }

        axios(URL_TEMPLATE_TYPES)
            .then(response => {
                setIsLoading(true);
                return (response.data).map((item) => {
                    item = item.type.replace(/([A-Z])/g, ' $1').trim();
                    return item;
                });
            })
            .then(data => {
                setTypes(data);
                setIsLoading(false);
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
        setIsLoading(true);
        fetch(URL_FIELD_TYPE + templateType.replace(/ +/g, ""))
            .then(response => {
                return response.json();
            })
            .then(data => {
                setFields(data.fields)
                setIsLoading(false)
            })
        setSelectedTemplateType(templateType);
    }

    /**
     * @param {event} event 
     * @param {position} index 
     */
    const handleInputChange = (event, index) => {
        if (fields[index].field == "format") {
            fields[index]["value"] = event.target.files[0];
        } else {
            fields[index]["value"] = event.target.value;
        }
        setFields(fields);
    };



    /**
     * when submit button is clicked
     * @param  event 
     */
    const handleSubmit = (event) => {
        setIsFileLoading(true);
        event.preventDefault();
        const formdData = new FormData();
        fields.map((field) => {
            if (field.value == null) {
                field.value = "";
            }
            formdData.append(field.field, field.value);
            console.log(field.value);

        })
        formdData.append("type", selectedTemplateType);
        formdData.append("uploadby", uploadby);
        axios
            .post(URL_SAVE_CONTENT, formdData)
            .then((res) => {
                setIsFileLoading(false);
                setShow(true);
                addMessage("File Upload Success");
            })
            .catch((err) => {
                setIsFileLoading(false);
                setShow(true);
                addMessage("File Upload Error");
            })
    };

    return (
        <>
            <div class="searchContainer">
                <h5 className='Upload-form' style={{ color: 'white' }}>Are you ready to upload your content ?</h5>

            </div>
            <Card>
                <Tab.Container id="list-group-tabs" >
                    <Row>
                        <Col sm={3} />
                        <Col sm={3} className='Template-text'>
                            <h6 className='Text-display'>AVAILABLE FORMS</h6>
                            {/* for types */}
                            <ListGroup>
                                {types.map((templateType) => (
                                    <ListGroupItem action variant='dark' className='Hover-box' eventKey={templateType} onClick={() => fetchUserData(templateType)}>
                                        {templateType}
                                    </ListGroupItem>

                                ))}
                            </ListGroup>
                        </Col>
                        <Col sm={4} className='Template-text'>
                            <Tab.Content>
                                {loadSpinner()}
                                <Tab.Pane eventKey={selectedTemplateType}>
                                    {/* for forms */}
                                    {fields.map((field, index) => {
                                        if (field.field == "format") {
                                            field.type = "file";
                                        } else if (field.field == "date") {
                                            field.type = "date";
                                        }
                                        else {
                                            field.type = "text";
                                        }
                                        return <Form.Group className="mb-3" controlId="title" key={index}>
                                            <Form.Label>{field.title}</Form.Label>
                                            <Form.Control required type={field.type}
                                                placeholder={field.placeholder}
                                                onChange={(e) => handleInputChange(e, index)} />
                                        </Form.Group>;
                                    })}
                                    <Form.Group className="mb-3" controlId="formSubmitForApproval" onClick={handleSubmit}>
                                        <Button variant="secondary" type="submit">
                                            {submit}
                                        </Button>
                                        <Col>
                                            {loadSpinnerForSubmit()}                                        </Col>

                                    </Form.Group><Modal show={show} onHide={handleClose} animation={false} >
                                        <Modal.Header >
                                            <Modal.Title >Upload Content</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>{message}</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={() => navigate(home)} >
                                                OK
                                            </Button>

                                        </Modal.Footer>
                                    </Modal>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                        <Col sm={3} />
                    </Row>
                </Tab.Container>
            </Card>
            <br />
            <Footer /></>
    );
}