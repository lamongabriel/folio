"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/language-context";
import DotPattern from "@/components/shared/magic/dot-pattern";
import { RotatingAsset } from "@/components/shared/3d/rotating-asset";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export function HomeHero() {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="relative">
      {/* Background pattern */}
      <DotPattern
        width={32}
        height={32}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "absolute inset-0 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)] -z-10",
        )}
      />

      <div className="container min-h-[calc(100vh-4rem)] flex flex-col justify-center py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className="order-2 md:order-1 flex flex-col">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-border/60 bg-muted/20 text-sm mb-6 w-fit">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              {t.hero.available}
            </div>
            
            <h1 className="text-left font-title text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight">
              {t.hero.greeting}<br />
              Gabriel <span className="bg-gradient-to-r from-green-500 via-white to-red-500 text-transparent bg-clip-text">Lamon</span>
            </h1>

            <p className="mt-4 text-xl text-muted-foreground max-w-md">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <Button asChild size="lg" className="gap-2">
                <a href="#contact">
                  {t.hero.contactMe}
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="#experience">
                  {t.hero.viewExperience}
                  <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="flex gap-4 mt-8">
              <Link href="https://github.com/lamongabriel" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/lamongabriel" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:lamongabriel@icloud.com" aria-label="Email">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="tel:+5524999127331" aria-label="Phone">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Phone className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* 3D Asset */}
          <div className="order-1 md:order-2 h-[300px] md:h-[400px] lg:h-[500px]">
            <RotatingAsset />
          </div>
        </div>
      </div>
    </section>
  );
}
