import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Hero section with AI college assistant"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-0">
        <img
          src="/background.webp"
          alt="Campus background"
          className="w-full h-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 text-center max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-accent/20 bg-card/50 backdrop-blur-sm animate-float">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-muted-foreground">
            AI-Powered College Intelligence
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse">
         &lt;ASTRA/&gt;
        </h1>

        {/* Subtitles */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
          Your AI companion for navigating college life
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Discover everything about your college—from academic programs to campus
          events—powered by cutting-edge AI.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Explore Your College
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-4 border-accent/30 hover:border-accent"
          >
            Learn More
          </Button>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
