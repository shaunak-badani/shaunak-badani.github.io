interface AboutProps {
  content: string;
}

export function About({ content }: AboutProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">About Me</h2>
      <p className="text-muted-foreground leading-relaxed">{content}</p>
    </section>
  );
}
