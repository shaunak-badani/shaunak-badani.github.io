import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <div className="space-y-6">
        {experience.map((item) => (
          <Card key={item.company}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.company}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.location}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {item.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
