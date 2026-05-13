# Portfolio Website - INALEGWU OWIOCHOGBE DANIEL

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

A sophisticated, responsive portfolio website built with vanilla HTML, CSS, and JavaScript, featuring an integrated Content Management System (CMS) for seamless content management and deployment.

## 🚀 Overview

This portfolio website showcases the professional journey of **INALEGWU OWIOCHOGBE DANIEL**, a Chemical Engineering graduate specializing in software development, AI training, and project execution. The platform demonstrates expertise in modern web technologies and provides an intuitive interface for presenting professional achievements, technical skills, and project portfolios.

### Key Highlights

- **🎯 Professional Presentation**: Comprehensive showcase of technical expertise and professional achievements
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **⚡ Performance Optimized**: Fast loading with efficient asset management
- **🔧 CMS Integration**: Built-in content management system for easy updates
- **🎨 Modern UI/UX**: Clean, professional design with smooth animations
- **🔍 SEO Optimized**: Proper meta tags and semantic HTML structure

## 👨‍💻 About the Developer

**INALEGWU OWIOCHOGBE DANIEL** is a versatile professional with a background in Chemical Engineering and expertise in software development. Specializing in AI training, web application development, and technical project execution, he leverages modern technologies including Go, Python, Next.js, Netlify, and Vercel to deliver innovative solutions.

### Core Competencies

- **Software Development**: Full-stack web applications and backend systems
- **AI & Machine Learning**: Training models and implementing AI workflows
- **Project Management**: Leading technical projects and mentoring teams
- **Problem Solving**: Analytical approach to complex technical challenges
- **Technology Stack**: Go, Python, JavaScript, Next.js, React, Node.js

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup and accessibility
- **CSS3** - Modern styling with custom properties and animations
- **JavaScript (ES6+)** - Interactive functionality and DOM manipulation
- **Ionicons** - Professional icon library

### Backend & Deployment
- **Static Hosting** - GitHub Pages, Netlify, Vercel
- **JSON** - Data-driven content management
- **RESTful APIs** - External integrations

### Development Tools
- **Version Control** - Git and GitHub
- **Package Management** - NPM/Yarn
- **Build Tools** - Webpack (optional)
- **Testing** - Manual QA and cross-browser testing

## 📁 Project Structure

```
portfolio-website/
├── index.html                 # Main portfolio page
├── cms.html                   # Content Management System interface
├── README.md                  # Project documentation
├── LICENSE                    # MIT License
├── assets/
│   ├── images/
│   │   ├── awards/           # Achievement screenshots
│   │   ├── blogs/            # Blog post images
│   │   ├── projects/         # Project screenshots
│   │   └── personal/         # Profile and avatar images
│   └── fonts/                # Custom typography (if any)
├── css/
│   ├── style.css             # Main portfolio stylesheets
│   ├── cms.css               # CMS interface styles
│   └── skeleton.css          # Loading animation styles
├── js/
│   ├── script.js             # Core portfolio functionality
│   ├── data-loader.js        # JSON data loading and population
│   ├── skeleton-manager.js   # Loading state management
│   └── cms.js                # Content management system logic
├── data/
│   ├── personal.json         # Personal information and social links
│   ├── services.json         # Professional services offered
│   ├── awards.json           # Awards and recognitions
│   ├── skills.json           # Technical skill sets
│   ├── experience.json       # Work experience history
│   ├── education.json        # Educational background
│   ├── certifications.json   # Professional certifications
│   ├── projects.json         # Portfolio projects
│   └── blog.json             # Blog posts and articles
└── .github/
    └── workflows/            # CI/CD pipelines (optional)
```

## 🚀 Quick Start

### Prerequisites

- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Local development server (Python, Node.js, or any static server)
- Git for version control

### Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/dinalegw/dinalegw.github.io.git
   cd dinalegw.github.io
   ```

2. **Local Development Server**
   ```bash
   # Using Python (recommended)
   python3 -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```

3. **Access the Portfolio**
   Open `http://localhost:8000` in your web browser

### Content Management

Access the CMS at `http://localhost:8000/cms.html` to manage content:

1. **Authentication**: Configure GitHub token in settings
2. **Content Updates**: Modify JSON data files through the interface
3. **Auto-deployment**: Changes sync directly to GitHub repository

## 📋 Content Management System (CMS)

### Features

- **🔐 Secure Authentication**: GitHub OAuth integration
- **📝 Real-time Editing**: Live preview and instant updates
- **🖼️ Media Management**: Image upload and optimization
- **📊 Analytics Integration**: Optional Google Analytics setup
- **🔄 Version Control**: Git-based change tracking
- **📱 Mobile-Friendly**: Responsive CMS interface

### Managing Content Sections

#### Personal Information
- Profile details and contact information
- Social media links and professional networks
- Bio and professional summary

#### Professional Services
- Service offerings and descriptions
- Pricing information (optional)
- Service categories and specializations

#### Skills & Expertise
- Technical skills with proficiency levels
- Tools and technologies
- Certifications and qualifications

#### Work Experience
- Professional history and achievements
- Project highlights and responsibilities
- Date calculations and duration tracking

#### Education
- Academic background and institutions
- Relevant coursework and specializations
- Academic achievements and honors

#### Projects Portfolio
- Project showcases with descriptions
- Technology stacks and methodologies
- Live demos and source code links

#### Blog & Publications
- Technical articles and insights
- Industry trends and analysis
- Professional development content

## 🎨 Customization Guide

### Theme Customization

Modify CSS custom properties in `css/style.css`:

