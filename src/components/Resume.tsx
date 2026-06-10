import { motion } from "framer-motion";
import { Download, ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const RESUME = "/Surprise_POPOOLA_Resume.pdf";

const Resume = () => (
  <section id="resume" className="section-pad">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="font-mono text-primary text-sm mb-3">// resume.pdf</p>
        <h2 className="text-3xl md:text-5xl font-bold">
          My <span className="gradient-text">Resume</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Preview my latest CV below — or download the full PDF.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          <Button asChild>
            <a href={RESUME} download>
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={RESUME} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Open in New Tab
            </a>
          </Button>
        </div>
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
            <FileText className="h-4 w-4 text-primary" />
            <span className="font-mono text-xs text-muted-foreground">Surprise_POPOOLA_Resume.pdf</span>
          </div>
          <object data={RESUME} type="application/pdf" className="w-full h-[760px] hidden md:block">
            <iframe src={RESUME} title="Resume preview" className="w-full h-[760px]" />
          </object>
          <div className="md:hidden p-8 text-center text-sm text-muted-foreground">
            PDF preview is unavailable on mobile —{" "}
            <a className="text-primary underline" href={RESUME} target="_blank" rel="noopener noreferrer">
              tap to open
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
