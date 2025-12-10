import { GraduationCap, BookOpen } from "lucide-react";
import { ScrollAnimator } from "@/components/scroll-animator";

const TimelineItem = ({ icon, title, institution, date, details, isLast = false }: { icon: React.ReactNode, title: string, institution: string, date: string, details: string[], isLast?: boolean }) => (
  <div className="relative pl-12 pb-12">
    {!isLast && <div className="absolute left-5 top-5 bottom-0 w-0.5 bg-border"></div>}
    <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 bg-primary rounded-full shadow-lg shadow-primary/30">
      {icon}
    </div>
    <ScrollAnimator>
    <div className="bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:border-primary hover:translate-x-2">
      <div className="text-xl font-bold mb-1">{title}</div>
      <div className="text-primary font-semibold mb-2">{institution}</div>
      <div className="text-sm text-muted-foreground mb-4">{date}</div>
      <ul className="space-y-2 text-secondary-foreground">
        {details.map((detail, i) => (
          <li key={i} className="flex items-start">
            <span className="text-primary mr-3 mt-1">▹</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
    </ScrollAnimator>
  </div>
);

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="text-center mb-16">
        <div className="font-mono text-primary text-sm font-semibold mb-4">// Academic Journey</div>
        <h2 className="text-4xl font-black mb-4">Education</h2>
        {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Building a strong foundation in Full Stackengineering</p> */}
      </div>
      <div>
        <TimelineItem
          icon={<GraduationCap className="text-white" />}
          title=" Bachelor of Technology"
          institution="Veermata Jijabai Technological Institute (VJTI)"
          date="📅 Completed: 2025"
          details={[
            "Specialized in Electronics and Telecommunication",
            "Strong foundation in data structures, algorithms, and software engineering",
            "Completed projects in full-stack development and database management",
            "Active participation in coding competitions and tech events"
          ]}
        />
        <TimelineItem
          icon={<BookOpen className="text-white" />}
          title="HSC (12th Science)"
          institution="Maharashtra State Board"
          date="📅 Completed: 2021"
          details={[
            "Mathematics, Physics, and Chemistry specialization",
            "Strong analytical and problem-solving skills",
            "Foundation for engineering education"
          ]}
          isLast
        />
      </div>
    </section>
  );
}
