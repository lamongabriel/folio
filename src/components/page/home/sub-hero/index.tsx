"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Code, GraduationCap, Mail, User } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";

export function HomeSubHero() {
  return (
    <>
      <Experience />
      <Skills />
      <About />
      <Contact />
    </>
  );
}

function SectionTitle({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      <div className="p-2 rounded-md bg-primary/10 text-primary">
        {icon}
      </div>
      <h2 className="text-3xl font-title font-semibold">{title}</h2>
    </div>
  );
}

function Experience() {
  const { t } = useLanguage();
  
  const experiences = [
    {
      title: "Software Engineer",
      company: "Automate Army",
      location: "Denver, CO, USA",
      type: t.experience.fullTime,
      period: `10/2023 - ${t.experience.current}`,
      achievements: t.experience.achievements.automate
    },
    {
      title: "Software Engineer",
      company: "Inovaki Agency",
      location: "Volta Redonda, RJ, BR",
      type: t.experience.fullTime,
      period: "01/2021 - 10/2023",
      achievements: t.experience.achievements.inovaki_full
    },
    {
      title: "Software Engineer",
      company: "Inovaki Agency",
      location: "Volta Redonda, RJ, BR",
      type: t.experience.intern,
      period: "06/2020 - 01/2021",
      achievements: t.experience.achievements.inovaki_intern
    }
  ];

  return (
    <section id="experience" className="py-20 container">
      <SectionTitle title={t.experience.title} icon={<Briefcase className="h-6 w-6" />} />
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-base">
                      {exp.company} • {exp.location}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1">
                    <Badge variant="outline" className="font-normal">
                      {exp.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground">{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const { t } = useLanguage();
  
  const skillCategories = {
    frontend: [
      "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", 
      "Styled Components", "Sass", "Bootstrap", "React Native"
    ],
    backend: [
      "Node.js", "Express", "PHP", "JWT", "Socket.IO"
    ],
    database: [
      "SQL", "PostgreSQL", "MySQL", "MongoDB", "Sequelize", "TypeORM", "Prisma"
    ],
    devops: [
      "Docker", "Linux Server (nginx)", "Unix / Bash", "Git", "GitHub", "CI/CD"
    ],
    other: [
      "Retool", "Fluent English", "Native Fluent Portuguese"
    ]
  };

  return (
    <section id="skills" className="py-20 container">
      <SectionTitle title={t.skills.title} icon={<Code className="h-6 w-6" />} />
      
      <Tabs defaultValue="frontend" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
          <TabsTrigger value="frontend">{t.skills.frontend}</TabsTrigger>
          <TabsTrigger value="backend">{t.skills.backend}</TabsTrigger>
          <TabsTrigger value="database">{t.skills.database}</TabsTrigger>
          <TabsTrigger value="devops">{t.skills.devops}</TabsTrigger>
          <TabsTrigger value="other">{t.skills.other}</TabsTrigger>
        </TabsList>
        
        {Object.entries(skillCategories).map(([category, skills]) => (
          <TabsContent key={category} value={category} className="mt-0">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <Badge variant="secondary" className="px-3 py-1 text-sm">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

function About() {
  const { t } = useLanguage();
  
  const education = [
    {
      degree: "Bachelor of Information Systems",
      institution: "UniFOA",
      location: "Volta Redonda, RJ, BR",
      period: "01/2021 - 12/2024",
      achievements: [
        "GPA of 9.3",
        t.about.education.highestGPA
      ]
    },
    {
      degree: "Industrial Automation Technician",
      institution: "IFRJ - CVR",
      location: "Volta Redonda, RJ, BR",
      period: "01/2017 - 01/2021",
      achievements: [
        t.about.education.highSchool
      ]
    }
  ];

  return (
    <section id="about" className="py-20 container">
      <SectionTitle title={t.about.title} icon={<User className="h-6 w-6" />} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>{t.about.personalInfo.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {t.about.personalInfo.description}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              {t.about.education.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="space-y-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h4 className="font-medium">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution} • {edu.location}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">{edu.period}</span>
                </div>
                <ul className="list-disc pl-5 space-y-1">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground">{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-20 container">
      <SectionTitle title={t.contact.title} icon={<Mail className="h-6 w-6" />} />
      
      <Card>
        <CardHeader>
          <CardTitle>{t.contact.subtitle}</CardTitle>
          <CardDescription>
            {t.contact.available}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="font-medium">{t.contact.contactInfo}</h3>
            <p className="text-muted-foreground">{t.footer.email}: lamongabriel@icloud.com</p>
            <p className="text-muted-foreground">{t.footer.phone}: +55 (24) 99912-7331</p>
            <p className="text-muted-foreground">{t.contact.location}: Volta Redonda, RJ, Brazil</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">{t.contact.socialMedia}</h3>
            <p className="text-muted-foreground">{t.footer.linkedin}: linkedin.com/in/lamongabriel</p>
            <p className="text-muted-foreground">{t.footer.github}: github.com/lamongabriel</p>
            <p className="text-muted-foreground">Website: lamongabriel.com</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="gap-2">
            <Link href="mailto:lamongabriel@icloud.com">
              {t.contact.sendEmail}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="https://linkedin.com/in/lamongabriel" target="_blank" rel="noopener noreferrer">
              {t.contact.linkedinProfile}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
