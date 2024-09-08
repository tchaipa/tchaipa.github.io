import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
<<<<<<< HEAD
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon4 from '../assets/img/githubb.svg';
import navIcon5 from '../assets/img/contrast-icon.svg';
=======
import image from '../assets/img/zeus.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';

// import navIcon5 from '../assets/img/contrast-icon.svg';
// import { HashLink } from 'react-router-hash-link';
>>>>>>> 24e9bb8901908f8fe1cb4f2080b145bbda5d3761
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
<<<<<<< HEAD
=======
  const [isDarkMode, setIsDarkMode] = useState(false);
>>>>>>> 24e9bb8901908f8fe1cb4f2080b145bbda5d3761

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
<<<<<<< HEAD
          <h1>Portfolio</h1>
=======
        <Navbar.Brand href="/">
          <img
              src= {image}
              height='100'
              width= 'auto'
              alt=''
              loading='lazy'
            />
            
          </Navbar.Brand>
          {/* <h1>Portfolio</h1> */}
>>>>>>> 24e9bb8901908f8fe1cb4f2080b145bbda5d3761
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
<<<<<<< HEAD
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
=======
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
>>>>>>> 24e9bb8901908f8fe1cb4f2080b145bbda5d3761
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://linkedin.com/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/"><img src={navIcon4} alt="" /></a>
<<<<<<< HEAD
                <a href="/"><img src={navIcon5} alt="" /></a>
              </div>

=======
              </div>
>>>>>>> 24e9bb8901908f8fe1cb4f2080b145bbda5d3761
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

