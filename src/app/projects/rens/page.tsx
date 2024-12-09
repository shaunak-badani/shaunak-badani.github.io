import Image from "next/image";

import { projects } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RENSProject() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Project Header */}
      <h1 className="text-4xl font-bold mb-2 tracking-tight">
        {projects[1].title}
      </h1>
      <p className="text-muted-foreground mb-6">{projects[1].description}</p>
      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src="/projects/rens/RENS_schematic.png"
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
            Implemented a novel molecular dynamics algorithm whose details are mentioned in Prof. Jarzynski's paper, titled "Replica exchange with non equilibrium switches.
            The mathematical framework used to derive the propagator equations from the differential equations has been outlined in the paper "Explicit reversible integrators for extended systems dynamics", Martyna Et. Al, 1996.
            After a thorough review of the aforementioned paper, the mathematical framework was applied to derive the propagator equations. Following the derivation, several hypothesis programs were written in python
            to test the correctness of the written algorithm. After a lot of trial and error for hyperparameter values, we were able to achieve the same results as outlined in the paper. The method was implemented on 3 more test systems
            to show it's effectiveness on sampling the positional space on systems of different potential energy curves. The paper was rejected at first due to the small length of simulations reported. Since the hypothesis had been proven to work
            in python, the code was ported over to C++ in favor of speed. Extremely long simulations could now be completed in short intervals of time, and improved results were added to the paper, following which
            the research work was accepted in October of 2022.
          </p>
        </div>
      </section>
      {/* Technologies Used */}
      <section className="mb-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-3">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-2">
          {["Python", "Numpy", "C++"].map((tech) => (
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
          <li>Ability to perform standard molecular dynamics system for any toy potential energy function.</li>
          <li>Can use one of two thermostats for isothermal (NVT) simulations: langevin or Nose-Hoover.</li>
          <li>Can perform NVE (constant energy), NVT (constant temperature and volume) or NPT (constant pressure and temperature) simulations seamlessly.</li>
        </ul>
      </section>

      {/* GitHub Link */}
      <section>
        <Button asChild>
          <a
            href="https://github.com/shaunak-badani/RENS-CPP"
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
