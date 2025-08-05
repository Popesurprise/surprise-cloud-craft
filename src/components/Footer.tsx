import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Surprise Popoola</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              DevOps Engineer and Cloud Architect passionate about building 
              scalable, secure, and automated cloud solutions that empower 
              teams to deliver exceptional software.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">
                Blog
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Resume
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Expertise</h4>
            <div className="text-sm space-y-1">
              <div className="text-muted-foreground">AWS Cloud Architecture</div>
              <div className="text-muted-foreground">Kubernetes & Docker</div>
              <div className="text-muted-foreground">CI/CD Automation</div>
              <div className="text-muted-foreground">Infrastructure as Code</div>
              <div className="text-muted-foreground">Site Reliability Engineering</div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              © {currentYear} Surprise Popoola. All rights reserved.
            </div>
            
            <div className="flex items-center gap-2">
              <span>Building technology to serve and innovate</span>
              <Heart className="h-4 w-4 text-destructive" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;