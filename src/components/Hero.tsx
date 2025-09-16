export function Hero() {
  return (
    <section className="section pt-16 md:pt-24" id="hero" aria-label="Intro">
      <div className="container flex flex-col gap-8 md:gap-12">
        <div className="max-w-2xl flex flex-col gap-6">
          <h1 className="text-3xl/tight sm:text-4xl/tight md:text-5xl font-semibold tracking-tight">
            Ship real <span className="text-blue-600 dark:text-blue-400">AI outcomes</span> faster.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed">
            Strategy, models, automation & visualization—delivered with lean cycles and production rigor.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#contact" className="inline-flex justify-center items-center rounded-md bg-foreground text-background px-5 h-11 text-sm font-medium hover:opacity-90 focus:outline-none focus:ring ring-offset-2 ring-offset-background ring-foreground/40">
              Start a project
            </a>
            <a href="#portfolio" className="inline-flex justify-center items-center rounded-md border border-foreground/25 px-5 h-11 text-sm font-medium hover:bg-foreground/5 focus:outline-none focus:ring ring-offset-2 ring-offset-background ring-foreground/30">
              View work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
