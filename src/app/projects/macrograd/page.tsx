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
      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src="/projects/macrograd/computation_graph.png"
          alt="RENS"
          fill
          className="object-cover"
        />
      </div>

      {/* Project Description */}
      <section className="space-y-6">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            Implemented a custom machine learning framework in C++ by understanding backpropagation in deep learning. Prototyped the framework in python, followed by porting over the code to C++, which
            helped speed up the computation while training. Future work involves benchmarking and comparing with pytorch, followed by implementing matrix multiplications in CUDA to optimize when GPU resources are available.
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

      {/* Key Features */}
      <section className="mb-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-3">
          Key Features
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Can train any number of connected linear layers and train models seamlessly.</li>
          <li>Can use any of the following activation functions: Tanh, sigmoid, ReLU.</li>
          <li>Weights are saved in human readable format, making it easy to import weights into an existing pytorch model.</li>
        </ul>
      </section>

      {/* GitHub Link */}
      <section>
        <Button asChild>
          <a
            href="https://github.com/shaunak-badani/Macrograd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            View on GitHub
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </section>
    </div>
  );
}
