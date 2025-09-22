import Image from "next/image";

import { projects } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MacrogradProject() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Project Header */}
      <h1 className="text-4xl font-bold mb-2 tracking-tight">
        {projects[0].title}
      </h1>
      <p className="text-muted-foreground mb-6">{projects[0].description}</p>
      <div className="relative w-full h-[600px] mb-8 rounded-lg overflow-hidden">
        <Image
          src="/projects/wordweight/WordWeight2.gif"
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
            WordWeight takes your input prompt, and first generates an image for you. Then, when you ask for an explanation of a 
            part of the image, wordweight computes the scalar of the sum of the products of the image mask and the actual generated image. A backward
            propagation follows, populating the gradients of the token embeddings. Using a vanilla gradient embedding method, each token&apos;s weight 
            is computed and shown on the UI.
          </p>
        </div>
      </section>
      {/* Technologies Used */}
      <section className="mb-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-3">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-2">
          {["Replicate", "PyTorch", "Azure", "PostgresQL"].map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-3">
          Key Challenges
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Gradient computations beyond 8 repitions of the diffusion model were difficult because the GPU kept running out of memory. Used PyTorch checkpointing to work around this.</li>
          <li>Running a diffusion model in a deployed application needed a GPU, with reasonable cost. Used Replicate (an on-demand GPU allocation service) to setup the image explanation scripts.</li>
          <li>Needed a low cost method to deploy the application for long periods of time. Used Azure App Services, which relies on cold start mechanisms, incurring <b>no charge</b> to host the application online.</li>
        </ul>
      </section>

      {/* GitHub Link */}
      <section>
        <Button asChild className="mr-6" variant="outline">
          <a
            href="https://github.com/shaunak-badani/WordWeight"
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
            href="https://wordweight.azurewebsites.net/"
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
