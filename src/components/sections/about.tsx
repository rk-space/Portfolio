import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'about-profile');

  return (
    <section id="about" className="bg-secondary">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
          <Card className="rounded-full w-48 h-48 md:w-64 md:h-64 overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <CardContent className="p-0">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt="Rakesh Kumar"
                width={256}
                height={256}
                className="rounded-full object-cover aspect-square"
                data-ai-hint={profileImage.imageHint}
              />
            )}
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-3xl font-bold font-headline">About Me</h2>
          <p className="text-muted-foreground leading-relaxed">
            Hello! I&apos;m Rakesh Kumar, a dedicated and results-driven Software Engineer with a passion for building elegant and efficient solutions. With over 5 years of experience in the software industry, I specialize in backend development with Java and Spring Boot, and I am equally proficient in creating dynamic user interfaces with Angular.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I thrive in collaborative environments and I&apos;m always eager to learn new technologies and take on challenging problems. My goal is to leverage my skills to create meaningful products that make a difference. When I&apos;m not coding, I enjoy exploring the outdoors and contributing to open-source projects.
          </p>
        </div>
      </div>
    </section>
  );
}
