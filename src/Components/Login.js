import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { FormControl } from "react-bootstrap";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }
    
    return(
        <div className="authz-form-container">
            <h2> Admin Login </h2>
            <form className="Login-form" onSubmt = {handleSubmit}>
                <label className="login-lbl" htmlfor="email">email</label> 
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
                
                <label className="login-lbl" htmlfor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="*************" id="password" name="password"/>
                
                <button className="login-btn" type="submit" onClick={() => navigate("/selectAdminHomeForm")}>Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('AdminLayout')}>Forgot Password</button>
        </div>
    )
}