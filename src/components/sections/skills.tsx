"use client";
import { Code, Brush, Database, Wrench } from 'lucide-react';
import { ScrollAnimator } from '@/components/scroll-animator';

const skills = {
  backend: [
    { name: 'Java', level: 'Expert', width: '90%' },
    { name: 'Spring Boot', level: 'Advanced', width: '85%' },
    { name: 'Hibernate', level: 'Advanced', width: '80%' },
    { name: 'REST API', level: 'Expert', width: '88%' },
  ],
  frontend: [
    { name: 'Angular', level: 'Proficient', width: '75%' },
    { name: 'React', level: 'Intermediate', width: '70%' },
    { name: 'HTML/CSS', level: 'Advanced', width: '85%' },
    { name: 'JavaScript', level: 'Advanced', width: '82%' },
  ],
  database: [
    { name: 'MySQL', level: 'Advanced', width: '85%' },
    { name: 'PostgreSQL', level: 'Intermediate', width: '70%' },
    { name: 'MongoDB', level: 'Intermediate', width: '65%' },
    { name: 'Redis', level: 'Beginner', width: '55%' },
  ],
  tools: [
    { name: 'Git', level: 'Expert', width: '90%' },
    { name: 'Docker', level: 'Intermediate', width: '72%' },
    { name: 'Maven', level: 'Advanced', width: '80%' },
    { name: 'Postman', level: 'Expert', width: '88%' },
  ]
};

const SkillBar = ({ name, level, width }: { name: string, level: string, width: string }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-1">
      <span className="font-semibold text-foreground">{name}</span>
      <span className="text-sm text-muted-foreground">{level}</span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out" 
        style={{ width: '0%' }}
        data-width={width}
      ></div>
    </div>
  </div>
);

const SkillCategory = ({ icon, title, skills, index }: { icon: React.ReactNode, title: string, skills: any[], index: number }) => (
    <ScrollAnimator className="transition-all duration-500" style={{transitionDelay: `${index * 100}ms`}}>
        <div className="bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:border-primary hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
            <div className="text-3xl">{icon}</div>
            <h3 className="text-xl font-bold">{title}</h3>
            </div>
            {skills.map(skill => <SkillBar key={skill.name} {...skill} />)}
        </div>
    </ScrollAnimator>
);

export default function Skills() {
    return (
        <section id="skills" className="section">
        <div className="text-center mb-16">
            <div className="font-mono text-primary text-sm font-semibold mb-4">// Technical Arsenal</div>
            <h2 className="text-4xl font-black mb-4">Technologies & Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Proficient in modern development tools and frameworks</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <SkillCategory icon={<Code/>} title="Backend" skills={skills.backend} index={0}/>
            <SkillCategory icon={<Brush/>} title="Frontend" skills={skills.frontend} index={1}/>
            <SkillCategory icon={<Database/>} title="Database" skills={skills.database} index={2}/>
            <SkillCategory icon={<Wrench/>} title="Tools" skills={skills.tools} index={3}/>
        </div>
        </section>
    );
}
