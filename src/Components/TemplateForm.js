import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const items = ["Pdf", "cd", "Others"];

const TemplateForm = () => {
    const [selectedItem, setSelectedItem] = useState("Select Template Type");
    return (
        <>
            <h3>Content application form</h3>
            <Form>
                {/* for template type */}
                <Form.Group className="mb-3" controlId="formTemplateType">
                    <Form.Label>What type of content you want to upload?</Form.Label>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary"> {selectedItem}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {items.map((item) => (
                                <Dropdown.Item onClick={() => setSelectedItem(item)}>
                                    {item}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                        <pre>You choose: {selectedItem}</pre>
                    </Dropdown>
                </Form.Group>


                {/* for title */}
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" />
                </Form.Group>

                {/* for author*/}
                <Form.Group className="mb-3" controlId="formAuthorName">
                    <Form.Label>Author Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter author name" />
                </Form.Group>

                {/* for short description */}
                <Form.Group className="mb-3" controlId="formShortDescription">
                    <Form.Label>Short description</Form.Label>
                    <Form.Control type="text" placeholder="Enter short description" />
                </Form.Group>

                {/* for year*/}
                <Form.Group className="mb-3" controlId="formYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="text" placeholder="Enter year" />
                </Form.Group>

                {/* for uploading image*/}
                <Form.Group className="mb-3" controlId="formUploadImage">
                    <Button variant="secondary" type="button">
                        Upload Image
                    </Button>
                </Form.Group>

                {/* for uploading file*/}
                <Form.Group className="mb-3" controlId="formUploadFile">
                    <Button variant="secondary" type="button">
                        Upload file
                    </Button>
                </Form.Group>

                {/* for submit for approval*/}
                <Form.Group className="mb-3" controlId="formSubmitForApproval">
                    <Button variant="primary" type="submit">
                        Submit for approval
                    </Button>
                </Form.Group>
            </Form >
        </>
    );
};

export default TemplateForm;
