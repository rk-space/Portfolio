"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/lib/data";
import { Github } from "lucide-react";
import { cn } from "@/lib/utils";

const filters = ["All", "Java", "Angular"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-headline">My Projects</h2>
        <p className="text-muted-foreground">A selection of my recent work.</p>
      </div>

      <div className="flex justify-center gap-2 mb-8">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "default" : "outline"}
            onClick={() => setActiveFilter(filter)}
            className={cn("transition-all", activeFilter === filter && "shadow-md")}
          >
            {filter}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="flex flex-col group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardContent className="p-0">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-t-lg object-cover aspect-video transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={project.imageHint}
              />
            </CardContent>
            <CardHeader>
              <CardTitle className="font-headline">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href={project.githubUrl} target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
