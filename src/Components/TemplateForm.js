// Ignore this file


import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { FormControl } from "react-bootstrap";

const items = ["AdvertisementJournal", "AdvertisementNewspaper", "ArticleJournal", "ArticleNewspaper", "BookHistorical", "BookTechnical", "PhotographCommercial", "PhotographPersonal", "SalesBrochure", "SalesRecord"];
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
        formdData.append("description", selectedShortDescription);

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
        </>
    );
};

export default TemplateForm;
