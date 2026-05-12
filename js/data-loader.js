// Data Loader - Loads and populates content sections

class DataLoader {
    constructor() {
        this.data = {
            about: {
                bio: "I am a passionate Software Engineer with expertise in full-stack development, blockchain technology, and scalable backend systems. I love building innovative solutions that solve real-world problems and push the boundaries of what's possible with technology."
            },
            services: [
                {
                    icon: "code-outline",
                    title: "Web Development",
                    description: "Building responsive, high-performance websites and web applications using modern frameworks and best practices."
                },
                {
                    icon: "logo-blockchain",
                    title: "Blockchain Development",
                    description: "Creating decentralized applications (dApps), smart contracts, and blockchain solutions for various industries."
                },
                {
                    icon: "server-outline",
                    title: "Backend Systems",
                    description: "Designing and implementing scalable, secure backend architectures with databases, APIs, and cloud services."
                },
                {
                    icon: "mobile-outline",
                    title: "Mobile Applications",
                    description: "Developing cross-platform mobile apps that deliver seamless user experiences on iOS and Android devices."
                },
                {
                    icon: "wifi-outline",
                    title: "IoT Solutions",
                    description: "Building interconnected systems and devices that communicate and exchange data for smart environments."
                }
            ],
            skills: [
                "JavaScript/TypeScript",
                "Python",
                "Solidity",
                "React/Vue/Angular",
                "Node.js/Express",
                "PostgreSQL/MongoDB",
                "AWS/Docker/Kubernetes",
                "Git/CI-CD",
                "RESTful APIs",
                "GraphQL"
            ],
            resume: {
                education: [
                    {
                        degree: "Bachelor of Science in Computer Science",
                        institution: "University of Technology",
                        year: "2018 - 2022",
                        description: "Focused on software engineering principles, algorithms, and data structures."
                    }
                ],
                experience: [
                    {
                        position: "Senior Software Engineer",
                        company: "Tech Innovations Inc.",
                        year: "2022 - Present",
                        description: "Led development of blockchain-based solutions and microservices architecture."
                    },
                    {
                        position: "Full Stack Developer",
                        company: "Web Solutions Ltd.",
                        year: "2020 - 2022",
                        description: "Developed full-stack applications for clients across various industries."
                    }
                ]
            },
            projects: [
                {
                    id: 1,
                    title: "Decentralized Exchange (DEX)",
                    category: "Web3",
                    image: "./assets/images/project1.jpg",
                    description: "A peer-to-peer cryptocurrency exchange built on Ethereum blockchain with smart contracts for automated trading.",
                    technologies: ["Solidity", "React", "Web3.js", "Node.js"],
                    link: "#",
                    github: "#"
                },
                {
                    id: 2,
                    title: "E-commerce Platform",
                    category: "Web2",
                    image: "./assets/images/project2.jpg",
                    description: "A full-featured e-commerce platform with payment integration, inventory management, and user authentication.",
                    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
                    link: "#",
                    github: "#"
                },
                {
                    id: 3,
                    title: "Smart Home IoT System",
                    category: "IoT",
                    image: "./assets/images/project3.jpg",
                    description: "An interconnected home automation system allowing remote control of lights, temperature, and security devices.",
                    technologies: ["Arduino", "Raspberry Pi", "MQTT", "Python", "Vue.js"],
                    link: "#",
                    github: "#"
                }
            ],
            blog: [
                {
                    id: 1,
                    title: "Getting Started with Blockchain Development",
                    date: "May 10, 2026",
                    excerpt: "Learn the basics of blockchain development, smart contracts, and decentralized applications in this comprehensive guide.",
                    readTime: "5 min read",
                    image: "./assets/images/blog1.jpg"
                },
                {
                    id: 2,
                    title: "Modern Web Performance Optimization Techniques",
                    date: "April 25, 2026",
                    excerpt: "Discover proven strategies to improve website loading times, core web vitals, and overall user experience.",
                    readTime": "7 min read",
                    image: "./assets/images/blog2.jpg"
                }
            ]
        };
    }

    loadAbout() {
        const aboutContent = document.querySelector('.about .actual-content');
        if (aboutContent) {
            aboutContent.innerHTML = `<p>${this.data.about.bio}</p>`;
        }
    }

