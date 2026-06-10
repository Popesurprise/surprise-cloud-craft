import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Github } from "lucide-react";
import surpriseHeadshot from "@/assets/surprise-headshot.jpg";

const lines = [
  { prompt: "$ whoami", out: "Surprise Popoola" },
  { prompt: "$ cat role.txt", out: "DevOps Engineer | Cloud Engineer | Platform Engineer | SRE" },
  { prompt: "$ cat mission.md", out: "Building scalable cloud infrastructure, automating deployments,\nand enabling high-availability systems." },
];

function useTyped(text: string, speed = 18, start = true) {
  const [shown, setShown] = useState("");
  useEffect(() => {
    if (!start) return;
    setShown("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, start]);
  return shown;
}

const TerminalLine = ({ prompt, out, delay }: { prompt: string; out: string; delay: number }) => {
  const [start, setStart] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStart(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  const typedPrompt = useTyped(prompt, 25, start);
  const done = typedPrompt === prompt;
  const typedOut = useTyped(out, 14, done);
  return (
    <div className="font-mono text-sm md:text-base leading-relaxed">
      <div className="text-primary">
        {typedPrompt}
        {!done && <span className="terminal-cursor" />}
      </div>
      {done && (
        <div className="text-foreground whitespace-pre-line pl-2">
          {typedOut}
          {typedOut.length < out.length && <span className="terminal-cursor" />}
        </div>
      )}
    </div>
  );
};

const Hero = () => {
  const scroll = (h: string) => document.querySelector(h)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl float-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl float-med" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-aws-orange/10 rounded-full blur-3xl float-fast"
             style={{ backgroundColor: "hsl(var(--aws-orange) / 0.1)" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Terminal window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="rounded-xl border border-border overflow-hidden glass shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                <span className="w-3 h-3 rounded-full bg-destructive/80" />
                <span className="w-3 h-3 rounded-full bg-aws-orange/80" style={{ backgroundColor: "hsl(var(--aws-orange) / 0.8)" }} />
                <span className="w-3 h-3 rounded-full bg-primary/80" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">surprise@devops: ~/portfolio</span>
              </div>
              <div className="p-5 md:p-8 space-y-4 min-h-[280px]"
                   style={{ background: "hsl(var(--terminal))" }}>
                {lines.map((l, i) => (
                  <TerminalLine key={i} prompt={l.prompt} out={l.out} delay={i * 1600} />
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.5, duration: 0.6 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <Button size="lg" onClick={() => scroll("#projects")} className="font-mono">
                <ArrowRight className="mr-2 h-4 w-4" /> View Projects
              </Button>
              <Button size="lg" variant="outline" asChild className="font-mono">
                <a href="/Surprise_POPOOLA_Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
              <Button size="lg" variant="secondary" onClick={() => scroll("#contact")} className="font-mono">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
              <Button size="lg" variant="ghost" asChild className="font-mono">
                <a href="https://github.com/Popesurprise" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary via-accent to-aws-orange opacity-40 blur-2xl"
                   style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--aws-orange)))" }} />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/40 glow-green animate-pulse-ring">
                <img src={surpriseHeadshot} alt="Surprise Popoola — DevOps Engineer" className="w-full h-full object-cover" />
              </div>
              {/* Floating tech badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-2 -right-4 px-3 py-1.5 rounded-full glass font-mono text-xs font-semibold text-aws"
              >
                AWS
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute top-1/3 -left-6 px-3 py-1.5 rounded-full glass font-mono text-xs font-semibold text-k8s"
              >
                K8s
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
                className="absolute -bottom-2 right-4 px-3 py-1.5 rounded-full glass font-mono text-xs font-semibold text-tf"
              >
                Terraform
              </motion.div>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 4.5 }}
                className="absolute bottom-6 -left-4 px-3 py-1.5 rounded-full glass font-mono text-xs font-semibold text-primary"
              >
                CI/CD
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
