import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Users, BookMarked, Star } from "lucide-react";

type Profile = { public_repos: number; followers: number; following: number; avatar_url: string; bio: string };

const USER = "Popesurprise";

const GitHubActivity = () => {
  const [p, setP] = useState<Profile | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${USER}`)
      .then((r) => r.json())
      .then(setP)
      .catch(() => {});
  }, []);

  const stats = [
    { icon: BookMarked, label: "Repositories", value: p?.public_repos ?? "—" },
    { icon: Users, label: "Followers", value: p?.followers ?? "—" },
    { icon: Star, label: "Following", value: p?.following ?? "—" },
  ];

  return (
    <section className="section-pad">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="font-mono text-primary text-sm mb-3">// github.activity</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="gradient-text">GitHub</span> Activity
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5 mb-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-6 flex items-center gap-4 hover-lift"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold font-mono">{s.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-xl border border-border bg-card p-4 overflow-hidden"
        >
          <p className="font-mono text-xs text-muted-foreground mb-3 px-2">
            $ contributions --user {USER}
          </p>
          <img
            src={`https://ghchart.rshah.org/2EA043/${USER}`}
            alt={`${USER} contribution chart`}
            className="w-full"
            loading="lazy"
          />
          <div className="flex items-center justify-between mt-4 px-2">
            <p className="font-mono text-xs text-muted-foreground">contribution graph · last 12 months</p>
            <a
              href={`https://github.com/${USER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary font-mono inline-flex items-center gap-1 hover:underline"
            >
              <Github className="h-3 w-3" /> @{USER}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubActivity;
