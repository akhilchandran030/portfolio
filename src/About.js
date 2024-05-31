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
                        <p className='paragraph'> I'm Akhil Chandran, a recent graduate with a <b>BSc in Computer Science</b> from Manonmaniam Sundaranar University. My journey into the world of technology has been enriched by my passion for problem-solving and my dedication to mastering various programming languages and tools.<br /><br />

                            I honed my skills in <b>Java Full Stack Development</b> through rigorous training at Scope India Software Training Institute, where I delved into HTML, CSS, JavaScript, React, MySQL, Java, and Spring Boot. During my educational journey, I completed impactful projects like designing a <b>Travel Agency website</b> and developing a <b>Training Institute Website using Spring Boot</b>.<br /><br />

                            To complement my practical experience, I pursued <b>certifications in Object-Oriented Programming in Java and Frontend Development from GreatLearning</b>, solidifying my knowledge and expertise in these domains. Additionally, my training has equipped me with valuable communication skills, essential for collaborating effectively in team environments.<br /><br />

                            Now, armed with a diverse skill set and a thirst for new challenges, I am eager to embark on my professional journey. I am actively seeking entry-level opportunities where I can apply my skills, contribute meaningfully, and continue to grow as a developer and a problem solver.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;