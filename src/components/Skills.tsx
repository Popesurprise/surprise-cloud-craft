import { motion } from "framer-motion";
import { Cloud, Box, GitBranch, FileCode2, LineChart, Code2 } from "lucide-react";

const groups = [
  { icon: Cloud, title: "Cloud", color: "aws-orange", items: ["AWS", "Azure", "GCP"] },
  { icon: Box, title: "Containers & Orchestration", color: "k8s-blue", items: ["Docker", "Kubernetes", "OpenShift", "Helm"] },
  { icon: GitBranch, title: "CI / CD", color: "github-green", items: ["Jenkins", "GitHub Actions", "GitLab CI", "CircleCI", "ArgoCD"] },
  { icon: FileCode2, title: "Infrastructure as Code", color: "terraform-purple", items: ["Terraform", "CloudFormation", "Ansible", "Pulumi"] },
  { icon: LineChart, title: "Monitoring & Observability", color: "k8s-blue", items: ["Grafana", "Prometheus", "Datadog", "New Relic", "ELK"] },
  { icon: Code2, title: "Languages", color: "github-green", items: ["Python", "Bash", "PowerShell", "Groovy", "JavaScript", "YAML"] },
];

const Skills = () => (
  <section id="skills" className="section-pad">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="font-mono text-primary text-sm mb-3">// skills.yaml</p>
        <h2 className="text-3xl md:text-5xl font-bold">
          Technical <span className="gradient-text">Stack</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          The tools I use every day to design, build, deploy, and operate production systems.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="hover-lift rounded-xl border border-border bg-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `hsl(var(--${g.color}) / 0.15)` }}
              >
                <g.icon className="h-5 w-5" style={{ color: `hsl(var(--${g.color}))` }} />
              </div>
              <h3 className="font-bold">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="px-3 py-1 rounded-md text-xs font-mono border border-border bg-secondary text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