    loadServices() {
        const servicesContent = document.querySelector('.service .actual-content');
        if (servicesContent) {
            const serviceItems = this.data.services.map(service => `
                <li class="service-item">
                    <div class="service-icon-box">
                        <ion-icon name="${service.icon}"></ion-icon>
                    </div>
                    <div class="service-content-box">
                        <h4 class="h4 service-item-title">${service.title}</h4>
                        <p class="service-item-text">${service.description}</p>
                    </div>
                </li>
            `).join('');
            servicesContent.innerHTML = `<ul class="service-list">${serviceItems}</ul>`;
        }
    }

    loadSkills() {
        const skillsContent = document.querySelector('.skill .actual-content');
        if (skillsContent) {
            const skillItems = this.data.skills.map(skill => `<li>${skill}</li>`).join('');
            skillsContent.innerHTML = `<ul class="skills-list">${skillItems}</ul>`;
        }
    }

    loadResume() {
        // Education
        const educationContent = document.querySelector('.resume .timeline-list');
        if (educationContent) {
            const educationItems = this.data.resume.education.map(edu => `
                <li class="timeline-item">
                    <h4 class="h4 timeline-item-title">${edu.degree}</h4>
                    <span class="timeline-item-date">${edu.year}</span>
                    <p class="timeline-item-text">
                        ${edu.institution}<br>
                        ${edu.description}
                    </p>
                </li>
            `).join('');
            educationContent.innerHTML = `<li class="timeline-item"><h4 class="h4">Education</h4></li>${educationItems}`;
        }

        // Experience
        const experienceContent = document.querySelector('#experience-timeline');
        if (experienceContent) {
            const experienceItems = this.data.resume.experience.map(exp => `
                <li class="timeline-item">
                    <h4 class="h4 timeline-item-title">${exp.position}</h4>
                    <span class="timeline-item-date">${exp.year}</span>
                    <p class="timeline-item-text">
                        ${exp.company}<br>
                        ${exp.description}
                    </p>
                </li>
            `).join('');
            experienceContent.innerHTML = `<li class="timeline-item"><h4 class="h4">Work Experience</h4></li>${experienceItems}`;
        }
    }

    loadProjects() {
        const projectsContent = document.querySelector('.project-list');
        if (projectsContent) {
            const projectItems = this.data.projects.map(project => `
                <li class="project-item active" data-filter="${project.category.toLowerCase()}">
                    <a href="#" class="project-img">
                        <img src="${project.image}" alt="${project.title}" loading="lazy">
                    </a>
                    <h3 class="project-title">${project.title}</h3>
                    <ul class="project-info">
                        <li><strong>Category:</strong> ${project.category}</li>
                        <li><strong>Technologies:</strong> ${project.technologies.join(', ')}</li>
                    </ul>
                    <p class="project-description">${project.description}</p>
                    <a href="${project.link}" class="btn btn-primary" target="_blank">View Project</a>
                    <a href="${project.github}" class="btn btn-secondary" target="_blank">View Code</a>
                </li>
            `).join('');
            projectsContent.innerHTML = projectItems;
        }
    }

    loadBlog() {
        const blogContent = document.querySelector('.blog-posts-list');
        if (blogContent) {
            const blogItems = this.data.blog.map(post => `
                <li class="blog-post-item">
                    <a href="#" class="blog-post-thumbnail">
                        <img src="${post.image}" alt="${post.title}" loading="lazy">
                    </a>
                    <div class="blog-post-content">
                        <span class="blog-post-meta">${post.date}</span>
                        <h3 class="h3 blog-item-title">${post.title}</h3>
                        <p class="blog-item-text">${post.excerpt}</p>
                        <a href="#" class="btn btn-link">Read More<span class="ion-android-arrow-dropright-circle"></span></a>
                    </div>
                </li>
            `).join('');
            blogContent.innerHTML = blogItems;
        }
    }

    loadAll() {
        this.loadAbout();
        this.loadServices();
        this.loadSkills();
        this.loadResume();
        this.loadProjects();
        this.loadBlog();
    }
}

// Initialize data loader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.dataLoader = new DataLoader();
    // Wait for skeleton manager to hide skeletons first
    setTimeout(() => {
        window.dataLoader.loadAll();
    }, 1600); // Slightly after skeleton manager hides
});