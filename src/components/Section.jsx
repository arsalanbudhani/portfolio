export const Section = ({ id, eyebrow, title, children }) => {
  return (
    <section id={id} className="scroll-mt-16 border-t border-zinc-200 py-20 sm:py-24 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-sm font-semibold tracking-wider text-accent uppercase dark:text-accent-light">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
};
