"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { generatePersonalizedGreeting } from "@/ai/flows/personalized-greeting";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function Hero() {
  const [greeting, setGreeting] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const result = await generatePersonalizedGreeting({ location: timeZone });
        setGreeting(result.greeting);
      } catch (error) {
        console.error("Failed to generate greeting:", error);
        setGreeting("Welcome to my portfolio!");
      } finally {
        setLoading(false);
      }
    };

    fetchGreeting();
  }, []);

  return (
    <section id="hero" className="text-center bg-background">
      <div className="flex flex-col items-center gap-6">
        {loading ? (
          <Skeleton className="h-14 w-3/4 md:w-1/2" />
        ) : (
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
            {greeting}
          </h1>
        )}
        <p className="max-w-2xl text-lg text-muted-foreground">
          I&apos;m Rakesh Kumar, a passionate full-stack developer specializing in Java, Spring Boot, and Angular. I build robust and scalable web applications.
        </p>
        <div className="flex gap-4">
          <Button size="lg" asChild>
            <Link href="#projects">
              View My Work
              <MoveRight className="ml-2" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#resume">View My Resume</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
