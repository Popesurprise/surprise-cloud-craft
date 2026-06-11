import { motion } from "framer-motion";
import { Cloud, GitBranch, FileCode2, LineChart, Code2 } from "lucide-react";

const groups = [
  { icon: Cloud, title: "Cloud", items: ["AWS", "Cloud Architecture", "Serverless Computing"] },
  { icon: GitBranch, title: "DevOps", items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "CI/CD"] },
  { icon: FileCode2, title: "Infrastructure as Code", items: ["Terraform", "Ansible", "CloudFormation"] },
  { icon: LineChart, title: "Monitoring", items: ["Prometheus", "Grafana", "Datadog", "ELK"] },
  { icon: Code2, title: "Programming", items: ["Python", "Bash"] },
];

const Skills = ({ withHeader = true }: { withHeader?: boolean }) => (
  <section id="skills" className="section-pad bg-secondary/30">
    <div className="container mx-auto px-4">
      {withHeader && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <g.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="px-3 py-1 rounded-md text-xs font-mono border border-border bg-background text-foreground/80"
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