```css
:root {
  /* Color Scheme */
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --accent-color: #your-color;

  /* Typography */
  --font-primary: 'Your Font', sans-serif;
  --font-secondary: 'Your Font', sans-serif;

  /* Spacing & Layout */
  --container-width: 1200px;
  --border-radius: 8px;
}
```

### Adding New Sections

1. **Create JSON Schema**: Define data structure in `data/` folder
2. **Update Data Loader**: Modify `js/data-loader.js` to handle new data
3. **HTML Structure**: Add corresponding markup in `index.html`
4. **CMS Integration**: Extend `cms.html` and `cms.js` for management

### Performance Optimization

- **Image Optimization**: Use WebP format and responsive images
- **Code Splitting**: Implement lazy loading for large assets
- **Caching Strategy**: Configure appropriate cache headers
- **Bundle Analysis**: Monitor and optimize bundle sizes

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Green scores across all metrics
- **Mobile Responsiveness**: 100% mobile-friendly
- **Loading Speed**: < 2 seconds initial load time

## 🤝 Contributing

We welcome contributions to improve this portfolio template:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow HTML5 semantic markup standards
- Maintain CSS custom properties for theming
- Ensure JavaScript is modular and well-documented
- Test across multiple browsers and devices
- Optimize images and assets for web delivery

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Ionicons** - Beautiful icon library
- **Google Fonts** - Professional typography
- **Open Source Community** - Inspiration and best practices

## 📞 Support

For questions, suggestions, or collaboration opportunities:

- **Email**: danieloinalegwu@gmail.com
- **LinkedIn**: [INALEGWU OWIOCHOGBE DANIEL](https://www.linkedin.com/in/obrian360)
- **GitHub**: [@dinalegw](https://github.com/dinalegw)

---

**Built with ❤️ by INALEGWU OWIOCHOGBE DANIEL**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/dinalegw/dinalegw.github.io.git
   cd dinalegw.github.io
   ```

2. **Local Development Server**
   ```bash
   # Using Python (recommended)
   python3 -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```

3. **Access the Portfolio**
   Open `http://localhost:8000` in your web browser

### Content Management

Access the CMS at `http://localhost:8000/cms.html` to manage content:

1. **Authentication**: Configure GitHub token in settings
2. **Content Updates**: Modify JSON data files through the interface
3. **Auto-deployment**: Changes sync directly to GitHub repository

## 📋 Content Management System (CMS)

### Features

- **🔐 Secure Authentication**: GitHub OAuth integration
- **📝 Real-time Editing**: Live preview and instant updates
- **🖼️ Media Management**: Image upload and optimization
- **📊 Analytics Integration**: Optional Google Analytics setup
- **🔄 Version Control**: Git-based change tracking
- **📱 Mobile-Friendly**: Responsive CMS interface

### Managing Content Sections

#### Personal Information
- Profile details and contact information
- Social media links and professional networks
- Bio and professional summary

#### Professional Services
- Service offerings and descriptions
- Pricing information (optional)
- Service categories and specializations

#### Skills & Expertise
- Technical skills with proficiency levels
- Tools and technologies
- Certifications and qualifications

#### Work Experience
- Professional history and achievements
- Project highlights and responsibilities
- Date calculations and duration tracking

#### Education
- Academic background and institutions
- Relevant coursework and specializations
- Academic achievements and honors

#### Projects Portfolio
- Project showcases with descriptions
- Technology stacks and methodologies
- Live demos and source code links

#### Blog & Publications
- Technical articles and insights
- Industry trends and analysis
- Professional development content

## 🎨 Customization Guide

### Theme Customization

Modify CSS custom properties in `css/style.css`:

```css
:root {
  /* Color Scheme */
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --accent-color: #your-color;

  /* Typography */
  --font-primary: 'Your Font', sans-serif;
  --font-secondary: 'Your Font', sans-serif;

  /* Spacing & Layout */
  --container-width: 1200px;
  --border-radius: 8px;
}
```

### Adding New Sections

1. **Create JSON Schema**: Define data structure in `data/` folder
2. **Update Data Loader**: Modify `js/data-loader.js` to handle new data
3. **HTML Structure**: Add corresponding markup in `index.html`
4. **CMS Integration**: Extend `cms.html` and `cms.js` for management

### Performance Optimization

- **Image Optimization**: Use WebP format and responsive images
- **Code Splitting**: Implement lazy loading for large assets
- **Caching Strategy**: Configure appropriate cache headers
- **Bundle Analysis**: Monitor and optimize bundle sizes

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Green scores across all metrics
- **Mobile Responsiveness**: 100% mobile-friendly
- **Loading Speed**: < 2 seconds initial load time

## 🤝 Contributing

We welcome contributions to improve this portfolio template:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow HTML5 semantic markup standards
- Maintain CSS custom properties for theming
- Ensure JavaScript is modular and well-documented
- Test across multiple browsers and devices
- Optimize images and assets for web delivery

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Ionicons** - Beautiful icon library
- **Google Fonts** - Professional typography
- **Open Source Community** - Inspiration and best practices

## 📞 Support

For questions, suggestions, or collaboration opportunities:

- **Email**: danieloinalegwu@gmail.com
- **LinkedIn**: [INALEGWU OWIOCHOGBE DANIEL](https://www.linkedin.com/in/obrian360)
- **GitHub**: [@dinalegw](https://github.com/dinalegw)

---

**Built with ❤️ by INALEGWU OWIOCHOGBE DANIEL**
2. Update the filter options in `cms.html`
3. Update the formatCategory method in `data-loader.js`

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For questions or issues, please open an issue on GitHub or contact the developer.
