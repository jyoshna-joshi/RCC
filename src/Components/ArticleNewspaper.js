import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


class ArticleNewspaper extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form>
                {/* for title*/}
                <Form.Group className="mb-3" controlId="articleNewspaperTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title name" />
                </Form.Group>
                {/* for subject*/}
                <Form.Group className="mb-3" controlId="articleNewspaperSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Enter subject" />
                </Form.Group>
                {/* for publisher*/}
                <Form.Group className="mb-3" controlId="articleNewspaperPublisher">
                    <Form.Label>Publisher</Form.Label>
                    <Form.Control type="text" placeholder="Enter newspaper name" />
                </Form.Group>
                {/* for identifier*/}
                <Form.Group className="mb-3" controlId="articleNewspaperIdentifier">
                    <Form.Label>Identifier</Form.Label>
                    <Form.Control type="text" placeholder="Enter pagelist" />
                </Form.Group>
                {/* for description*/}
                <Form.Group className="mb-3" controlId="articleNewspaperDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter description" />
                </Form.Group>
                {/* for date*/}
                <Form.Group className="mb-3" controlId="articleNewspaperDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="text" placeholder="Enter date" />
                </Form.Group>
                {/* for creator*/}
                <Form.Group className="mb-3" controlId="articleNewspaperCreator">
                    <Form.Label>Creator</Form.Label>
                    <Form.Control type="text" placeholder="Enter author name  " />
                </Form.Group>
                {/* for uploading file*/}
                <Form.Group className="mb-3" controlId="articleNewspaperUpload">
                    <Form.Label>Select file</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
            </Form>
        );
    }

}
export default ArticleNewspaper;