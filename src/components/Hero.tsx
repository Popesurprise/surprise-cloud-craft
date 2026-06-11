import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Mail } from "lucide-react";
import surpriseHeadshot from "@/assets/surprise2.png";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12 xl:px-16 relative">
        <div className="grid lg:grid-cols-5 gap-8 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 order-2 lg:order-1"
          >
            <p className="font-mono text-primary text-sm mb-4 tracking-wider">
              SURPRISE POPOOLA
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hi, I'm <span className="gradient-text">Surprise</span>.
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 mb-4 font-medium">
              DevOps Engineer · Site Reliability Engineer · Cloud Infrastructure Engineer
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              I design, automate, and optimize cloud-native infrastructure using modern DevOps
              practices. My focus is on building reliable, scalable, and secure systems through
              Infrastructure as Code, CI/CD automation, containerization, and cloud technologies.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="/Surprise_POPOOLA_Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link to="/contact">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/30 via-accent/20 to-aws-orange/20 blur-2xl"
                   style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.2), hsl(var(--aws-orange) / 0.2))" }} />
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border border-border shadow-2xl">
                <img
                  src={surpriseHeadshot}
                  alt="Surprise Popoola — DevOps Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
