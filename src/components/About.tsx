import { motion } from "framer-motion";
import { Cloud, Cpu, GitBranch, ShieldCheck } from "lucide-react";

const highlights = [
  { icon: Cloud, title: "Multi-Cloud", desc: "AWS · Azure · GCP" },
  { icon: Cpu, title: "Platforms", desc: "Kubernetes · OpenShift · Docker" },
  { icon: GitBranch, title: "Automation", desc: "Terraform · Ansible · Jenkins" },
  { icon: ShieldCheck, title: "Observability", desc: "Datadog · Grafana · ELK · New Relic" },
];

const About = () => (
  <section id="about" className="section-pad relative">
    <div className="absolute inset-0 dot-bg opacity-20 pointer-events-none" />
    <div className="container mx-auto px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <p className="font-mono text-primary text-sm mb-3">// about.md</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-5">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          Hands-on Cloud & DevOps Engineer with experience designing scalable infrastructure,
          high-throughput CI/CD pipelines, Kubernetes platforms, and security-focused deployments
          across AWS, Azure, and GCP. I care about reliability, automation, and shipping value fast —
          with observability built in from day one.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="hover-lift rounded-xl border border-border bg-card p-6"
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
