import React, { useState } from 'react';
import './about.css';
import boy from './images/boy.png';

function About() {
    const [showImage, setShowImage] = useState(false);

    function toggleImage() {
        setShowImage(!showImage);
    }
    return (
        <section className='about' >
            <div className='about_top' id='about'>
                <div className='maindiv_about' >
                    <h1 className='whoami'>WHO AM I ?</h1>
                    <div className='left_boy'>
                        <img src={boy} alt='Who am i?' />
                    </div>
                    <div className='right_about' id='Aboutpage'>
                        <p>
                            Hi, I’m Akhil Chandran, an Associate Software Engineer based in Trivandrum with
                            2 years of hands-on experience (including 1 year industry experience) building full-stack web applications.
                        </p>

                        <p>
                            I work primarily on backend and full-stack development, using Java, Spring Boot,
                            React, Node.js, Python, and AWS (serverless) to build scalable, production-ready
                            features. My experience includes designing REST APIs, integrating databases, and
                            developing interactive frontend modules.
                        </p>

                        <p>
                            I’ve contributed to real-world projects across healthcare and training platforms,
                            taking ownership of both frontend and backend components.
                        </p>

                        <p>
                            I hold a B.Sc. in Computer Science and am currently pursuing my MCA from IGNOU.
                            I focus on writing clean, maintainable code and continuously improving my system
                            design and backend engineering skills.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;