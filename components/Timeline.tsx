type TimelineItem = {
  title: string;
  period: string;
  text?: string;
};

export default function Timeline({ title, items }: { title: string; items: TimelineItem[] }) {
  return (
    <section className="mb-16">
      <h2 className="font-display italic text-2xl md:text-3xl text-text mb-8">{title}</h2>
      <ol className="space-y-8 border-l border-stroke pl-8">
        {items.map((item) => (
          <li key={item.title} className="relative">
            <span className="absolute -left-[calc(2rem+3.5px)] top-1.5 w-2 h-2 rounded-full bg-text" />
            <h3 className="font-display italic text-lg md:text-xl text-text mb-1">{item.title}</h3>
            <span className="text-xs text-muted uppercase tracking-wide">{item.period}</span>
            {item.text && (
              <p className="text-sm text-muted leading-relaxed mt-2 max-w-2xl">{item.text}</p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
