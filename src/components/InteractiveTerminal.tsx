import { useEffect, useRef, useState, KeyboardEvent } from "react";
import { motion } from "framer-motion";

type Line = { type: "input" | "output"; text: string };

const HELP = `Available commands:
  help          - show this help
  about         - quick bio
  skills        - my tech stack
  projects      - featured projects
  experience    - work history
  resume        - download resume
  contact       - get in touch
  social        - github / linkedin
  clear         - clear the terminal`;

const RESPONSES: Record<string, string | (() => string)> = {
  help: HELP,
  about: "Surprise Popoola — DevOps & Cloud Engineer building scalable, secure, automated infrastructure.",
  skills: "AWS · Azure · GCP · Kubernetes · OpenShift · Docker · Terraform · Ansible · Jenkins · GitHub Actions · Prometheus · Grafana · Datadog · New Relic · ELK · Python · Bash",
  projects: "1) Zero Downtime Banking Platform\n2) KubeOps Platform\n3) Serverless AWS Suite\n4) Cloud Infrastructure Automation\n→ scroll to #projects for details",
  experience: "• First Bank PLC — DevOps Engineer (Jul 2025 – Present)\n• Techscale Solution — DevOps & Cloud Engineer (Mar 2021 – Apr 2025)",
  resume: "Opening Surprise_POPOOLA_Resume.pdf ...",
  contact: "popesurprise@gmail.com  |  +234 903 883 4820  |  +1 484 919 9407",
  social: "github.com/Popesurprise\nlinkedin.com/in/surprisepopoola",
};

const PROMPT = "surprise@devops:~$";

const InteractiveTerminal = () => {
  const [history, setHistory] = useState<Line[]>([
    { type: "output", text: "Welcome! Type `help` to see available commands." },
  ]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === "clear") {
      setHistory([]);
      return;
    }
    const next: Line[] = [...history, { type: "input", text: raw }];
    if (cmd === "resume") {
      window.open("/Surprise_POPOOLA_Resume.pdf", "_blank");
    }
    const r = RESPONSES[cmd];
    next.push({ type: "output", text: r ? (typeof r === "function" ? r() : r) : `command not found: ${cmd} — try 'help'` });
    setHistory(next);
  };

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      run(value);
      setValue("");
    }
  };

  return (
    <section className="section-pad bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="font-mono text-primary text-sm mb-3">// try.it</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Interactive <span className="gradient-text">Terminal</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Type a command below — start with <span className="font-mono text-primary">help</span>.
          </p>
        </motion.div>

        <div
          className="max-w-3xl mx-auto rounded-xl border border-border overflow-hidden glass shadow-xl"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/60">
            <span className="w-3 h-3 rounded-full bg-destructive/80" />
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(var(--aws-orange) / 0.8)" }} />
            <span className="w-3 h-3 rounded-full bg-primary/80" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">interactive shell</span>
          </div>
          <div
            className="p-5 font-mono text-sm h-80 overflow-y-auto"
            style={{ background: "hsl(var(--terminal))" }}
          >
            {history.map((l, i) => (
              <div key={i} className={l.type === "input" ? "text-primary" : "text-foreground whitespace-pre-wrap"}>
                {l.type === "input" ? `${PROMPT} ${l.text}` : l.text}
              </div>
            ))}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-primary">{PROMPT}</span>
              <input
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={onKey}
                spellCheck={false}
                autoComplete="off"
                className="flex-1 bg-transparent outline-none text-foreground caret-primary"
                aria-label="terminal input"
              />
            </div>
            <div ref={bottomRef} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTerminal;
