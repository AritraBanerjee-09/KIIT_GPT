import { Button } from "@/components/ui/button";
import { Mail, Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {

   const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/5 border-t border-accent/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              ASTRA
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering college students with AI-driven insights and intelligent campus navigation. Your journey to academic success starts here.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-accent">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-accent">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-accent">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-accent">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/features" className="hover:text-accent transition-colors">Features</a></li>
              <li><a href="/chat" className="hover:text-accent transition-colors">AI Assistant</a></li>
              <li><a href="/campus-maps" className="hover:text-accent transition-colors">Campus Maps</a></li>
              <li><a href="/community" className="hover:text-accent transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/help-center" className="hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="/contact" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-accent/20 pt-8 text-center text-muted-foreground">
          <p className="mb-4">&copy; {currentYear} Astra. All rights reserved. Built with AI for the future of education.</p>
          <p>Note: This site is underdevelopment.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;