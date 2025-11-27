import { resumeData } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

export default function ResumeTimeline() {
  return (
    <section id="resume">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-headline">My Journey</h2>
        <p className="text-muted-foreground">A summary of my professional experience and education.</p>
      </div>
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>
        {resumeData.map((item, index) => (
          <div key={index} className="relative mb-8">
            <div className="flex items-center justify-center absolute left-1/2 -translate-x-1/2 -translate-y-[-12px] z-10">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {item.type === "experience" ? (
                  <Briefcase className="h-4 w-4" />
                ) : (
                  <GraduationCap className="h-4 w-4" />
                )}
              </div>
            </div>
            <Card className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
              <CardHeader>
                <CardTitle className="text-lg font-headline">{item.title}</CardTitle>
                <CardDescription>
                  {item.type === 'experience' ? item.company : item.institution} | {item.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
