interface Skill {
  name: string;
  items: string[];
}

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Technical Expertise</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((category) => (
          <div key={category.name} className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">{category.name}</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
