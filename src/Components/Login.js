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
            <div class="searchContainer">
                <h5 className='Upload-form' style={{ color: 'white' }}>Admin Login</h5>
            </div>
            <div className="Container">
                <Card className="Login-form">
                    <div className="Login-form-content">
                        <div className="form-group mt-3">
                            <label className="Login-text" htmlfor="email">Username&#160;&#160; </label>
                            <input value={UserName} className="form-control mt-1" onChange={(e) => setUserName(e.target.value)} type="UserName" placeholder="Admin" id="UserName" name="UserName" />
                        </div>
                        <div className="form-group mt-3">
                            <label className="Login-text" htmlfor="password">Password&#160;&#160;&#160;&#160;</label>
                            <input value={pass} className="form-control mt-1"
                                onChange={(e) => setPass(e.target.value)} type="password" placeholder="*************" id="password" name="password" />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <Button className="btn btn-primary" variant="secondary" onClick={() => { navigate("/admin/dashboard"); window.location.reload() }}>Log In
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </Row>
    )
}