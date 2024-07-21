import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
    return (
        <div className='faq-section'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
                <Accordion defaultActiveKey="" flush>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>What courses are available at Al Ibrahim Mahavidhyalaya ?
                        </Accordion.Header>
                        <Accordion.Body>
                            "Al Ibrahim Mahavidhyalaya offers undergraduate courses including B.A., B.Com, and B.Sc. in the fields of Humanities & Social Sciences, Accounting & Commerce, and Science."
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>How many seats are available across all courses offered at Al Ibrahim Mahavidhyalaya ?</Accordion.Header>
                        <Accordion.Body>
                            "Al Ibrahim Mahavidhyalaya offers degree programs, including 3 undergraduate courses, all offered in full-time mode. The total intake capacity across these courses is up to 120 seats."
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='2'>
                        <Accordion.Header>What are the eligibility criteria for admission to UG/PG courses at Al Ibrahim Mahavidhyalaya?</Accordion.Header>
                        <Accordion.Body>
                            <p>Al Ibrahim Mahavidhyalaya has specific eligibility criteria for its various courses:</p>
                            <ul>
                                <li><strong>B.A.:</strong> Candidates must have passed the 10+2 or equivalent examination from a recognized school/board.</li>
                                <li><strong>B.Com.:</strong> Candidates must have passed the 12th or equivalent examination with Commerce/Science with Mathematics stream from any recognized institute/board. Students from vocational streams are not eligible to apply.</li>
                                <li><strong>B.Sc.:</strong> Candidates must have passed the 10+2 or equivalent examination from a recognized school/board.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='3'>
                        <Accordion.Header>How is the infrastructure at Al Ibrahim Mahavidhyalaya ?</Accordion.Header>
                        <Accordion.Body>
                            Al Ibrahim Mahavidhyalaya provides excellent infrastructure facilities to its students, including an auditorium, cafeteria, gymnasium, hospital/medical facilities, hostel accommodation, well-equipped laboratories, extensive library resources, a sports complex, and a Wi-Fi enabled campus.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default FaqAccordion;