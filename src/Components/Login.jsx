import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
 
const Login = () => {
    const [values, setValues] = useState({
        userName: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
 
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://emsproject-production.up.railway.app/auth/login', values)
            .then(result => {
                if (result.data) {
                    // Store JWT token in local storage
                    localStorage.setItem("token", result.data);
                    console.log(result.data)
                    navigate('/dashboard');
                } else {
                    setError('Invalid login credentials');
                }
            })
            .catch(err => {
                console.log(err);
                setError('An error occurred during login. Please try again.');
            });
    };
 
    return (
        <div className='text-center loginPage'>
            <div className="row">
                <div className="col mx-2 text-white d-flex justify-content-between loginHead shadow">
                    <img src="Images/EMS.png" alt="LOGO" className="logo_image m-2" />
                    <h1 className='mt-2 text-dark sm-text-hidden'>Employee Management System</h1>
                    <Link to="/adminregistration">
                        <button className='btn btn-secondary btn-outline-light rounded-2 m-2 p-3'>Registration</button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center vh-100">
                    <div className='p-3 rounded w-35 border loginForm'>
                        <div className='text-warning'>
                            {error && error}
                        </div>
                        <h2>Login Page</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label htmlFor="userName"><strong>Username:</strong></label>
                                <input
                                    type="text"
                                    name='userName'
                                    autoComplete='off'
                                    placeholder='Enter Username'
                                    className='form-control rounded-0'
                                    onChange={(e) => setValues({ ...values, userName: e.target.value })}
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="password"><strong>Password:</strong></label>
                                <input
                                    type="password"
                                    name='password'
                                    autoComplete='off'
                                    placeholder='Enter Password'
                                    className='form-control rounded-0'
                                    onChange={(e) => setValues({ ...values, password: e.target.value })}
                                />
                            </div>
                            <button className='btn btn-success w-100 rounded-0 mb-2'>Login</button>
                            <div className='mb-1'>
                                <input type="checkbox" name="tick" id="tick" className='me-2' />
                                <label htmlFor="tick">You agree with our terms and conditions</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default Login;