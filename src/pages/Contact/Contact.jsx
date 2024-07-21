import React, { useState } from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        address: '',
        message: ''
    });
    
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        address: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        let newError = '';

        // Perform validation based on field name
        switch (name) {
            case 'firstName':
                break;
            case 'lastName':
                break;
            case 'address':
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    newError = 'Please enter a valid email address.';
                }
                break;

            case 'mobileNumber':
                if (value.length !== 10) {
                    newError = 'Mobile number should be exactly 10 digits.';
                }
                break;
            default:
                break;
        }

        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: newError });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:8080/api/v1/users/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
                setError('');
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Something went wrong!');
            }
        } catch (err) {
            setError('Something went wrong!');
        } finally {
            setIsLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className='contact-page'>
                <header className='height-75'>
                    <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                        <h1 className='text-center fw-semibold'>Contact Us</h1>
                        <p className='text-center w-75 mb-5'>Visit us today to explore our campus and discover why Al Ibrahim Mahavidhyalaya is the ideal choice for your higher education journey.</p>
                    </div>
                </header>

                <div className='container my-5 d-flex justify-content-center'>
                    <h3 className='text'>
                        Query submitted successfully  ------ We will contact you soon !!
                    </h3>
                </div>
                <hr></hr>
            </div>
        );
    }

    return (
        <div className='contact-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>Contact Us</h1>
                    <p className='text-center w-75 mb-5'>Visit us today to explore our campus and discover why Al Ibrahim Mahavidhyalaya is the ideal choice for your higher education journey.</p>
                </div>
            </header>

            <hr></hr>
            <hr></hr>

            <div className='container my-5 d-flex justify-content-center'>
                <Form id='contact-form' onSubmit={handleSubmit}>
                    <Row className='mb-3'>
                        <Col sm={12} md={6} className='mb-3 mb-md-0'>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                name='firstName'
                                placeholder='Enter First name'
                                value={formData.firstName}
                                onChange={handleChange}
                                isInvalid={!!errors.firstName}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.firstName}
                            </Form.Control.Feedback>
                        </Col>
                        <Col sm={12} md={6}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                name='lastName'
                                placeholder='Enter Last name'
                                value={formData.lastName}
                                onChange={handleChange}
                                isInvalid={!!errors.lastName}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.lastName}
                            </Form.Control.Feedback>
                        </Col>
                    </Row>

                    <Form.Group className='mb-3'>
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                            name='mobileNumber'
                            placeholder='Enter Mobile number'
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            isInvalid={!!errors.mobileNumber}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {errors.mobileNumber}
                        </Form.Control.Feedback>
                        <Form.Text className='text-muted'>
                            We'll never share your Mobile Number with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type='email'
                            name='email'
                            placeholder='Enter email'
                            value={formData.email}
                            onChange={handleChange}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {errors.email}
                        </Form.Control.Feedback>
                        <Form.Text className='text-muted'>
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            name='address'
                            placeholder='Your address'
                            value={formData.address}
                            onChange={handleChange}
                            isInvalid={!!errors.address}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {errors.address}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            isInvalid={!!errors.message}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {errors.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="danger btn-lg" type='submit' disabled={isLoading}>
                        {isLoading ? 'Submitting...' : 'Submit'}
                    </Button>
                    {error && <div className='text-danger mt-3'>{error}</div>}
                </Form>
                {isLoading && (
                    <div className='loading-overlay'>
                        <div className='spinner'></div>
                    </div>
                )}
            </div>
            <hr></hr>
        </div>
    );
}

export default Contact;
