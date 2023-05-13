import React from 'react'
import { useState, useEffect } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { width } from 'dom7';
import styles from './Luxury.module.css'

function Search() {
    const URL_TEMPLATE_TYPES = "http://44.202.58.84:3000/template/types";
    const URL_SEARCH = "http://44.202.58.84:3000/content/search?templateType=";
    //for search data
    const [data, setData] = useState([]);
    //for template types
    const [types, setTypes] = useState([]);
    //for selected drop down values
    const [categoriesValue, setCategoriesValue] = useState('AllCategories');
    //for search text
    const [searchText, setSearchText] = useState('');

    /**
     * fetch data from server for search
     */
    const fetchSearch = () => {
        fetch(URL_SEARCH + categoriesValue + "&searchText=" + searchText)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setData(data);
            })
    }

    /**
     * fetch template type
     */
    const fetchTemplateType = () => {
        axios(URL_TEMPLATE_TYPES)
            .then(response => {
                return (response.data).map((item) => {
                    return item.type;
                });
            })
            .then(data => {
                console.log(data);
                data.unshift("AllCategories");
                setTypes(data);
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        fetchTemplateType();
    }, []);

    /**
     * set template categories value
     */
    const handleSelect = (e) => {
        console.log(e);
        setCategoriesValue(e);
    }

    /**
     * 
     * set search text
     */
    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    }

    
    /**
     * handle search 
     */
    function handleSearch() {
        fetchSearch();
    }


    return (
        <Container>
            <Row>
                <Col>
                    <InputGroup className="mb-3" onChange={handleInputChange}>
                        <DropdownButton
                            variant="outline-primary"
                            title={categoriesValue}
                            onSelect={handleSelect}
                            id="input-group-dropdown-1">
                            {types.map((templateType) => (
                                <Dropdown.Item eventKey={templateType}>
                                    {templateType}
                                </Dropdown.Item>
                            ))}
                        </DropdownButton>
                        <Form.Control aria-label="Text input with dropdown button" />
                        <Button variant="outline-primary" id="button-addon2" onClick={(e) => handleSearch()}>
                            Search
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={styles.luxury}>
                        <div className={styles.container}>
                            <div className={styles.card}>
                                {data.map(item => (
                                    <div key={item.id}>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <img src="https://w7.pngwing.com/pngs/491/951/png-transparent-red-adobe-pdf-logo-pdf-computer-icons-adobe-acrobat-encapsulated-postscript-pdf-miscellaneous-angle-text.png" style={{ width: '10%', height: 'auto', borderRadius: '100%' }} />
                                            <div className={styles.content}>
                                                <h3>{item.title}</h3>
                                                <h4>{item.description}</h4>
                                                <a href={item.format}><h6 style={{ paddingTop: '0.5rem' }}>...Read More</h6></a>

                                            </div>
                                        </div>
                                    </div>))}

                            </div>
                        </div>
                    </div>
                </Col>


                {/* table format */}
                {/* <Col>
                    <div className="container">
                        <table >
                            <thead>
                                <tr>
                                    <th>Types</th>
                                    <th>Title</th>
                                    <th>Content</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.type}</td>
                                            <td>{item.title}</td>
                                            <td>{item.format}</td>

                                            <td />
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                </Col> */}
            </Row>
        </Container>

    );
}

export default Search