import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import surpriseHeadshot from "@/assets/surprise-headshot.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in">
            <div className="space-y-4 stagger-children">
              <h1 className="text-4xl md:text-6xl font-bold heading-gradient leading-tight">
                Surprise POPOOLA
              </h1>
              <div className="text-xl md:text-2xl text-primary font-semibold glow-effect px-6 py-2 rounded-lg bg-primary/5 border border-primary/20 backdrop-blur-sm">
                DevOps Engineer | Cloud Architect | Solutions Architect | SRE
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Building scalable, secure, and automated cloud solutions with AWS, Docker, 
                and Kubernetes. Passionate about creating robust infrastructure that empowers 
                teams to deliver exceptional software.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 stagger-children">
              <Button 
                size="lg" 
                className="gradient-tech hover:opacity-90 transition-all duration-300 hover-lift glow-effect"
                onClick={() => scrollToSection("#projects")}
              >
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="hover-lift"
                onClick={() => scrollToSection("#contact")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Hire Me
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="hover-lift"
              >
                <Download className="mr-2 h-5 w-5" />
                Resume
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end slide-up">
            <div className="relative float-animation">
              <div className="w-80 h-80 rounded-full overflow-hidden tech-shadow hover-lift glow-effect border-4 border-primary/20">
                <img 
                  src={surpriseHeadshot} 
                  alt="Surprise POPOOLA - DevOps Engineer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-tech-blue/30 rounded-full pulse-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-tech-green/30 rounded-full pulse-glow" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-primary/40 rounded-full pulse-glow" style={{animationDelay: '3s'}}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle tech background pattern */}
      <div className="absolute inset-0 circuit-bg opacity-20"></div>
    </section>
  );
};

export default Hero;