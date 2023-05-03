import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function UploadTemplateForm() {
    const [fields, setFields] = useState([]);

    const fetchUserData = () => {
        fetch("http://44.202.58.84:3000/fields?type=PhotographPersonal")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setFields(data)
            })
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    const handleInputChange = (event, index) => {
        const { name, value } = event.target;
        const updatedFields = [...fields];
        updatedFields[index] = { ...updatedFields[index], [name]: value };
        setFields(updatedFields);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(fields.placeholder);

        // Do something with the form data
    };

    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field, index) =>
                <Form.Group className="mb-3" controlId="title" key={index}>
                    <Form.Label>{field.title}</Form.Label>
                    <Form.Control required type={field.type}
                        placeholder={field.placeholder}
                        onChange={handleInputChange}
                    />
                </Form.Group>
            )}
            <button type="submit">Submit</button>
        </form>
    );
}
