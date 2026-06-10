import { motion } from "framer-motion";
import { Briefcase, TrendingUp } from "lucide-react";

const roles = [
  {
    company: "First Bank PLC (Contract)",
    title: "DevOps Engineer",
    period: "July 2025 – Present",
    color: "primary",
    bullets: [
      "Achieved ELITE DORA metrics — multiple deployments per day, lead time under 1 hour",
      "Reduced code review time by 35% through AI-driven review processes",
      "Built and maintained CI/CD pipelines with Jenkins, GitHub Actions and ArgoCD",
      "Managed production Kubernetes environments at scale",
      "Automated infrastructure provisioning with Terraform and Ansible",
      "Maintained 99.9% availability across critical banking services",
      "Implemented observability with New Relic, Datadog, CloudWatch and the ELK stack",
    ],
  },
  {
    company: "Techscale Solution",
    title: "DevOps & Cloud Engineer",
    period: "March 2021 – April 2025",
    color: "accent",
    bullets: [
      "Deployed and operated workloads on Red Hat OpenShift",
      "Led cloud migrations across AWS, Azure and GCP",
      "Automated infrastructure with Terraform, Helm and Ansible",
      "Performed security audits and integrated SonarQube into delivery pipelines",
      "Automated database migrations and zero-downtime release workflows",
      "Drove ISO compliance initiatives across engineering teams",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="section-pad bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="font-mono text-primary text-sm mb-3">// experience.log</p>
        <h2 className="text-3xl md:text-5xl font-bold">
          Professional <span className="gradient-text">Experience</span>
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-aws-orange opacity-50"
             style={{ background: "linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--aws-orange)))" }} />

        {roles.map((r, idx) => (
          <motion.div
            key={r.company}
            initial={{ opacity: 0, x: idx % 2 ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`relative mb-12 md:w-1/2 ${idx % 2 ? "md:ml-auto md:pl-10" : "md:pr-10"} pl-12 md:pl-0`}
          >
            {/* Dot */}
            <div className={`absolute top-6 left-4 md:left-auto ${idx % 2 ? "md:-left-3" : "md:-right-3"} w-6 h-6 rounded-full bg-primary border-4 border-background animate-pulse-ring`} />

            <div className="hover-lift rounded-xl border border-border bg-card p-6 md:p-7">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="h-4 w-4 text-primary" />
                <span className="font-mono text-xs text-muted-foreground">{r.period}</span>
              </div>
              <h3 className="text-xl font-bold mb-1">{r.title}</h3>
              <p className="text-primary font-semibold mb-4">{r.company}</p>
              <ul className="space-y-2">
                {r.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                    <TrendingUp className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
