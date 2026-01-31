import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CirclePlay, Github } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  internalLink: string;
  externalLink: string;
  deployedLink?: string;
  image: string;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.toReversed().map((project) => (
          <Card key={project.title}>
            <CardHeader className="relative h-48 p-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <Link href={project.internalLink}>
                  <h2 className="font-semibold hover:underline">
                    {project.title}
                  </h2>
                </Link>
                <div className="flex my-2">
                <Link
                    href={project.externalLink}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Github />
                  </Link>
                  {project.deployedLink &&
                  <Link
                    href={project.deployedLink}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary text-blue-500 ml-3"
                  >
                    <CirclePlay />
                  </Link>
                  }
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              
            </CardContent>
            
          </Card>
        ))}
      </div>
    </section>
  );
}
