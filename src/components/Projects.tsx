import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
};

const featured = [
  {
    name: "Zero Downtime Banking Platform",
    description: "Highly-available banking infrastructure with blue/green deployments, automated rollback and observability.",
    tech: ["Kubernetes", "Terraform", "Jenkins", "Prometheus", "Grafana", "Docker"],
  },
  {
    name: "KubeOps Platform",
    description: "Internal Kubernetes platform with GitOps delivery, secret management and pre-baked golden images.",
    tech: ["Kubernetes", "Docker", "ArgoCD", "Helm"],
  },
  {
    name: "Serverless AWS Suite",
    description: "Production serverless services on AWS — APIs, auth, and event-driven processing.",
    tech: ["Lambda", "DynamoDB", "API Gateway", "Cognito"],
  },
  {
    name: "Cloud Infrastructure Automation",
    description: "Reusable Terraform modules and pipelines provisioning multi-account AWS infrastructure.",
    tech: ["Terraform", "AWS", "GitHub Actions"],
  },
];

const Projects = () => {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/Popesurprise/repos?sort=updated&per_page=8")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: Repo[]) => setRepos(data.filter((r) => !r.name.includes(".github"))))
      .catch(() => setError(true));
  }, []);

  return (
    <section id="projects" className="section-pad bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-mono text-primary text-sm mb-3">// projects.json</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Selected DevOps, cloud and platform work — plus live data from my GitHub.
          </p>
        </motion.div>

        {/* Featured handcrafted */}
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {featured.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="hover-lift rounded-xl gradient-border p-6"
            >
              <h3 className="text-lg font-bold mb-2">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded text-[11px] font-mono bg-primary/10 text-primary border border-primary/20">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub live repos */}
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-mono text-sm text-muted-foreground">$ git log --recent</h3>
          <Button variant="outline" size="sm" asChild>
            <a href="https://github.com/Popesurprise" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" /> All Repositories
            </a>
          </Button>
        </div>

        {error && (
          <p className="text-sm text-muted-foreground font-mono">// could not load GitHub repos right now</p>
        )}

        {!repos && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-44 rounded-xl border border-border bg-card animate-pulse" />
            ))}
          </div>
        )}

        {repos && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.slice(0, 6).map((r, i) => (
              <motion.a
                key={r.id}
                href={r.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="hover-lift rounded-xl border border-border bg-card p-5 block group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-primary group-hover:underline">{r.name}</h4>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 min-h-[40px]">
                  {r.description || "No description provided."}
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                  {r.language && (
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {r.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1"><Star className="h-3 w-3" /> {r.stargazers_count}</span>
                  <span className="flex items-center gap-1"><GitFork className="h-3 w-3" /> {r.forks_count}</span>
                  <span className="flex items-center gap-1 ml-auto">
                    <Calendar className="h-3 w-3" /> {new Date(r.updated_at).toLocaleDateString()}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
