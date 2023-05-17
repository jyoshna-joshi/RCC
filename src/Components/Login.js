import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { FormControl } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { height } from "dom7";

export const Login = (props) => {
    const [UserName, setUserName] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

        
    return (
        <Row>
            <Card>
                <h4 className='AdminApproval-form' style={{ color: 'blueviolet' }}>Admin Login</h4>
                      <Row ></Row>
                      <Row sm={3}></Row>
                <Col sm={15}>
                    <label className="mb-3" htmlfor="email">User Name:&#160;&#160; </label>
                    <input value={UserName} onChange={(e) => setUserName(e.target.value)} type="UserName" placeholder="Admin" id="UserName" name="UserName" />
                </Col>
               <Row sm={3}></Row>
                <Col sm={15}>
                    <label className="mb-3" htmlfor="password">password:&#160;&#160;&#160;&#160;</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*************" id="password" name="password" />
                </Col>
                <Form.Group className="mb-3" controlId="formSubmitForApproval" >
                    <Button variant="primary" onClick={() => {navigate("/admin/dashboard"); window.location.reload()}}>Log In
                    </Button>
                </Form.Group>

            </Card>
        </Row>
    )
}