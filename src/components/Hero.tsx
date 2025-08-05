import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import headshotPlaceholder from "@/assets/headshot-placeholder.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-hero">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Surprise Popoola
              </h1>
              <div className="text-xl md:text-2xl text-primary font-semibold">
                DevOps Engineer | Cloud Architect | Solutions Architect | SRE
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Building scalable, secure, and automated cloud solutions with AWS, Docker, 
                and Kubernetes. Passionate about creating robust infrastructure that empowers 
                teams to deliver exceptional software.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-tech hover:opacity-90 transition-opacity"
                onClick={() => scrollToSection("#projects")}
              >
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("#contact")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Hire Me
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Resume
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden tech-shadow hover-lift">
                <img 
                  src={headshotPlaceholder} 
                  alt="Surprise Popoola - DevOps Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-tech-blue/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-tech-green/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;