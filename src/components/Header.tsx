import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <button onClick={() => go("#home")} className="flex items-center gap-2 font-mono font-bold">
          <Terminal className="h-5 w-5 text-primary" />
          <span className="gradient-text text-lg">surprise@devops</span>
          <span className="text-muted-foreground hidden sm:inline">:~$</span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <button
              key={n.label}
              onClick={() => go(n.href)}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors story-link"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-1">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/Popesurprise" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/surprisepopoola" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:popesurprise@gmail.com" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
          <ThemeToggle />
        </div>

        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {open && (
        <nav className="lg:hidden glass border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <button
                key={n.label}
                onClick={() => go(n.href)}
                className="text-left px-3 py-2 rounded-md hover:bg-secondary text-foreground"
              >
                {n.label}
              </button>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-border mt-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/Popesurprise" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className="h-4 w-4" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/surprisepopoola" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:popesurprise@gmail.com" aria-label="Email"><Mail className="h-4 w-4" /></a>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
