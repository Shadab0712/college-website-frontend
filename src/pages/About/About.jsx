import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';

function About() {
    return (
        <div className='about-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>About Us</h1>
                    <p className='text-center w-75 mb-5'>At Al Ibrahim Mahavidhyalaya, our mission is to nurture academic excellence, foster critical thinking, and prepare students to become future leaders in their respective fields.
                    </p>
                </div>
            </header>

            <hr></hr>

            <div className='container my-5'>
                <div className="row">
                    <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                        <h2 className='mb-4 mb-lg-5'>Study with us</h2>
                        <ul className='mb-4 mb-lg-5'>
                            <li>Welcome to Al Ibrahim Mahavidhyalaya, where we strive to empower our students with knowledge and skills that prepare them for a successful future.</li>
                            <li>Our institution offers a comprehensive selection of undergraduate programs, including B.Sc., B.Com., and B.A. in Science, Accounting & Commerce, and Humanities & Social Sciences.</li>
                            <li>With a focus on academic rigor and innovation, our dedicated faculty members bring extensive industry experience and academic expertise into the classroom, ensuring a rich learning environment.</li>
                            <li>Our campus is equipped with modern facilities such as well-equipped laboratories, a vast library, sports complexes, and a Wi-Fi enabled environment, providing students with the resources they need to excel academically and personally.</li>
                            <li>At Al Ibrahim Mahavidhyalaya, we are committed to nurturing holistic development through a blend of theoretical knowledge and practical experience, supported by personalized mentoring and career guidance.</li>
                        </ul>
                        <Link to="/contact">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                        </Link>
                    </div>
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <img src={AboutUsSectionImg} className='img-fluid w-75' alt="About Us" />
                    </div>
                </div>
            </div>
            <hr></hr>

        </div>
    )
}

export default About;