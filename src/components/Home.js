import React, { useState } from "react";
import {FaBars} from 'react-icons/fa'
import "../styles/Home.css";
import backgroundImage from "../assets/images/home_background.jpg";
import services from "../assets/images/services.jpg";
import knowus from '../assets/images/knowus.jpg';
import userIcon from '../assets/images/user.jpg';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import ContactSection from "./ContactSection";

// State for the navigation menu toggle
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false); // Close the navbar when an item is clicked
    };

    return (
        <div>
            <nav className="navbar">
                <div className="logo">SRI SAI TUITIONS</div>
                <FaBars className="hamburger" onClick={() => setIsOpen(!isOpen)} />
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li onClick={() => scrollToSection("home")}>Home</li>
                    <li onClick={() => scrollToSection("about")}>About</li>
                    <li onClick={() => scrollToSection("services")}>Services</li>
                    <li onClick={() => scrollToSection("knowus")}>Know Us</li>
                    <li onClick={() => scrollToSection("reviews")}>Reviews</li>
                    {/* <li onClick={() => scrollToSection("register")}>Register</li> */}
                    <li onClick={() => scrollToSection("contact")}>Contact</li>

                </ul>
            </nav>

            <div id="home" className="section" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <h1>Learn to Lead</h1>
                <h2>Your Goals</h2>
                <p>Learn More</p>
            </div>

            <div id="about" className="section">
                <div className="head">
                    <p>
                        <span className="intro">Why to choose</span>
                        <span className="name"> Sri Sai Tuitions?</span>
                    </p>
                </div>
                <div className="container">
                    <div className="info-box">
                        <img src={image1} alt="Customized Learning" />
                        <p>Best Tutors</p>
                        <p>We Promise you to provide the best tutors with knowledge and experience</p>
                    </div>
                    <div className="info-box">
                        <img src={image2} alt="Expert Tutors" />
                        <p>Helpful Notes</p>
                        <p>Our Tutors are equipped with notes they play a crucial role in helping children to grasp</p>
                    </div>
                    <div className="info-box">
                        <img src={image3} alt="Flexible Scheduling" />
                        <p>Flexible Schedule</p>
                        <p>We believe time is a very crucial aspect we plan everything to get covered within time</p>
                    </div>
                </div>
            </div>

            <div id="services" className="section">
                <h3 className="services-title">------Experience We Have------</h3>
                <div className="services-content">
                    <img src={services} alt="Services provided" className="services-image" />
                    <div className="services-info">
                        <p>
                            <span style={{ color: "white", fontWeight: "bold" }}>Unmatched</span>
                            <span style={{ color: "yellow", fontWeight: "bold" }}> Experience</span>
                        </p>
                        <p>Years of Knowledge</p>
                        <div className="services-cards">
                            <div className="card">
                                <span className="card-number">03</span>
                                <span className="card-text">years of experience</span>
                            </div>
                            <div className="card">
                                <span className="card-number">600+</span>
                                <span className="card-text">number of students</span>
                            </div>
                            <div className="card">
                                <span className="card-number">150+</span>
                                <span className="card-text">home tutors</span>
                            </div>
                        </div>
                        <div className="get-started">
                            <p>Get Started <span className="arrow-icon">➔</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="knowus" className="section">
                <h2>Know About Us</h2>
                <div className="knowus-content">
                    <div className="knowus-text">
                        <p>Our mission is to empower students to achieve their highest potential through personalized attention and a tailored educational experience.</p>
                        <p>We believe in fostering a learning environment that encourages curiosity, creativity, and critical thinking.</p>
                        <p>Our team consists of experienced educators who are passionate about teaching and are dedicated to the success of each student.</p>
                    </div>
                    <img src={knowus} alt="About Us" className="knowus-image" />
                </div>
            </div>

            <div id="reviews" className="section">
                <h2>Student Reviews</h2>
                <div className="reviews-container">
                    <div className="review-box">
                        <img src={userIcon} alt="User" className="user-icon" />
                        <div className="user-details">
                            <span className="username">Nikhil</span>
                            <span className="ratings">★★★★☆</span>
                        </div>
                        <p className="user-message">My son has been struggling with math for years, but after just a few sessions with his tutor from this site, his confidence and grades have soared. Couldn't be happier with the results!</p>
                    </div>
                    <div className="review-box">
                        <img src={userIcon} alt="User" className="user-icon" />
                        <div className="user-details">
                            <span className="username">Vinesh</span>
                            <span className="ratings">★★★★☆</span>
                        </div>
                        <p className="user-message">As a parent, I appreciate the detailed feedback and progress reports. The tutors are well qualified and have a genuine interest in my child's academic growth.</p>
                    </div>


                    <div className="review-box">
                        <img src={userIcon} alt="User" className="user-icon" />
                        <div className="user-details">
                            <span className="username">Pradeep</span>
                            <span className="ratings">★★★★☆</span>
                        </div>
                        <p className="user-message">This website has been a lifesaver! The tutors are professional, and the personalized approach has really made a difference in my daughter's education</p>
                    </div>

                    <div className="review-box">
                        <img src={userIcon} alt="User" className="user-icon" />
                        <div className="user-details">
                            <span className="username">Sourav</span>
                            <span className="ratings">★★★★☆</span>
                        </div>
                        <p className="user-message">Highly recommended! The tutors are skilled and patient, and they know how to keep my child engaged and motivated. We've seen a remarkable improvement in his grades</p>
                    </div>
                    <div className="review-box">
                        <img src={userIcon} alt="User" className="user-icon" />
                        <div className="user-details">
                            <span className="username">Anil</span>
                            <span className="ratings">★★★★☆</span>
                        </div>
                        <p className="user-message">The best tutoring service we've ever used. The convenience of online sessions combined with top-notch tutors has made a world of difference for my child</p>
                    </div>
                    <div className="review-box">
                        <img src={userIcon} alt="User" className="user-icon" />
                        <div className="user-details">
                            <span className="username">Saketh</span>
                            <span className="ratings">★★★★☆</span>
                        </div>
                        <p className="user-message">The personalized tutoring approach offered here is exceptional. It helps bridge the gap between classroom learning and individual understanding, leading to better academic performance</p>
                    </div>

                </div>
            </div>
            {/* <RegisterOrLogin /> */}
            <ContactSection />



        </div>
    );


};
export default Home;
