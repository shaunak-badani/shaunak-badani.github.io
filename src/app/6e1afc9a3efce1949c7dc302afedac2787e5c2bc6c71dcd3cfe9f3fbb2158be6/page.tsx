import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function MacrogradProject() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-2 tracking-tight">
        For the ladies
      </h1>
      <p className="text-muted-foreground mb-6">
        You were curious enough to click this link, so here&apos;s a little bit about me:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>I like dancing.</li>
        <li>I like playing basketball.</li>
        <li>As you can see, I&apos;m extremely extroverted.</li>
      </ul>
      <p>Now, if you&apos;re interested, please ask me out! I&apos;d love to get to know more about you. So hit me up on slack! @skbadani.</p>
      
      

      {/* Project Description */}
      <section className="space-y-6 my-6">
        
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold">For the guys</h1>
          <p className="text-muted-foreground leading-relaxed">
            Check out my PC setup!
          </p>
          <div className="relative w-full h-[600px] mb-8 rounded-lg overflow-hidden">
            <Image
              src="/PC_Setup.jpg"
              alt="WordWeight"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      {/* Technologies Used */}
      <section className="mb-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-3">
          Specifications:
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li><b>CPU: </b> AMD Ryzen 5 5600X</li>
          <li><b>GPU: </b> AMD Radeon RX 6750 XT</li>
          <li><b>Cooler: </b>Cooler master Hyper 212 Black edition 42 CFM CPU cooler</li>
          <li><b>Motherboard: </b>Gigabyte B550M K Micro ATX AM4 Motherboard.</li>
          <li><b>RAM: </b>Corsair Vengeance LPX 32 GB (4 x 8 GB) DDR4-3200 CL16 Memory</li>
          <li><b>PSU: </b>Corsair CX650M (2021) 650 W 80+ Bronze Certified Semi-modular ATX Power Supply.</li>
          <li><b>SSD: </b>Samsung 970 Evo Plus 1 TB M.2-2280 PCIe 3.0 X4 NVME Solid State Drive.</li>
          <li><b>HDD: </b>2 500GB HDDs, I forgot which brand.</li>
          <li><b>Case: </b>Deepcool CC560 ATX Mid Tower Case.</li>
        </ul>
        <div className="flex flex-wrap gap-2">
          {["Cool", "PC Building", "Budget build"].map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
}
