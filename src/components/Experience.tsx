import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const roles = [
  {
    company: "First Bank PLC (Contract)",
    title: "DevOps Engineer",
    period: "July 2025 – Present",
    bullets: [
      "Achieved ELITE DORA metrics with multiple deployments per day and sub-hour lead time.",
      "Built and maintained CI/CD pipelines with Jenkins, GitHub Actions, and ArgoCD.",
      "Managed production Kubernetes environments and maintained 99.9% availability.",
      "Automated infrastructure provisioning with Terraform and Ansible.",
      "Implemented observability with New Relic, Datadog, CloudWatch, and the ELK stack.",
    ],
  },
  {
    company: "Techscale Solution",
    title: "DevOps & Cloud Engineer",
    period: "March 2021 – April 2025",
    bullets: [
      "Deployed and operated workloads across AWS, Azure, GCP, and Red Hat OpenShift.",
      "Automated infrastructure with Terraform, Helm, and Ansible.",
      "Integrated security scanning (SonarQube) into delivery pipelines.",
      "Built zero-downtime release and database migration workflows.",
    ],
  },
  {
    company: "Executive Office",
    title: "Executive Assistant to CEO",
    period: "Present",
    bullets: [
      "Coordinate executive operations and strategic initiatives.",
      "Manage schedules, documentation, and organizational workflows.",
      "Support decision-making through research and operational reporting.",
    ],
  },
  {
    company: "Perfect Touches Salon & Spa",
    title: "Administrative Manager",
    period: "Previous",
    bullets: [
      "Managed daily operations and staff coordination.",
      "Improved workflow efficiency and customer service processes.",
    ],
  },
];

const Experience = ({ withHeader = true }: { withHeader?: boolean }) => (
  <section id="experience" className="section-pad">
    <div className="container mx-auto px-4">
      {withHeader && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>
      )}

      <div className="max-w-3xl mx-auto space-y-6">
        {roles.map((r, idx) => (
          <motion.div
            key={r.company + r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="rounded-xl border border-border bg-card p-6 md:p-7 hover:border-primary/40 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="h-4 w-4 text-primary" />
              <span className="font-mono text-xs text-muted-foreground">{r.period}</span>
            </div>
            <h3 className="text-xl font-bold">{r.title}</h3>
            <p className="text-primary font-medium mb-4">{r.company}</p>
            <ul className="space-y-2">
              {r.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-primary mt-1.5 shrink-0">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
