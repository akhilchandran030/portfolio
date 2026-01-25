import React from "react";
import './Skills.css';


const skillsData = [
    {
        title: "AWS",
        description:
            "Worked with AWS serverless architecture using Lambda and related services to build scalable backend functionality.",
    },
    {
        title: "Java & Spring Boot",
        description:
            "Developed full-stack applications using Java and Spring Boot, including REST APIs, business logic, and database integration.",
    },
    {
        title: "React",
        description:
            "Built responsive user interfaces using React, focusing on component-based architecture and clean state management.",
    },
    {
        title: "Node.js",
        description:
            "Created backend services and APIs using Node.js, handling authentication, data processing, and integrations.",
    },
    {
        title: "Python",
        description:
            "Used Python for backend scripting and application logic where lightweight and fast solutions were required.",
    },
    {
        title: "MySQL",
        description:
            "Designed and managed relational databases, wrote optimized queries, and handled schema design.",
    },
    {
        title: "DynamoDB",
        description:
            "Worked with AWS DynamoDB for NoSQL data modeling using partition and sort keys, designed scalable tables, and optimized access patterns for serverless applications.",
    },
    {
        title: "PostgreSQL",
        description:
            "Designed and managed relational databases, created normalized schemas, wrote optimized SQL queries, and handled indexing and performance tuning.",
    },
    {
        title: "REST APIs",
        description:
            "Designed and developed RESTful APIs with proper HTTP methods, status codes, request/response validation, and authentication for backend services.",
    }
];

function Skills() {
    return (
        <div className="skills_main" id="skills">
            <h2 className="skills_title">Skills</h2>

            <div className="skills_grid">
                {skillsData.map((skill, index) => (
                    <div className="skill_card" key={index}>
                        <h3>{skill.title}</h3>
                        <p>{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Skills