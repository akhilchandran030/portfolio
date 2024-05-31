import React from "react";
import './projects.css';
import hospital from './images/hospital.png';
import travel from './images/travel.jpg';
import training from './images/training.jpg';

function Projects() {
    return (
        <>
            <div className="projects" >
                <h1 className="empty">empty</h1>
                <div className="projects_sub" id='projects'>
                    <h1 className="head">Projects</h1>
                    <div className="first_project">
                        <h1 className="heading">Hospital Management System</h1>
                        <div className="pro1">
                            <div className="pro1_img">
                                <img src={hospital} alt="hospital image" />
                            </div>
                            <div className="pro1_details">
                                <p>Developed a comprehensive hospital management system to streamline administrative and patient
                                    management processes. The system includes modules for patient registration, appointment scheduling,
                                    medical records, billing, and reporting.</p>
                                <ul>
                                    <li><b>Technologies/Tools Used :</b> HTML, CSS, Bootstrap, PHP, MySQL.</li>
                                    <li><b> Achievements/Results : </b>Implemented a user-friendly interface that increased user retention. Collaborated with
                                        a team of 4 members and completed the project 1 week ahead of schedule.Enhanced system performance
                                        and reduced load times by optimizing database queries</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="second_project">
                        <h1 className="heading">Training Institute Website</h1>
                        <div className="pro2">
                            <div className="pro2_img">
                                <img src={training} alt="Institution image" />
                            </div>
                            <div className="pro2_details">
                                <p>Built a website of Software training institution using Spring Boot.Which includes registration page with
                                    email verification and otp login , And home, about, contact, dashboard, course ,update profile pages.Used
                                    MySQL for database management.</p>
                                <ul>
                                    <li><b>Technologies/Tools Used : </b>HTML, CSS, Bootstrap,Javascript,Java,Springboot,MySQL.</li>
                                    <li><b> Achievements/Results : </b> Created a website where students can register and signup for courses</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="third_project">
                        <h1 className="heading">Travel Agency Webpage</h1>
                        <div className="pro3">
                            <div className="pro3_img">
                                <img src={travel} alt="Travel Agency image" className="travel_img" />
                            </div>
                            <div className="pro3_details">
                                <p>Designed a Travel agency website using Html,Css,Javascript with Home,About,Trips and Contact pages.A user can interact with the webpage to browse certain details about the agency,can check their recent trips,contact nearest office ,etc.</p>
                                <ul>
                                    <li><b>Technologies/Tools Used : </b>HTML, CSS,Javascript.</li>
                                    <li><b> Achievements/Results : </b>Designed a user friendly interface for travel agency webpage.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;