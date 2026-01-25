import React, { useState } from 'react';
import './about.css';
import boy from './images/boy.png';
import Whatsapp from './images/whatsapp.png';
import Message from './images/Message.jpg';

function About() {
    const [showImage, setShowImage] = useState(false);

    function toggleImage() {
        setShowImage(!showImage);
    }
    return (
        <section className='about' >
            <div className='about_top' id='about'>
                <h1 className='empty'>empty</h1>
                <div className='maindiv_about' >
                    <h1 className='whoami'>WHO AM I ?</h1>
                    <div className='left_boy'>
                        <img src={boy} alt='Who am i?' />
                    </div>
                    <div className='right_about' id='Aboutpage'>
                        <p className='paragraph'>Hi, I’m Akhil Chandran, an Associate Software Engineer based in Trivandrum with 1+ year of hands-on experience building full-stack web applications.<br><br></br></br>

                            I work primarily on backend and full-stack development, using Java, Spring Boot, React, Node.js, Python, and AWS (serverless) to build scalable, production-ready features. My experience includes designing REST APIs, integrating databases, and developing interactive frontend modules.<br>

                            I’ve contributed to real-world projects across healthcare and training platforms, taking ownership of both frontend and backend components.<br><br></br></br>

                            I hold a B.Sc. in Computer Science and am currently pursuing my MCA from IGNOU. I focus on writing clean, maintainable code and continuously improving my system design and backend engineering skills.</p>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;