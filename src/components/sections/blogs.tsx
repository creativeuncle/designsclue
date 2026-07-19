import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const FEATURED = {
  title: "Why we moved three client sites off WordPress this year",
  excerpt:
    "Plugin sprawl, six-second load times, and a redesign that took four months longer than it should have.",
  date: "Jun 14, 2026",
  readTime: "7 min read",
  image: "https://picsum.photos/seed/clue-blog-featured/1000/750",
};

const POSTS = [
  {
    title: "A checklist for auditing Core Web Vitals before launch",
    date: "May 2, 2026",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/clue-blog-vitals/600/450",
  },
  {
    title: "Notes from a redesign: what we kept, what we cut",
    date: "Mar 19, 2026",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/clue-blog-redesign/600/450",
  },
];

export function Blogs() {
  return (
    <section id="blog" className="py-24 md:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            From the studio
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal>
            <a href="#" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border">
                <Image
                  src={FEATURED.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 48vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-muted">
                <span>{FEATURED.date}</span>
                <span aria-hidden>-</span>
                <span>{FEATURED.readTime}</span>
              </div>
              <h3 className="mt-3 text-2xl font-medium leading-snug tracking-tight">
                {FEATURED.title}
              </h3>
              <p className="mt-3 max-w-[52ch] text-muted">
                {FEATURED.excerpt}
              </p>
            </a>
          </Reveal>

          <div className="flex flex-col gap-8">
            {POSTS.map((post) => (
              <Reveal key={post.title}>
                <a
                  href="#"
                  className="group flex items-center gap-5 rounded-3xl border border-border p-4 transition-colors hover:bg-surface"
                >
                  <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-2xl sm:w-32">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="128px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 text-sm text-muted">
                      <span>{post.date}</span>
                      <span aria-hidden>-</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="mt-2 text-lg font-medium leading-snug tracking-tight">
                      {post.title}
                    </h3>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
