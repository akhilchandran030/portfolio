import React from "react";
import './projects.css';


const projectsData = [
    {
        title: "CRM Project",
        language: "Node.js, AWS, Serverless",
        description:
            "Collaborated on a team to develop a CRM tool for analyzing customer data. Implemented APIs for multiple admin and user logins, managed data addition and editing, and fetched data from DynamoDB to display on the site using AWS Lambda.",
        achievement: [
            "Automated data recording and sharing for admins by integrating all processes into a single platform.",
            "Made it easy to review and evaluate user-submitted data."
        ]
    },
    {
        title: "Unity Educational Game",
        language: "C#, Unity 2D",
        description:
            "Developed a Unity-based educational game aligned with the curriculum textbooks. Created multiple interactive scenes and implemented game mechanics using C# scripts.",
        achievement: [
            "Enhanced learning engagement through interactive gameplay.",
            "Facilitated easier learning through diverse educational activities."
        ]
    },
    {
        title: "Android Firewall Application",
        language: "Android Studio, Kotlin",
        description:
            "Developed an Android firewall application to restrict access to unauthorized websites on tablets used by students in an educational program.",
        achievement: [
            "Ensured only approved sites and domains are accessible, preventing misuse of tablets.",
            "Maintained secure and controlled tablet usage for students."
        ]
    },
    {
        title: "Personal Portfolio Website",
        language: "React",
        description:
            "Built a personal portfolio website to showcase skills, projects, and professional information in an organized and visually appealing way.",
        achievement: [
            "Simplified presentation of personal and project details.",
            "Integrated multiple project showcases for easy browsing and evaluation."
        ]
    },
    {
        title: "Multi-Tenant Educational Application",
        language: "Open edX, Python, JavaScript",
        description:
            "Developed a multi-tenant educational platform using Open edX, allowing multiple organizations to run their learning programs independently.",
        achievement: [
            "Enabled multiple organizations to use the platform according to their specific requirements.",
            "Provided an efficient way to present learning content and activities through e-learning modules."
        ]
    }
];

function Projects() {
    return (
        <div className="projects" id="projects">
            <h1 className="head">Projects</h1>
            <div className="projects_grid">
                {projectsData.map((project, index) => (
                    <div className="project_card" key={index}>
                        <h2>{project.title}</h2>
                        <h3>{project.language}</h3>
                        <h3>Achievements:</h3>
                        <ul>
                            {project.achievement.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Projects;