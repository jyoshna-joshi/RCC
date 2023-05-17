import React from "react";
import { useNavigate } from "react-router-dom";
import Images from "./HomeContent";
import Footer from "./Footer";
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
import { BsFillCaretDownFill } from 'react-icons/bs'
import Card from 'react-bootstrap/Card';
import '../scss/style.scss';
import Collapse from 'react-bootstrap/Collapse';

const Home = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const URL_TEMPLATE_TYPES = "http://44.202.58.84:3000/template/types";
  const URL_SEARCH = "http://44.202.58.84:3000/content/search?templateType=";
  //for search data
  const [data, setData] = useState([]);
  //for template types
  const [types, setTypes] = useState([]);
  //for selected drop down values
  const [categoriesValue, setCategoriesValue] = useState('All Categories');
  //for search text
  const [searchText, setSearchText] = useState();
  const [searchSubject, setSearchSubject] = useState();
  const [searchPublisher, setSearchPublisher] = useState();
  const [showAdvanced, setShowAdvanced] = useState(false);

  const [searched, setSearched] = useState(false);

  var url = URL_SEARCH + categoriesValue.replace(/ +/g, "");
  /**
   * fetch data from server for search
   */
  const fetchSearch = () => {
    var params = '';
    if (searchText) {
      params = params + "&searchText=" + searchText;
    }
    if (searchPublisher) {
      params = params + "&publisher=" + searchPublisher;
    }
    if (searchSubject) {
      params = params + "&subject=" + searchSubject;
    }
    if (params) {
      url = url + params;
    }
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        data.map((item) => {
          console.log(item._id + item.format);
          if (item.format) {
            var icon = (item.format).substring(item.format.lastIndexOf('.') + 1);
            if (icon === "pdf") {
              data.push("icon", "pdf");
            }
            else {
              data.push("icon", "doc");
            }
          }
        });
        setData(data);
        setSearched(true);
      })
  }

  /**
   * fetch template type
   */
  const fetchTemplateType = () => {
    axios(URL_TEMPLATE_TYPES)
      .then(response => {
        return (response.data).map((item) => {
          item = item.type.replace(/([A-Z])/g, ' $1').trim();
          return item;
        });
      })
      .then(data => {
        data.unshift("All Categories");
        setTypes(data);
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
    setCategoriesValue(e);
  }

  /**
   * 
   * set search text
   */
  const handleInputChange = (input, e) => {
    if (e) {
      switch (input) {
        case 'title':
          if (e) {
            setSearchText(e.target.value);
          }
          return;
        case 'subject':
          if (e) {
            setSearchSubject(e.target.value);
          }
          return;
        case 'publisher':
          if (e) {
            setSearchPublisher(e.target.value);
          }
          return;
        default:
          return;
      };
    }
  }

  const displayAdvanced = () => {
    setShowAdvanced(!showAdvanced);
  }

  /**
   * handle search 
   */
  function handleSearch() {
    fetchSearch();
  }

  return (
    <>
      <>
        <div class="searchContainer">
          <Container>
            <Row>
              <Col>
                <InputGroup className="mb-3">
                  <DropdownButton
                    variant="light"
                    title={categoriesValue}
                    onSelect={handleSelect}
                    id="input-group-dropdown-1">
                    {types.map((templateType) => (
                      <Dropdown.Item eventKey={templateType}>
                        {templateType}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                  <Form.Control aria-label="Text input with dropdown button" variant="light" onChange={(e) => handleInputChange("title", e)} />
                  <Button icon="search" variant="light" id="button-advanced" onClick={(e) => displayAdvanced()}>
                    <BsFillCaretDownFill />
                  </Button>
                  <Button variant="light" id="button-addon2" onClick={(e) => handleSearch()}>
                    Search
                  </Button>
                </InputGroup>
              </Col>
            </Row>
            <Collapse in={showAdvanced}>
              <Row>
                <Card>
                  <Row>
                    <Col>
                      <Form.Group className="mb-1">
                        <Form.Label size="sm">Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject" size="sm" onChange={(e) => handleInputChange("subject", e)} />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-1">
                        <Form.Label size="sm" style={{ align: "left" }}>Publisher</Form.Label>
                        <Form.Control type="text" placeholder="Publisher" size="sm" onChange={(e) => handleInputChange("publisher", e)} />
                      </Form.Group>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                  </Row>
                </Card>
              </Row>
            </Collapse>
          </Container>
        </div>
        <div class="searchResults">
          <Container>
          <Row>
            <Col>
              {data.map(item => (
                <><br />
                  <Card style={{ border: "none" }}>
                    <div key={item._id}>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <img src="https://w7.pngwing.com/pngs/491/951/png-transparent-red-adobe-pdf-logo-pdf-computer-icons-adobe-acrobat-encapsulated-postscript-pdf-miscellaneous-angle-text.png" style={{ width: '5%', height: '5%' }} class="box"/>
                        <div>
                          <a onClick={() => {navigate("/viewDetails", { state: { id: item._id } }); window.location.reload();}} id="searchTitle"><h5>{item.title}</h5></a><br />
                          <h6>{item.description}</h6><br />
                        </div>
                      </div>
                    </div>
                  </Card></>
              ))
              }
            </Col>
          </Row>

        </Container></div></>
      {!searched ? <><Images /><Footer /></> : <div />}
    </>
  );
};

export default Home;
