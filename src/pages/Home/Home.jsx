import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import NewUpdates from '../../components/NewUpdates/NewUpdate';


function Home() {

    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2>Welcome To</h2>
                    <h1 className='text-center fw-semibold mb-'>Al Ibrahim Mahavidhyalaya</h1>
                    <p>Established in 2016, Al Ibrahim Mahavidhyalaya is a leading educational institution located in Jhansi, Uttar Pradesh. We specialize in offering comprehensive undergraduate programs in a variety of disciplines, providing students with a solid foundation for their future careers.</p>
                    <p>At Al Ibrahim Mahavidhyalaya, our mission is to nurture academic excellence, foster critical thinking, and prepare students to become future leaders in their respective fields.</p>
                    <div className='d-flex flex-column flex-sm-row align-items-center'>
                        <Link to="/courses">
                            <button type='button' className='btn btn-danger'>Our Courses</button>
                        </Link>
                        <Link to="/contact">
                            <button type='button' className='btn btn-outline-light mx-sm-2 '>Contact Us</button>
                        </Link>
                    </div>
                </div>
            </header>

            <hr></hr>

            <hr></hr>

            <div className='py-5'>
                <NewUpdates />
            </div>

            <div className="py-5">
                <ChooseSection />
            </div>

            <div className='py-5 bg-light'>
                <div className="container">
                    <div className='row d-flex align-items-center justify-content-around'>
                        <div className='col-lg-5'>
                            <h2 className='text-capitalize'>Guidelines and Other Facilities</h2>
                            <p>"Explore our comprehensive college guidelines, diverse campus facilities, and available scholarship opportunities to support your academic journey."</p>
                            <Link to="/facilities">
                                <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                            </Link>
                        </div>
                        <div className='col-lg-5 mt-5 mt-lg-0'>
                            <img src={StartCoursesImg} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <hr></hr>

        </div>
    )
}

export default Home;
