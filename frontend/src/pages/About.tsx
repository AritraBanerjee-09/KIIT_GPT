import { useEffect, useRef, useState } from "react";
import { Linkedin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
interface Dev {
  name: string;
  role: string;
  image: string;
  staticImage: string;
  linkedin: string;
}

const developers: Dev[] = [
  {
    name: "Aritra Banerjee",
    role: "Full Stack Developer",
    image: "/dev1.webp",
    staticImage:"/placeholder.webp",
    linkedin: "https://www.linkedin.com/in/aritra-banerjee-/"
  },
  {
    name: "Arya Vats",
    role: "ML Engineer",
    image: "/dev2.webp",
    staticImage:"/placeholder.webp",
    linkedin: "https://www.linkedin.com/in/arya-vats-530888275/"
  },
  {
    name: "Atul Rajput",
    role: "Backend Developer",
    image: "/dev.gif",
    staticImage:"/placeholder.webp",
    linkedin: "https://www.linkedin.com/in/eatulrajput"
  },
  {
    name: "Harsh Agarwalla",
    role: "Software Tester",
    image: "/dev4.webp",
    staticImage:"/placeholder.webp",
    linkedin: "https://www.linkedin.com/in/harsh-agrawalla-a35856274/"
  }
];

// Simple fade-up on view utility
function useFadeIn<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible } as const;
}

const About = () => {
  // Basic SEO
  useEffect(() => {
    document.title = "About Astra – AI College Intelligence";
    const desc = "Learn about Astra: our mission, vision, and the team building AI-powered college intelligence.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  const hero = useFadeIn<HTMLElement>();
  const mission = useFadeIn<HTMLElement>();
  const vision = useFadeIn<HTMLElement>();
  const team = useFadeIn<HTMLElement>();

  return (
    <div className="min-h-screen bg-background page-transition">
      <Navigation />
      <header className="pt-28 pb-12 px-4">
        <section
          ref={hero.ref}
          className={`max-w-5xl mx-auto text-center transition-all duration-700 ${hero.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight bg-gradient-primary bg-clip-text text-transparent">
            About Astra
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Astra is your AI-powered companion for exploring and understanding your college—
            programs, people, places, and events—so you can make smarter decisions, faster.
          </p>
        </section>
      </header>

      <main>
        <section
          ref={mission.ref}
          className={`px-4 py-12 border-t border-accent/20 transition-all duration-700 ${mission.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <article className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground text-base md:text-lg">
              We believe that every student deserves clear, actionable insights about their campus.
              Our mission is to turn fragmented information into a beautifully organized, AI-curated
              experience—from academic paths and faculty expertise to societies, events, and support services.
            </p>
          </article>
        </section>

        <section
          ref={vision.ref}
          className={`px-4 py-12 border-t border-accent/20 transition-all duration-700 ${vision.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <article className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground text-base md:text-lg">
              We envision a campus where every decision—choosing a course, finding a lab, joining a club—
              is supported by trustworthy, real-time intelligence. Astra aims to be the intelligent layer
              that empowers students, staff, and administrators to build connected, thriving campus communities.
            </p>
          </article>
        </section>

        <section
          ref={team.ref}
          className={`px-4 py-12 border-t border-accent/20 transition-all duration-700 ${team.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Developers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {developers.map((dev) => (
                <article
                  key={dev.name}
                  className="group border border-accent/20 bg-card/60 backdrop-blur rounded-md p-4 hover:shadow-lg transition-shadow"
                >
                  <div
                    className="aspect-square w-full overflow-hidden border border-border hover:cursor-pointer grayscale hover:grayscale-0 duration-700 blur hover:blur-0 relative group rounded-none"
                  >
                    {/* Static image (shown by default) */}
                    <img
                      src={dev.staticImage} // e.g. PNG or JPG
                      alt={`${dev.name} – ${dev.role}`}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:opacity-0 transition-opacity duration-300 absolute top-0 left-0"
                    />

                    {/* GIF image (only appears on hover) */}
                    <img
                      src={dev.image} // animated .gif
                      alt={`${dev.name} - ${dev.role}`}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>

                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold leading-tight">{dev.name}</h3>
                      <p className="text-sm text-muted-foreground">{dev.role}</p>
                    </div>
                    <a
                      href={dev.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn profile of ${dev.name}`}
                      className="p-2 rounded-md border border-accent/20 hover:bg-accent/10 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-accent" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
