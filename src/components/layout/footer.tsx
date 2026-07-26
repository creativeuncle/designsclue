import Link from "next/link";
import {
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/container";
import { MagneticButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const FOOTER_LINKS = {
  Studio: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Blog", href: "#blog" },
  ],
  Contact: [
    { label: "hello@clue.studio", href: "mailto:hello@clue.studio" },
    { label: "+91 98765 43210", href: "tel:+919876543210" },
  ],
};

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", icon: InstagramLogo },
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinLogo },
  { label: "X", href: "https://x.com", icon: XLogo },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      <Container className="py-24 md:py-32">
        <Reveal className="max-w-3xl">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Have a project in mind? Let&apos;s start a project.
          </h2>
          <div className="mt-10">
            <MagneticButton href="mailto:hello@clue.studio">
              Start a project
            </MagneticButton>
          </div>
        </Reveal>

        <div className="mt-24 grid grid-cols-2 gap-8 border-t border-border pt-12 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-2">
            <span className="text-lg font-semibold tracking-tight">
              Clue<span className="text-accent">.</span>
            </span>
            <p className="mt-3 max-w-[32ch] text-sm text-muted">
              A small studio designing and building fast, distinctive
              websites and products.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-medium text-muted">{heading}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Clue Studio. All rights reserved.</p>
          <p>Bengaluru, India</p>
        </div>
      </Container>
    </footer>
  );
}
