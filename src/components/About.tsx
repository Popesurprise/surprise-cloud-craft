import { motion } from "framer-motion";
import { Cloud, Cpu, GitBranch, ShieldCheck } from "lucide-react";

const highlights = [
  { icon: Cloud, title: "Cloud", desc: "AWS · Azure · GCP" },
  { icon: Cpu, title: "Platforms", desc: "Kubernetes · Docker" },
  { icon: GitBranch, title: "Automation", desc: "Terraform · Ansible · Jenkins" },
  { icon: ShieldCheck, title: "Observability", desc: "Grafana · Prometheus · ELK" },
];

const About = ({ withHeader = true }: { withHeader?: boolean }) => (
  <section id="about" className="section-pad">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        {withHeader && (
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
        )}
        <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed text-left md:text-center">
          <p>
            I am a passionate technology professional with experience in DevOps engineering,
            cloud computing, automation, and infrastructure management. My background spans
            executive support, operations management, and software engineering, giving me a
            unique ability to bridge business objectives with technical execution.
          </p>
          <p>
            Currently pursuing a career in Cloud and DevOps Engineering, I enjoy building
            resilient systems, automating repetitive processes, and implementing modern
            deployment practices that improve reliability and efficiency.
          </p>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <h.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">{h.title}</h3>
            <p className="font-mono text-xs text-muted-foreground">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
