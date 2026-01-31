import Image from "next/image";

import { projects } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MacrogradProject() {

  const projectId = 4;

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
          IronMan is a mobile application that helps pressers easily manage customer orders and payments without manual receipts. The presser simply enters the quantity of each type of cloth, and the app automatically calculates the total order amount, tracks paid and unpaid orders, and maintains a clear record of how much each customer owes. Customers can view their outstanding balances at any time, promoting transparency and trust, while the presser saves time and effort that would otherwise be spent calculating totals and writing receipts.
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
          <li><b>Implementing Authentication</b> – Implementing authentication on backend with OAuth2 and integrating it with SecureStore on the frontend was a challenge. Ensuring that the user was redirected to login screen when the token expired was also taken care of and implemented.</li>
          <li><b>HTTPS</b> – {"The first version of the application didn't work out of the box. It took some time to realize that mobile applications in production can't make HTTP calls – the API calls need to be HTTPS. Deployed the backend with certificates to ensure requests were possible from the app."}</li>
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
