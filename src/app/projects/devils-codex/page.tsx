import Image from "next/image";

import { projects } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MacrogradProject() {

  const projectId = 1;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Project Header */}
      <h1 className="text-4xl font-bold mb-2 tracking-tight">
        {projects[projectId].title}
      </h1>
      <p className="text-muted-foreground mb-6">{projects[projectId].description}</p>
      <div className="relative w-full h-[600px] mb-8 rounded-lg overflow-hidden">
        <Image
          src={projects[projectId].image}
          alt="WordWeight"
          fill
          className="object-cover"
        />
      </div>

      {/* Project Description */}
      <section className="space-y-6 mb-6">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
          Devils Codex is an intelligent chatbot assistant designed to help prospective students explore life at Duke University. Whether it&apos;s questions about the AI Master of Engineering (AI MEng) program, 
          campus events, or general information about Duke, Devils Codex provides helpful, accurate responses using 
          OpenAI&apos;s function calling framework. The application is built with a FastAPI backend and a React + Vite 
          frontend, and is deployed on Azure using App Services for seamless, scalable hosting.
          </p>
        </div>
      </section>
      {/* Technologies Used */}
      <section className="mb-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-3">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-2">
          {projects[projectId].technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* Key Challenges */}
      <section className="mb-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-3">
          Key Challenges
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li><b>Managing API Rate Limits</b> – During development, rate limits on OpenAI’s API posed a constraint. Used gpt-4o mini for faster iteration and low-cost development, and switched to gpt-4o for production to ensure higher reliability and performance.</li>
          <li><b>Multi-step Reasoning in Conversations</b> – Some chatbot tasks required sequential steps with intermediate outputs. Ensured that outputs from the first step contained all necessary context and data for the language model to complete the second step effectively.</li>
        </ul>
      </section>

      {/* GitHub Link */}
      <section>
        <Button asChild className="mr-6" variant="outline">
          <a
            href={projects[projectId].externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="items-center"
          >
            View on Github
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
        {/* <Button asChild className="bg-blue-600 text-white">
          <a
            href={projects[projectId].deployedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="items-center"
            
          >
            View deployed application
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button> */}
      </section>
    </div>
  );
}
