import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import ArtCourseImg from '../../utils/images/art-course.jpg';
import BusinessCourseImg from '../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: [ArtCourseImg],
        title: 'Bachelor of Arts (B.A)',
        description: 'Bachelor of Arts (BA) in English is a 3-year undergraduate academic course in the language English and English Literature.',
        features: [
            <div>
                <p><strong>Subjects included:</strong></p>
                <p >History ,English, Sociology, Economics, Political Science , Urdu</p>
            </div>
        ]
    },
    {
        id: 2,
        img: [BusinessCourseImg],
        title: 'Bachelor of Commerce (B.Com)',
        description: 'It is a popular undergraduate degree in commerce. The BCom course spans three years, divided into six semesters. The scope of a BCom degree is vast and diverse. Its graduates can pursue careers in accounting, finance, banking, and management.',
        features: [
            <div>
                <p><strong>( All Subjects ) </strong></p>
            </div>
        ]
    },
    {
        id: 3,
        img: [ComputerScienceCourseImg],
        title: 'Bachelor of Science (B.Sc)',
        description: 'It is a 3-year undergraduate degree that imparts knowledge and skills in students with subjects related to Science.',
        features: [
            <div>
                <p><strong>Subjects included:</strong></p>
                <p >Physics ,Chemistry, Maths, Biology</p>
            </div>
        ]
    },
];

function Courses() {
    return (
        <div className='courses-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>Our Courses</h1>
                    <p className='text-center w-75 mb-5'>At Al Ibrahim Mahavidhyalaya, we offer a diverse range of undergraduate programs designed to equip students with the knowledge and skills necessary to excel in their chosen fields. Our courses are crafted to provide a blend of theoretical knowledge and practical experience, ensuring a comprehensive learning experience.</p>
                </div>
            </header>

            <hr></hr>

            <div className='container py-5'>
                <div className='row g-4'>
                    {courses.map((course) => (
                        <div key={course.id} className='col-lg-6'>
                            <Card className='text-white shadow scale-hover-effect'>
                                <Card.Img src={course.img} />
                                <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                    <Card.Title className='fs-2 text-danger'>{course.title}</Card.Title>
                                    <Card.Text className='text-center'>{course.description}</Card.Text>
                                    <Card.Text className='text-center'>{course.features}</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            <hr></hr>

            <div className='bg-dark text-light py-5'>
                <FaqAccordion />
            </div>
            <hr></hr>
        </div>
    )
}

export default Courses;