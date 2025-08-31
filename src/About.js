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
                        <h1 >Hei all...
                            <img src={Whatsapp} alt="Whatsapp" className='whatsapp_logo' onClick={toggleImage} />
                            {showImage && (
                                <div className='message_div'>
                                    <span className='close' onClick={toggleImage}>&times;</span>
                                    <img src={Message} alt='info' />
                                </div>
                            )
                            }
                        </h1>
                        <p className='paragraph'>
  Hi, my name is Akhil Chandran, and I am currently working as an <b>Associate Software Engineer at zDistanceLab</b>, Trivandrum. In my role, I work on various software development projects using <b>Java, Spring Boot, MySQL, and C#</b>, contributing to full-stack applications and interactive modules. I have completed projects such as a <b>Hospital Management System</b> and a <b>Training Institute Website</b>, applying both frontend and backend development skills to deliver effective solutions.<br /><br />

  I hold a <b>B.Sc. in Computer Science</b> from Malankara Catholic College, Kanyakumari, and I am currently pursuing my <b>MCA from IGNOU</b>. I also completed <b>Java Full Stack Development training at Scope India</b>, working extensively with Java, Spring Boot, MySQL, HTML, CSS, and JavaScript. Additionally, I have earned certifications in <b>Java Full Stack Development with Spring Boot</b>, which have strengthened my technical expertise and problem-solving abilities. With this blend of education and professional experience, I am eager to contribute meaningfully in software development roles and continue growing as a developer.
</p>
                            
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;