import { PlaceHolderImages } from './placeholder-images';

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Resume', href: '#resume' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
];

export const resumeData = [
  {
    type: 'experience',
    title: 'Senior Software Engineer',
    company: 'Innovate Corp.',
    date: '2020 - Present',
    description: 'Leading development of a high-traffic microservices-based platform using Java, Spring Boot, and Angular. Responsible for architecture design, code reviews, and mentoring junior developers.',
  },
  {
    type: 'experience',
    title: 'Software Engineer',
    company: 'Tech Solutions Inc.',
    date: '2018 - 2020',
    description: 'Developed and maintained full-stack web applications for various clients. Worked with technologies like Java, Hibernate, and Angular to deliver robust and scalable solutions.',
  },
  {
    type: 'education',
    title: 'B.S. in Computer Science',
    institution: 'University of Technology',
    date: '2014 - 2018',
    description: 'Graduated with honors. Focused on software development, algorithms, and database management. Completed a final year project on a real-time data processing system.',
  },
];

const findImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export const projectsData = [
  {
    id: 1,
    title: 'E-commerce Microservices Platform',
    description: 'A fully-featured e-commerce platform built with a microservices architecture. Includes services for products, orders, users, and payments.',
    techStack: ['Java', 'Spring Boot', 'Angular', 'Docker', 'PostgreSQL'],
    githubUrl: '#',
    imageUrl: findImage('project-1')?.imageUrl || '',
    imageHint: findImage('project-1')?.imageHint || '',
    category: 'Java',
  },
  {
    id: 2,
    title: 'Real-time Analytics Dashboard',
    description: 'An interactive dashboard for visualizing real-time data streams using WebSockets and advanced charting libraries in Angular.',
    techStack: ['Angular', 'TypeScript', 'Node.js', 'WebSocket'],
    githubUrl: '#',
    imageUrl: findImage('project-2')?.imageUrl || '',
    imageHint: findImage('project-2')?.imageHint || '',
    category: 'Angular',
  },
  {
    id: 3,
    title: 'Cloud-Native Deployment Automation',
    description: 'A tool for automating the deployment of Spring Boot applications to Kubernetes, including CI/CD pipeline setup with Jenkins and GitHub Actions.',
    techStack: ['Java', 'Spring Boot', 'Kubernetes', 'Jenkins'],
    githubUrl: '#',
    imageUrl: findImage('project-3')?.imageUrl || '',
    imageHint: findImage('project-3')?.imageHint || '',
    category: 'Java',
  },
  {
    id: 4,
    title: 'Task Management App',
    description: 'A responsive single-page application for managing tasks and projects, built with Angular and featuring a clean, intuitive UI.',
    techStack: ['Angular', 'TypeScript', 'Firebase'],
    githubUrl: '#',
    imageUrl: findImage('project-4')?.imageUrl || '',
    imageHint: findImage('project-4')?.imageHint || '',
    category: 'Angular',
  },
];


export const skillsData = [
    { name: 'Java', level: 95 },
    { name: 'Spring Boot', level: 90 },
    { name: 'Angular', level: 85 },
    { name: 'TypeScript', level: 85 },
    { name: 'SQL', level: 80 },
    { name: 'Docker', level: 75 },
    { name: 'Kubernetes', level: 70 },
    { name: 'GCP', level: 65 },
];
