import React from "react";
import './Skills.css';
import skills from './images/skills.png';
import html from './images/html.png';
import css from './images/Css.png';
import javascript from './images/javascript.png';
import bootstrap from './images/Bootstrap.png';
import react from './images/React.png';
import java from './images/java.png';
import spring from './images/spring.png';
import mysql from './images/mySQL.png';
import php from './images/php.png';

function Skills() {
    return (
        <>
            <div className="skills_main" id="skills">
                <div className="skills_sub" >
                    <div className="skills_head">
                        <h1 >SKILLS</h1>
                    </div>
                    <div className="skill_div2">
                        <div className="skill_left">
                            <img src={skills} alt="skills image" />
                        </div>
                        <div className="skill_right">
                            <img src={html} alt="html" className="image" />
                            <img src={css} alt="css" className="image" />
                            <img src={javascript} alt="javascript" className="image" />
                            <img src={bootstrap} alt="bootstrap" className="image" />
                            <img src={react} alt="react" className="image" />
                            <img src={java} alt="java" className="image" />
                            <img src={spring} alt="springboot" className="image" />
                            <img src={mysql} alt="mysql" className="image" />
                            <img src={php} alt="php" className="image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Skills