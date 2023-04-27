import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { FormControl } from "react-bootstrap";

const items = ["Pdf", "cd", "Others"];
const TemplateForm = () => {
    const navigate = useNavigate();
    const [selectedTemplateType, setSelectedTemplateType] = useState("Select Template Type");
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedImage, setSelectImage] = useState(null);
    const [selectedYear, setSelectYear] = useState(null);
    const [selectedTitle, setSelectTitle] = useState(null);
    const [selectedAuthor, setSelectAuthor] = useState(null);
    const [selectedShortDescription, setSelectShortDescription] = useState(null);
    //set selected title
    const titleChangeHandler = (e) => {
        setSelectTitle(e.target.value);
    };
    //set selected author name
    const authorChangeHandler = (e) => {
        setSelectAuthor(e.target.value);
    };
    //set selected short description
    const shortDescriptionChangeHandler = (e) => {
        setSelectShortDescription(e.target.value);
    };
    //set selected image 
    const imageChangeHandler = (e) => {
        setSelectImage(e.target.value);
    };
    //set selected file
    const fileChangeHandler = (e) => {
        setSelectedFile(e.target.value);
    };
    //set selected year
    const yearChangeHandler = (e) => {
        setSelectYear(e.target.value);
    };

    // connect to api
    const submitForm = () => {
        const formdData = new FormData();
        formdData.append("templateType", selectedTemplateType);
        formdData.append("title", selectedTitle);
        formdData.append("authorName", selectedAuthor);
        formdData.append("year", selectedYear);
        formdData.append("image", selectedImage);
        formdData.append("file", selectedFile);
        // for (const pair of formdData.entries()) {
        //     alert(pair + ', ' + formdData);
        // }
        // axios
        //     .post(UPLOAD_URL, formdData)
        //     .then((res) => {
        //         alert("File Upload success");
        //     })
        //     .catch((err) => alert("File Upload Error"));
    }
    return (
        <>
            <h3>Content application form</h3>
            <Form>
                {/* for template type */}
                <Form.Group className="mb-3" controlId="formTemplateType">
                    <Form.Label>What type of content you want to upload?</Form.Label>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary"> {selectedTemplateType}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {items.map((item) => (
                                <Dropdown.Item onClick={() => setSelectedTemplateType(item)}>
                                    {item}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                        <pre>You choose: {selectedTemplateType}</pre>
                    </Dropdown>
                </Form.Group>

                {/* for title */}
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" onChange={titleChangeHandler} />
                </Form.Group>

                {/* for author*/}
                <Form.Group className="mb-3" controlId="formAuthorName">
                    <Form.Label>Author Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter author name" onChange={authorChangeHandler} />
                </Form.Group>

                {/* for short description */}
                <Form.Group className="mb-3" controlId="formShortDescription">
                    <Form.Label>Short description</Form.Label>
                    <Form.Control type="text" placeholder="Enter short description" onChange={shortDescriptionChangeHandler} />
                </Form.Group>

                {/* for year*/}
                <Form.Group className="mb-3" controlId="formYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="text" placeholder="Enter year" onChange={yearChangeHandler} />
                </Form.Group>

                {/* for uploading image*/}
                <Form.Group className="mb-3" controlId="formUploadImageFile">
                    <Form.Label>Select image</Form.Label>
                    <Form.Control type="file"
                        onChange={imageChangeHandler}>
                    </Form.Control>
                </Form.Group>

                {/* for uploading file*/}
                <Form.Group className="mb-3" controlId="formUploadFile">
                    <Form.Label>Select file</Form.Label>
                    <Form.Control type="file"
                        onChange={fileChangeHandler} />
                </Form.Group>

                {/* for submit for approval*/}
                {/* <Form.Group className="mb-3" controlId="formSubmitForApproval" onClick={() => navigate("/")}> */}
                <Form.Group className="mb-3" controlId="formSubmitForApproval" >
                    <Button variant="primary" type="submit" onClick={submitForm}>
                        Submit for approval
                    </Button>
                </Form.Group>
            </Form >
        </>
    );
};

export default TemplateForm;
