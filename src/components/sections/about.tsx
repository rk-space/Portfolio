import { GraduationCap, Briefcase, Code, MapPin } from "lucide-react";

const StatCard = ({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) => (
  <div className="bg-card border border-border rounded-xl p-6 text-center transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
    <div className="text-4xl mb-4">{icon}</div>
    <div className="text-3xl font-extrabold text-primary mb-1">{value}</div>
    <div className="text-sm text-secondary-foreground">{label}</div>
  </div>
);


export default function About() {
  return (
    <section id="about" className="section">
      <div className="text-center mb-16">
        <div className="font-mono text-primary text-sm font-semibold mb-4">// Who I Am</div>
        <h2 className="text-4xl font-black mb-4">About Me</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Passionate developer building scalable solutions</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-lg text-secondary-foreground leading-relaxed">
          <p>
            I'm a <span className="font-semibold text-primary">B.Tech graduate from VJTI</span>, specializing in building robust backend services and intuitive frontend experiences. My journey in software development has equipped me with a strong foundation in the <span className="font-semibold text-primary">Java ecosystem</span> and modern web technologies.
          </p>
          <p>
            With expertise in <span className="font-semibold text-primary">Spring Boot, Hibernate, and Angular</span>, I create maintainable, scalable applications following best practices and clean architecture principles. I'm passionate about writing quality code, solving complex problems, and continuously learning new technologies.
          </p>
          <p>
            Currently, I'm focused on building enterprise-level applications and exploring microservices architecture, cloud technologies, and DevOps practices to deliver high-performance solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <StatCard icon={<GraduationCap />} value="B.Tech" label="From VJTI" />
          <StatCard icon={<Briefcase />} value="2025" label="Graduation Year" />
          <StatCard icon={<Code />} value="10+" label="Technologies" />
          <StatCard icon={<MapPin />} value="Mumbai" label="Location" />
        </div>
      </div>
    </section>
  );
}
