import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Send } from 'lucide-react';

const CodeTerminal = () => (
  <div className="bg-card border border-border rounded-xl shadow-2xl overflow-hidden animate-fade-in-up">
    <div className="bg-black/30 px-4 py-3 flex items-center gap-2 border-b border-border">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <div className="p-6 font-mono text-sm text-secondary-foreground leading-loose">
      <div className="animate-line-1"><span className="text-pink-400">@SpringBootApplication</span></div>
      <div className="animate-line-2"><span className="text-pink-400">public class</span> <span className="text-cyan-400">Developer</span> {'{'}</div>
      <div className="animate-line-3 pl-4"><span className="text-pink-400">private</span> String name = <span className="text-emerald-400">"Rushikesh"</span>;</div>
      <div className="animate-line-4"></div>
      <div className="animate-line-5 pl-4"><span className="text-pink-400">private</span> List&lt;String&gt; skills = Arrays.asList(</div>
      <div className="animate-line-6 pl-8"><span className="text-emerald-400">"Java"</span>, <span className="text-emerald-400">"Spring Boot"</span>,</div>
      <div className="animate-line-7 pl-8"><span className="text-emerald-400">"Hibernate"</span>, <span className="text-emerald-400">"Angular"</span>,</div>
      <div className="animate-line-8 pl-8"><span className="text-emerald-400">"MySQL"</span>, <span className="text-emerald-400">"Docker"</span></div>
      <div className="animate-line-9 pl-4">);</div>
      <div className="animate-line-10">{'}'}</div>
    </div>
  </div>
);

const SocialLink = ({ href, title, children }: { href: string; title: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="w-11 h-11 flex items-center justify-center bg-card border border-border rounded-lg text-secondary-foreground transition-all hover:bg-primary hover:text-white hover:border-primary transform hover:-translate-y-1"
    target="_blank"
    title={title}
  >
    {children}
  </a>
);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-5xl lg:text-6xl font-black leading-tight">
            Hi, I'm<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Rushikesh Kharode
            </span>
          </h1>
          <p className="text-xl font-semibold text-secondary-foreground">
            Java Full-Stack Developer
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Specialized in Java programming, web development, scalability, quality code, and creative problem-solving. Building enterprise-level applications with Spring Boot, Hibernate, and modern frontend frameworks.
          </p>
          <div className="flex justify-center md:justify-start gap-4 pt-2">
             <SocialLink href="https://github.com/rk-space" title="GitHub">
                <Github />
             </SocialLink>
             <SocialLink href="https://www.linkedin.com/in/rushikesh-kharode-2484b9258/" title="LinkedIn">
                <Linkedin />
             </SocialLink>
          </div>
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <Button asChild size="lg" className="shadow-lg shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-0.5 transition-all">
              <Link href="#contact">
                Get in Touch <Send className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="transition-all hover:bg-primary/10 hover:border-primary">
              <Link href="#projects">View Work</Link>
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <CodeTerminal />
        </div>
      </div>
    </section>
  );
}
