import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

const Contact = () => {
  // Basic SEO
  useEffect(() => {
    document.title = "Contact Astra – Get in Touch";
    const desc = "Contact Astra team for support, partnerships, or inquiries about our AI-powered college intelligence platform.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  const hero = useFadeIn<HTMLElement>();
  const form = useFadeIn<HTMLElement>();
  const info = useFadeIn<HTMLElement>();

  return (
    <div className="min-h-screen bg-background page-transition">
      <Navigation />
      <header className="pt-28 pb-12 px-4">
        <section
          ref={hero.ref}
          className={`max-w-5xl mx-auto text-center transition-all duration-700 ${
            hero.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight bg-gradient-primary bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about Astra? Want to partner with us? We'd love to hear from you.
            Get in touch and let's build the future of college intelligence together.
          </p>
        </section>
      </header>

      <main className="px-4 pb-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */} {/**Not Using Contact Form, Backend is not setup for that */}
          <section
            ref={form.ref}
            className={`transition-all duration-700 ${
              form.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="bg-card/60 backdrop-blur border border-accent/20 rounded-lg p-8">
            <p className="text-muted-foreground mb-8">Note: This form is not built yet! Sorry for the inconvenience occured.</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className="bg-background/50 border-accent/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className="bg-background/50 border-accent/20"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@university.edu"
                    className="bg-background/50 border-accent/20"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Partnership inquiry"
                    className="bg-background/50 border-accent/20"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your inquiry..."
                    className="bg-background/50 border-accent/20 min-h-[120px]"
                  />
                </div>
                <Button variant="glow" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </section>

          {/* Contact Information */}
          <section
            ref={info.ref}
            className={`transition-all duration-700 ${
              info.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in touch</h2>
                <p className="text-muted-foreground mb-8">
                  We're here to help and answer any questions you might have. 
                  We look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">Reach through LinkedIn</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">Not Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office</h3>
                    <p className="text-muted-foreground">
                      Internet is our office
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card/60 backdrop-blur border border-accent/20 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Office Hours</h3>
                <div className="space-y-1 text-muted-foreground">
                  <p>Very flexible</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;