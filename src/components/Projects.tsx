import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Zero-Downtime Banking Platform",
    description:
      "Highly-available microservices banking infrastructure with blue/green deployments, automated rollback, and end-to-end observability.",
    tech: ["Microservices", "Docker", "Kubernetes", "Prometheus", "Grafana", "CI/CD", "Reliability Engineering"],
    repo: "https://github.com/Popesurprise",
  },
  {
    name: "KubeOps Platform",
    description:
      "Internal Kubernetes platform with GitOps delivery, NGINX ingress, container orchestration, and integrated monitoring.",
    tech: ["Kubernetes", "Container Orchestration", "Docker", "NGINX", "Monitoring"],
    repo: "https://github.com/Popesurprise",
  },
  {
    name: "Serverless E-Commerce Platform",
    description:
      "Event-driven serverless e-commerce stack on AWS with authentication, APIs, and infrastructure provisioned as code.",
    tech: ["AWS Lambda", "DynamoDB", "API Gateway", "Cognito", "Infrastructure as Code"],
    repo: "https://github.com/Popesurprise",
  },
  {
    name: "Cloud File Sharing Platform",
    description:
      "Secure, scalable file-sharing platform with cloud storage, authentication, and pay-as-you-grow architecture.",
    tech: ["AWS", "Cloud Storage", "Authentication", "Scalability"],
    repo: "https://github.com/Popesurprise",
  },
];

const Projects = ({ withHeader = true }: { withHeader?: boolean }) => (
  <section id="projects" className="section-pad">
    <div className="container mx-auto px-4">
      {withHeader && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            Selected DevOps and cloud engineering work demonstrating infrastructure,
            automation, and reliability practices.
          </p>
        </motion.div>
      )}

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group rounded-xl border border-border bg-card p-7 hover:border-primary/50 transition-all hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                {p.name}
              </h3>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded text-[11px] font-mono bg-secondary text-foreground/80 border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <Github className="h-3.5 w-3.5" /> View on GitHub
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
