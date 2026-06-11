import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: Props) => (
  <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-border">
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        {title.split(" ").map((w, i, arr) =>
          i === arr.length - 1 ? <span key={i} className="gradient-text">{w}</span> : <span key={i}>{w} </span>
        )}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-muted-foreground text-base md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHeader;
