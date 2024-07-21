import './Admin.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Admin({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            const timer = setTimeout(() => {
                onLogin(false);
                alert('Session timed out. Please log in again.');
            }, 20 * 60 * 1000); // 20 minutes

            return () => clearTimeout(timer);
        }
    }, [isLoggedIn, onLogin]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'Aqil@1786') {
            setIsLoggedIn(true);
            onLogin(true);
            navigate('/adminPanel');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className='admin-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold margin-top-20'>Admin Login</h1>
                    <p className='text-center w-75 mb-5'>Enter Admin Credentials for successful Login.</p>
                    <Form id='contact-form' onSubmit={handleSubmit} className='w-100 px-3'>
                        <Form.Group className='mb-3'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type='text'
                                name='username'
                                placeholder='Enter username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                name='password'
                                placeholder='Enter password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant='primary' type='submit' className='w-100'>
                            Login
                        </Button>
                    </Form>
                </div>
            </header>
            <hr></hr>
        </div>
    );
}

export default Admin;
