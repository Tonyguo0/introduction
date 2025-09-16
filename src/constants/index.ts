import { mobile, backend, web, javascript, typescript, html, css, reactjs, angular, tailwind, nodejs, mongodb, computer, git, docker, ibm, vix_technology, portfolio, country, noteapp, threejs, java, TVBbooking } from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About"
    },
    {
        id: "work",
        title: "Work"
    },
    {
        id: "contact",
        title: "Contact"
    }
];

const services = [
    {
        title: "Web Developer",
        icon: web
    },
    {
        title: "Backend Developer",
        icon: backend
    },
    {
        title: "Android Developer",
        icon: mobile
    }
];

export interface Itechnology {
    name?: string;
    icon?: string;
}

const technologies = [
    {
        name: "HTML 5",
        icon: html
    },
    {
        name: "CSS 3",
        icon: css
    },
    {
        name: "JavaScript",
        icon: javascript
    },
    {
        name: "Java",
        icon: java
    },
    {
        name: "TypeScript",
        icon: typescript
    },
    {
        name: "React JS",
        icon: reactjs
    },
    {
        name: "Angular",
        icon: angular
    },
    {
        name: "Tailwind CSS",
        icon: tailwind
    },
    {
        name: "Three JS",
        icon: threejs
    },
    {
        name: "Node JS",
        icon: nodejs
    },
    {
        name: "MongoDB",
        icon: mongodb
    },

    {
        name: "git",
        icon: git
    },
    {
        name: "docker",
        icon: docker
    }
];

const computerIcon = {
    name: "computer",
    icon: computer
};

export interface Iexperiences {
    experience: {
        title: string;
        company_name: string;
        icon: string;
        iconBg: string;
        date: string;
        points: string[];
    };
}

const experiences = [
    {
        title: "Graduate Software Developer",
        company_name: "IBM",
        icon: ibm,
        iconBg: "#383E56",
        date: "March 2021 - August 2022",
        points: ["Implemented unit tests and business logic using Java Enterprise, leveraging SOAP infrastructure along with Controller, Service, and DAO frameworks for a large electricity utility client.", "Designed and delivered a proof-of-concept application for a major oil and gas client, built with Angular, Java, and MongoDB, demonstrating full-stack capabilities.", "Collaborated within a team to design, develop, and present a proof-of-concept speech-to-text application using the React, Node.js, and MongoDB stack, showcasing modern web development and AI integration."]
    },
    {
        title: "Software Engineer",
        company_name: "Vix technology",
        icon: vix_technology,
        iconBg: "#E6DEDD",
        date: "Sept 2022 - now",
        points: ["Develop and maintain web applications and backend services using Angular, Java, and related technologies within an agile environment.", "Monitored and maintained AWS infrastructure, including EC2 instances, RDS, ECS, and supporting architectures, ensuring reliability and scalability.", "Designed and implemented automated deployment pipelines with Bitbucket Pipelines, AWS CodePipeline, and AWS CDK (Python) to provision an Ansible-based Ubuntu virtual environment, enabling new learners to experiment in a cloud sandbox."]
    }
];

export interface Itestimonials {
    index: number;
    testimonial: string;
    name: string;
    designation: string;
    company: string;
    image: string;
}

const testimonials = [
    {
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
        testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg"
    }
];

export interface Iprojectcard {
    index: number;
    name: string;
    description: string;
    tags: Array<{ name: string; color: string }>;
    image: string;
    source_code_link: string;
}

const projects = [
    {
        name: "Event Booking System",
        description: "Web-based application that allows users to book events and admins to manage their bookings with data stored in google sheets.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient"
            },
            {
                name: "bun",
                color: "white-text-gradient"
            },
            {
                name: "elysiaJS",
                color: "pink-text-gradient"
            },
            {
                name: "google-api",
                color: "green-text-gradient"
            }
        ],
        image: TVBbooking,
        source_code_link: "https://github.com/Tonyguo0/TVB-Booking"
    },
    {
        name: "This portfolio Page",
        description: "Web-based portfolio page that allows anyone to browse my experience, technologies I've used and project I've done in the past.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient"
            },
            {
                name: "three.js",
                color: "green-text-gradient"
            },
            {
                name: "tailwind",
                color: "pink-text-gradient"
            }
        ],
        image: portfolio,
        source_code_link: "https://github.com/Tonyguo0/introduction"
    },
    {
        name: "Statistics of the World",
        description: "Reactive Web application that enables users to search for a countries, and see the capital, area, flag, languages and weather of the capital city based on the country they search for.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient"
            },
            {
                name: "javascript",
                color: "green-text-gradient"
            },
            {
                name: "openweatherapi",
                color: "pink-text-gradient"
            }
        ],
        image: country,
        source_code_link: "https://github.com/tonyguo0"
    },
    {
        name: "Blog list",
        description: "bloglist application, allows users to save information about interesting blogs they have stumbled across on the internet, each listed blog we will save the author, title, url and amount of upvotes from users of the application.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient"
            },
            {
                name: "nodejs",
                color: "green-text-gradient"
            },
            {
                name: "mongodb",
                color: "pink-text-gradient"
            }
        ],
        image: noteapp,
        source_code_link: "https://github.com/"
    }
];

export { services, technologies, experiences, testimonials, projects, computerIcon };
