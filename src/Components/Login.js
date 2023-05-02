import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { FormControl } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <Row>
            <Form>
                <h4 className='AdminApproval-form' style={{ color: 'blueviolet' }}>Admin Login</h4>
                <Col sm={15}>
                    <label className="mb-3" htmlfor="email">email:&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; </label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                </Col>
                <Col sm={15}>
                    <label className="mb-3" htmlfor="password">password:&#160;&#160;</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*************" id="password" name="password" />
                </Col>
                <Form.Group className="mb-3" controlId="formSubmitForApproval" >
                    <Button variant="primary" onClick={() => navigate("/Admin Dashboard")}>Log In
                    </Button>
                </Form.Group>

            </Form>
        </Row>
    )
}