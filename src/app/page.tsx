import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Work } from "@/components/sections/work";
import { Clients } from "@/components/sections/clients";
import { Reviews } from "@/components/sections/reviews";
import { Blogs } from "@/components/sections/blogs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Work />
        <Clients />
        <Reviews />
        <Blogs />
      </main>
      <Footer />
    </>
  );
}
