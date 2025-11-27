import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import { ScrollAnimator } from "@/components/scroll-animator";

const projects = [
  { 
    icon: '🛒', 
    title: 'E-Commerce Platform',
    tech: ['Spring Boot', 'Angular', 'MySQL', 'JWT'],
    desc: 'Full-featured e-commerce application with product catalog, shopping cart, order management, and secure payment integration. Implements JWT authentication and role-based access control.',
    github: '#',
    live: '#'
  },
  { 
    icon: '👥',
    title: 'Employee Management System',
    tech: ['Angular', 'Spring Boot', 'Hibernate', 'MySQL'],
    desc: 'Enterprise-grade HR management system with comprehensive CRUD operations, employee analytics, department management, and role-based access control. Built with clean architecture principles.',
    github: '#',
    live: '#'
  },
  { 
    icon: '📊',
    title: 'SamsTrack',
    tech: ['Spring Boot', 'Hibernate', 'MySQL', 'REST API'],
    desc: 'Comprehensive attendance tracking system with automated reporting, real-time analytics, and multi-user support. Features include leave management, report generation, and dashboard analytics.',
    github: '#',
    live: '#'
  },
  { 
    icon: '💬',
    title: 'Real-Time Chat App',
    tech: ['Spring Boot', 'WebSocket', 'React', 'MongoDB'],
    desc: 'Real-time messaging application using WebSocket technology. Features include group chats, private messaging, online status indicators, and message history with MongoDB persistence.',
    github: '#',
    live: '#'
  },
  { 
    icon: '📝',
    title: 'Blog Platform',
    tech: ['Spring Boot', 'Angular', 'PostgreSQL', 'AWS S3'],
    desc: 'Modern blogging platform with rich text editor, image uploads, user authentication, commenting system, and SEO optimization. Integrated with AWS S3 for media storage.',
    github: '#',
    live: '#'
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => (
  <ScrollAnimator className="transition-all duration-500" style={{ transitionDelay: `${index * 100}ms` }}>
    <div className="bg-card border border-border rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary">
      <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-6xl border-b border-border">
        {project.icon}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map(t => (
            <span key={t} className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-mono font-semibold text-primary">
              {t}
            </span>
          ))}
        </div>
        <p className="text-secondary-foreground leading-relaxed flex-grow">{project.desc}</p>
        <div className="flex gap-4 mt-6">
          <Link href={project.github} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary/10 border border-primary text-primary font-semibold text-sm transition-colors hover:bg-primary hover:text-white">
            <Github size={16} /> View Code
          </Link>
          <Link href={project.live} className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-secondary-foreground font-semibold text-sm transition-colors hover:text-primary">
            <ExternalLink size={16} /> Live Demo
          </Link>
        </div>
      </div>
    </div>
  </ScrollAnimator>
);

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="text-center mb-16">
        <div className="font-mono text-primary text-sm font-semibold mb-4">// Portfolio</div>
        <h2 className="text-4xl font-black mb-4">Featured Projects</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Real-world applications showcasing technical expertise</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
