import React, { useRef, useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactSection() {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Sending the form using emailjs with form reference
        emailjs.sendForm('service_yli0n8p', 'template_grpd159', form.current, 'BVEszTZyzlZULFvIu')
        .then(
            (response) => {
                console.log('SUCCESS!', response.text);
                setFormData({ name: '', email: '', phone: '', message: '' }); // Optionally reset the form
                toast.success("Form submitted successfully!");
            },
            (error) => {
                console.log('FAILED...', error.text);
                toast.error("Failed to submit the form.");
            }
        );
    };

    return (
        <div id="contact" className="section">
            <div className="contact-info">
                <h2>Contact Information</h2>
                <h3><FaPhone /> Phone: (+91) 9059197326</h3>
                <h3><FaEnvelope /> Email: alokekumar9059@gmail.com</h3>
                <h3><FaMapMarker /> Address: 18-1-300 Shivaji Nagar, Uppuguda, Hyderabad -500053</h3>
            </div>
            <div className="contact-form">
                <h3>Contact <span style={{ color: 'yellow' }}>Us</span></h3>
                <form ref={form} onSubmit={handleSubmit}>
                    <input type="text" id="name" name="name" placeholder='Enter your name' value={formData.name} onChange={handleChange} />
                    <input type="email" id="email" name="email" placeholder='Enter your email' value={formData.email} onChange={handleChange} />
                    <input type="tel" id="phone" name="phone" placeholder='Enter your phone number' value={formData.phone} onChange={handleChange} />
                    <textarea id="message" name="message" placeholder='Enter your message' value={formData.message} onChange={handleChange}></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default ContactSection;

// import React, { useRef, useState, useEffect } from 'react';
// import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';
// import { auth } from '../firebase/firebaseConfig';  
// import emailjs from '@emailjs/browser';
// import { onAuthStateChanged } from "firebase/auth";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function ContactSection() {
//     const form = useRef();
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         message: ''
//     });
//     const [user, setUser] = useState(null);

//     // Listen for changes in the authentication state
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);  // Set user if logged in, null otherwise
//         });
//         return () => unsubscribe();  // Cleanup listener
//     }, []);

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!user) {
//             toast.warn("Please sign in first!");
//             return;
//         }
//         // Sending the form using emailjs with form reference
//         emailjs.sendForm('service_yli0n8p', 'template_grpd159', form.current, '6gc2h7ehNpuE1D2YU')
//         .then(
//             (response) => {
//                 console.log('SUCCESS!', response.text);
//                 setFormData({ name: '', email: '', phone: '', message: '' }); // Optionally reset the form
//                 toast.success("Form submitted successfully!");
//             },
//             (error) => {
//                 console.log('FAILED...', error.text);
//                 toast.error("Failed to submit the form.");
//             }
//         );
//     };

//     return (
//         <div id="contact" className="section">
//             <div className="contact-info">
//                 <h2>Contact Information</h2>
//                 <h3><FaPhone /> Phone: (+91) 9059197326</h3>
//                 <h3><FaEnvelope /> Email: alokekumar9059@gmail.com</h3>
//                 <h3><FaMapMarker /> Address: 18-1-300 Shivaji Nagar, Uppuguda, Hyderabad -500053</h3>
//             </div>
//             <div className="contact-form">
//                 <h3>Contact <span style={{ color: 'yellow' }}>Us</span></h3>
//                 <form ref={form} onSubmit={handleSubmit}>
//                     <input type="text" id="name" name="name" placeholder='enter your name' value={formData.name} onChange={handleChange} />
//                     <input type="email" id="email" name="email" placeholder='enter your email' value={formData.email} onChange={handleChange} />
//                     <input type="tel" id="phone" name="phone"placeholder='enter your phone number' value={formData.phone} onChange={handleChange} />
//                     <textarea id="message" name="message" placeholder='enter your requirement ex class, syllabus etc' value={formData.message} onChange={handleChange}></textarea>
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//             <ToastContainer />
//         </div>
//     );
// }

// export default ContactSection;
