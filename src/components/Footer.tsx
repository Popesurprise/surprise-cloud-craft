import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-mono text-sm text-muted-foreground">
            Built with <Heart className="inline h-3 w-3 text-destructive" /> by{" "}
            <span className="text-primary font-semibold">Surprise Popoola</span>
          </p>
          <p className="font-mono text-xs text-muted-foreground mt-1">
            Powered by React + TypeScript + TailwindCSS · © {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex gap-3">
          <a href="https://github.com/Popesurprise" target="_blank" rel="noopener noreferrer"
             className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/surprisepopoola" target="_blank" rel="noopener noreferrer"
             className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="mailto:popesurprise@gmail.com"
             className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
