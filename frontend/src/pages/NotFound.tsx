import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4 page-transition">
      <div className="text-center animate-fade-in">
        <h1
          className="text-[10rem] font-medium leading-none mb-4"
          style={{
            textShadow: "0 0 40px hsl(var(--accent) / 0.5)",
            color: "hsl(var(--accent))",
          }}
        >
          404
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-2xl font-medium bg-accent text-accent-foreground shadow-lg transition hover:shadow-[0_0_20px_hsl(var(--accent)/0.5)]"
        >
         Let's go home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
