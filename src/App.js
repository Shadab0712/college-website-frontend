import './App.css';
import { useState } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import LogoImage from './utils/images/College_Logo.jpg';
import Facilities from './pages/Facilities/Facilities';
import NewUpdates from './components/NewUpdates/NewUpdate';
import AdminPanel from './pages/Admin/AdminPanel';
import Admin from './pages/Admin/Admin';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (status) => {
    setIsLoggedIn(status);
    if (status) {
      navigate('/adminPanel');
    } else {
      navigate('/');
    }
  };

  return (
    <div>
      <Navbar expand="lg" className='position-absolute w-100'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand d-flex align-items-center'>
              <img src={LogoImage} alt="College Logo" className="logo-image" />
              <span className='mx-2 text-light lh-1 fw-semibold'>
                Al Ibrahim
                <br />
                Mahavidhyalaya
                <br />
                Jhansi, Uttar Pradesh
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='/' className='text-uppercase'>Home</Nav.Link>
              <Nav.Link href='/courses' className='text-uppercase'>Courses</Nav.Link>
              <Nav.Link href='/about' className='text-uppercase'>About</Nav.Link>
              <Nav.Link href='/contact' className='text-uppercase'>Contact Us</Nav.Link>
              <Nav.Link href='/admin' className='text-uppercase ' >Admin
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2 14s-1 0-1-1 1-4 7-4 7 3 7 4-1 1-1 1H2z" />
                </svg>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/facilities' element={<Facilities />} />
        <Route path="/admin" element={<Admin onLogin={handleLogin} />} />
        <Route path="/adminPanel" element={<AdminPanel isAdminLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
        <Route path='/update' element={<NewUpdates isAdminLoggedIn={isLoggedIn} />} />
      </Routes>

      <footer>
        <div className='container my-5'>
          <div className='row d-flex justify-content-between align-items-center'>
            <div className='col-md-4'>
              <Link to="/contact">
                <button type='button' className='btn btn-outline-danger btn-lg mb-5 mb-md-4'>Get In Touch</button>
              </Link>
              <ul className='footer-social-icons list-unstyled d-flex align-items-left justify-content-left'>
                <li>
                  <a href="https://www.facebook.com/aqilahmad786/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#dc3545" className="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </a>
                </li>
                <li style={{ marginLeft: '10px' }}>
                  <a href="mailto:alibrahimmahavidhyalaya@gmail.com" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="35" fill="#dc3545" className="bi bi-envelope" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.803 2.882L15 11.383V5.383zM1 5.383v5.999l4.803-2.882L1 5.383zm5.803 3.077L2 12.617V12h12v.617l-4.803-2.882L8 9.27l-.197-.116z" />
                    </svg>
                  </a>
                </li>

              </ul>
            </div>
            <div className='col-md-7 col-lg-6'>
              <div className='row d-md-flex justify-content-between align-items-right'>
                <div className='col-12 col-md-6 col-lg-7'>
                  <ul className='list-unstyled mb-0'>
                    <li>
                      <p><strong>Main Address</strong> - Amarpur ( Rajapur Road ) Block-Babina, Jhansi, Uttar Pradesh</p>
                    </li>
                    <li>
                      <p><strong>Contact Numbers- </strong>
                        9515135343,
                        9453907214,
                        9721663862,
                        7571013311,
                        7317574447,
                        9839569763
                      </p>
                    </li>
                    <li>
                      <p><strong>Email- </strong> alibrahimmahavidhyalaya@gmail.com</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
      </footer>
    </div>
  );
}

export default App;
