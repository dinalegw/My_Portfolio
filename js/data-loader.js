// Data Loader - Loads and populates content sections

class DataLoader {
    constructor() {
  this.data = {
    about: {
      bio: "OBRIAN🛠️🚀 dinalegw · he/him\nGo Developer focused on CLI tools, backend systems, and solving problems. Learning deeply. Shipping consistently.\n\nChemical Engineering graduate with expertise in software development, AI training, and project execution. Skilled in Go, Python, and GitHub workflows. Experienced in leading projects, mentoring peers, and delivering innovative solutions under tight deadlines. Strong background in leadership, volunteering, and technical problem-solving.",
    },
            services: [
                {
                    icon: "code-outline",
                    title: "Software Development",
                    description: "Building and deploying web applications using Go, Python, Next.js, Netlify, and Vercel."
                },
                {
                    icon: "robot-outline",
                    title: "AI Training & Development",
                    description: "Applying machine learning concepts to real-world projects and mentoring peers in AI technologies."
                },
                {
                    icon: "git-branch-outline",
                    title: "Project Management & Leadership",
                    description": "Leading projects, optimizing workflows, and maintaining open-source projects on GitHub under tight deadlines."
                },
                {
                    icon: "people-outline",
                    title: "Mentoring & Training",
                    description": "Training peers in software engineering, AI, and data handling through fellowship programs."
                },
                {
                    icon: "analytics-outline",
                    title: "Data Analysis & Research",
                    description": "Conducting product research, competitor analysis, and producing technical documentation."
                }
            ],
            skills: [
                "Go",
                "Python",
                "JavaScript",
                "Next.js",
                "GitHub",
                "Netlify",
                "Vercel",
                "AI Training",
                "Data Analysis",
                "Project Management",
                "Team Collaboration",
                "Communication",
                "Problem Solving",
                "Leadership"
            ],
            resume: {
                education: [
                    {
                        degree: "B.Eng. Chemical Engineering",
                        institution: "Federal University of Technology, Minna",
                        year: "2016 - 2024",
                        description: "Strong background in technical problem-solving and leadership."
                    },
                    {
                        degree: "WASSCE",
                        institution: "Government Day Secondary School Karu",
                        year: "2016",
                        description: "West African Senior School Certificate Examination"
                    }
                ],
                experience: [
                    {
                        position: "Software Developer / Project Contributor",
                        company: "Freelance & Fellowship Programs",
                        year: "2025 - Present",
                        description: "• Built and deployed web applications using Go, Next.js, Netlify, and Vercel.\n• Delivered AI-driven projects under tight deadlines.\n• Optimized workflows to improve performance and user experience.\n• Maintained open-source projects on GitHub."
                    },
                    {
                        position: "AI Fellowship Trainee",
                        company: "Learn2Earn Fellowship",
                        year: "2026 - Present",
                        description: "• Trained in AI, data handling, and software engineering.\n• Applied machine learning concepts to real-world projects.\n• Mentored peers and presented technical solutions."
                    },
                    {
                        position: "Industrial Training (SIWES)",
                        company: "Chanchaga Water Works",
                        year: "May - Oct 2021",
                        description: "• Conducted product research and competitor analysis.\n• Produced technical documentation and client-focused reports."
                    }
                ]
            },
            projects: [
                {
                    id: 1,
                    title: "Vowel Capitalizer CLI Tool",
                    category: "CLI Tools",
                    image: "./assets/images/project1.jpg",
                    description: "A high-performance Go text transformation tool that converts vowels to uppercase and consonants to lowercase, optimized for processing large texts and ebooks.",
                    technologies: ["Go", "GitHub", "CLI"],
                    link: "https://github.com/dinalegw/VowelCapitalizer",
                    github: "https://github.com/dinalegw/VowelCapitalizer"
                },
                {
                    id: 2,
                    title: "Personal Portfolio Website",
                    category: "Web Development",
                    image: "./assets/images/project2.jpg",
                    description: "A responsive personal portfolio website showcasing skills, projects, and professional experience with smooth animations and modern design.",
                    technologies: ["HTML5", "CSS3", "JavaScript", "Ion Icons"],
                    link: "https://github.com/dinalegw/My_Portfolio",
                    github: "https://github.com/dinalegw/My_Portfolio"
                },
                {
                    id: 3,
                    title: "AI Training & Data Handling Projects",
                    category: "AI/ML",
                    image: "./assets/images/project3.jpg",
                    description: "Projects involving AI model training, data preprocessing, and machine learning applications developed during Learn2Earn Fellowship.",
                    technologies: ["Python", "Machine Learning", "Data Analysis"],
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
                    readTime: "7 min read",
                    image: "./assets/images/blog2.jpg"
                }
            ],
            certifications: [
                {
                    title: "Peer Educator Training",
                    issuer: "NYSC/UNICEF",
                    year: "2011",
                    description: "Training in peer education and youth mentorship programs."
                },
                {
                    title: "21st Annual Student Convention",
                    issuer: "NSChE UNIPORT",
                    year: "2018",
                    description: "Participation in national chemical engineering student convention."
                },
                {
                    title: "Director of Socials",
                    issuer: "NSChE FUT Minna",
                    year: "2018–2019",
                    description: "Leadership role in Nigerian Society of Chemical Engineers chapter at FUT Minna."
                },
                {
                    title: "NYSC Discharge Certificate",
                    issuer: "National Youth Service Corps",
                    year: "Nov 2025",
                    description: "Completion of mandatory national service program."
                }
            ],
            volunteering: [
                {
                    organization: "JSS Nyanya Science Club",
                    role: "Mentor",
                    year: "2011–2013",
                    description: "Mentored teenagers in academics and leadership."
                },
                {
                    organization: "Fitness Campaign – NSChE FUT Minna",
                    role: "Organizer",
                    year: "2018–2019",
                    description: "Organized 8+ bi-monthly fitness events."
                },
                {
                    organization: "Excursion Committee – SEDI Minna",
                    role: "Coordinator",
                    year: "2018",
                    description: "Coordinated 40+ students in technical excursion."
                }
            ],
            memberships: [
                "Society of Petroleum Engineers (SPE)",
                "Nigerian Society of Chemical Engineers (NSChE)",
                "Vision 2020"
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
        
        // Certifications
        const certificationsContent = document.querySelector('.resume .award-list');
        if (certificationsContent && this.data.resume.certifications) {
            const certificationItems = this.data.resume.certifications.map(cert => `
                <li class="timeline-item">
                    <h4 class="h4 timeline-item-title">${cert.title}</h4>
                    <span class="timeline-item-date">${cert.year}</span>
                    <p class="timeline-item-text">
                        ${cert.issuer}<br>
                        ${cert.description}
                    </p>
                </li>
            `).join('');
            certificationsContent.innerHTML = `<li class="timeline-item"><h4 class="h4">Certifications</h4></li>${certificationItems}`;
        }
        
        // Volunteering
        const volunteeringContent = document.querySelector('.resume .volunteering-list');
        if (volunteeringContent && this.data.resume.volunteering) {
            const volunteeringItems = this.data.resume.volunteering.map(vol => `
                <li class="timeline-item">
                    <h4 class="h4 timeline-item-title">${vol.organization}</h4>
                    <span class="timeline-item-date">${vol.year}</span>
                    <p class="timeline-item-text">
                        Role: ${vol.role}<br>
                        ${vol.description}
                    </p>
                </li>
            `).join('');
            volunteeringContent.innerHTML = `<li class="timeline-item"><h4 class="h4">Volunteering</h4></li>${volunteeringItems}`;
        }
        
        // Memberships
        const membershipsContent = document.querySelector('.resume .memberships-list');
        if (membershipsContent && this.data.resume.memberships) {
            const membershipItems = this.data.resume.memberships.map(mem => `<li>${mem}</li>`).join('');
            membershipsContent.innerHTML = `<ul class="memberships-list">${membershipItems}</ul>`;
        }
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
        
        // Certifications
        const certificationsContent = document.querySelector('.resume .award-list');
        if (certificationsContent && this.data.resume.certifications) {
            const certificationItems = this.data.resume.certifications.map(cert => `
                <li class="timeline-item">
                    <h4 class="h4 timeline-item-title">${cert.title}</h4>
                    <span class="timeline-item-date">${cert.year}</span>
                    <p class="timeline-item-text">
                        ${cert.issuer}<br>
                        ${cert.description}
                    </p>
                </li>
            `).join('');
            certificationsContent.innerHTML = `<li class="timeline-item"><h4 class="h4">Certifications</h4></li>${certificationItems}`;
        }
        
        // Volunteering
        const volunteeringContent = document.querySelector('.resume .volunteering-list');
        if (volunteeringContent && this.data.resume.volunteering) {
            const volunteeringItems = this.data.resume.volunteering.map(vol => `
                <li class="timeline-item">
                    <h4 class="h4 timeline-item-title">${vol.organization}</h4>
                    <span class="timeline-item-date">${vol.year}</span>
                    <p class="timeline-item-text">
                        Role: ${vol.role}<br>
                        ${vol.description}
                    </p>
                </li>
            `).join('');
            volunteeringContent.innerHTML = `<li class="timeline-item"><h4 class="h4">Volunteering</h4></li>${volunteeringItems}`;
        }
        
        // Memberships
        const membershipsContent = document.querySelector('.resume .memberships-list');
        if (membershipsContent && this.data.resume.memberships) {
            const membershipItems = this.data.resume.memberships.map(mem => `<li>${mem}</li>`).join('');
            membershipsContent.innerHTML = `<ul class="memberships-list">${membershipItems}</ul>`;
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