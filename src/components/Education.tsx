import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface EducationItem {
  degree: string;
  school: string;
  location: string;
  period: string;
  description: string;
}

interface EducationProps {
  education: EducationItem[];
}

export function Education({ education }: EducationProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Education</h2>
      <div className="space-y-6">
        {education.map((item) => (
          <Card key={item.school}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{item.degree}</h3>
                  <p className="text-sm text-muted-foreground">{item.school}</p>
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
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
