import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

interface ContactProps {
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };
}

export function Contact({ contact }: ContactProps) {
  return (
    <section className="space-y-2">
      <h2 className="text-2xl font-semibold">Get in Touch</h2>
      <div className="flex flex-wrap gap-4">
        <Button asChild variant="ghost" size="icon">
          <Link href={`mailto:${contact.email}`}>
            <Mail className="h-6 w-6" />
          </Link>
        </Button>
        <Button asChild variant="ghost" size="icon">
          <Link href={contact.github} target="_blank">
            <GitHubLogoIcon className="h-6 w-6" />
          </Link>
        </Button>
        <Button asChild variant="ghost" size="icon">
          <Link href={contact.linkedin} target="_blank">
            <LinkedInLogoIcon className="h-6 w-6" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
