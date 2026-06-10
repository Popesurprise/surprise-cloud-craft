import { motion } from "framer-motion";
import { Award, Cloud, GraduationCap, Container } from "lucide-react";

const certs = [
  { icon: Cloud, title: "AWS Solutions Architect", issuer: "Amazon Web Services", status: "In Progress", color: "aws-orange" },
  { icon: Container, title: "Certified Kubernetes Administrator (CKA)", issuer: "CNCF", status: "Target 2025", color: "k8s-blue" },
  { icon: Award, title: "DevOps Engineering Specialization", issuer: "Coursera", status: "Completed", color: "github-green" },
  { icon: GraduationCap, title: "Cloud Computing Fundamentals", issuer: "Coursera", status: "Completed", color: "terraform-purple" },
];

const Certifications = () => (
  <section id="certifications" className="section-pad bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="font-mono text-primary text-sm mb-3">// certifications</p>
        <h2 className="text-3xl md:text-5xl font-bold">
          Credentials & <span className="gradient-text">Certifications</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="hover-lift rounded-xl border border-border bg-card p-6"
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: `hsl(var(--${c.color}) / 0.15)` }}
            >
              <c.icon className="h-5 w-5" style={{ color: `hsl(var(--${c.color}))` }} />
            </div>
            <h3 className="font-semibold leading-tight mb-1">{c.title}</h3>
            <p className="text-xs text-muted-foreground mb-3">{c.issuer}</p>
            <span className="inline-block px-2 py-1 rounded text-[10px] font-mono border border-border text-muted-foreground">
              {c.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
