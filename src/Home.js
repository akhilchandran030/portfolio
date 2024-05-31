import React from 'react';
import './home.css';
import photo from './images/propic.jpeg';
import Linkedin from './images/Linkedin.png';
import Instagram from './images/Instagram.png';
import Github from './images/Github.png';
import Whatsapp from './images/whatsapp.png';

const Home = () => {
    const linkedIn = 'https://www.linkedin.com/in/akhilchandrancs';
    const instagram = 'https://www.instagram.com/akhix_';
    const github = 'https://github.com/akhilchandran030';
    const whatsappUrl = 'https://wa/+918137823254';
    return (
        <>
            <div className="maindiv" id='home'>
                <h1 className='fake'>Fake</h1>
                <div className='maindiv_home'>
                    <div className='photo-container'>
                        <img src={photo} alt="photo" className='photo' />
                    </div>
                    <div className='icons'>
                        <a className="linkedin" href={linkedIn} target='blank'>
                            <img src={Linkedin} alt="Linkedin" />
                        </a>
                        <a className="instagram" href={instagram} target='blank' >
                            <img src={Instagram} alt="Instagram" />
                        </a>
                        <a className="github" href={github} target='blank'>
                            <img src={Github} alt="Github" />
                        </a>
                        <a className="whatsapp" href={whatsappUrl} target='blank' >
                            <img src={Whatsapp} alt="Whatsapp" />
                        </a>
                    </div>
                    <div className='para'>
                        <h1>Hello</h1>
                        <h1>I'm Akhil Chandran</h1>
                        <h2>Full Stack Java Developer</h2>
                        <p>Welcome to my portfolio home page,showcasing the work of a dedicated Java Full Stack Developer.<br />
                        </p>
                    </div>
                    <div className='cv_button'>
                        <button className='download_cv'><a className='download_cv' href="/files/Akhil_Chandran_Resume.pdf" target='_blank' download>Resume</a></button>
                    </div>
                </div >
            </div>
        </>
    );
}

export default Home;