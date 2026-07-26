import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const REVIEWS = [
  {
    quote:
      "Clue rebuilt our marketing site in three weeks and load time dropped from six seconds to under one.",
    name: "Ananya Rao",
    role: "Head of Product, Northline Robotics",
  },
  {
    quote:
      "They pushed back on our first brief and the result was better than what we asked for.",
    name: "Marcus Webb",
    role: "Founder, Fernbank Coffee Co.",
  },
  {
    quote:
      "Every animation on our app has a reason. Nothing feels bolted on for show.",
    name: "Priya Chandrasekaran",
    role: "VP Design, Marlow Health",
  },
  {
    quote:
      "Handoff was clean, docs were clear, and our own team could extend the system after launch.",
    name: "Tom Renwick",
    role: "COO, Onward Freight",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            What clients say
          </h2>
        </Reveal>
      </Container>

      <div className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 md:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {REVIEWS.map((review) => (
          <Reveal
            key={review.name}
            className="w-[85vw] shrink-0 snap-start sm:w-[420px]"
          >
            <figure className="flex h-full flex-col justify-between rounded-3xl border border-border bg-surface p-8">
              <Quotes size={28} weight="fill" className="text-accent" />
              <blockquote className="mt-6 text-lg leading-relaxed text-balance">
                {review.quote}
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-5">
                <div className="text-sm font-medium">{review.name}</div>
                <div className="mt-0.5 text-sm text-muted">{review.role}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
