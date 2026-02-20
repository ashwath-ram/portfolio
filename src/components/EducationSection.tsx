import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">// Education</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Academic <span className="text-gradient">Background</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-lg border border-border bg-card hover:glow-border transition-all"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-secondary text-primary">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">
                Bachelor of Computer Science (B.Sc)
              </h3>
              <p className="text-muted-foreground font-mono text-sm mb-1">
                Kongunadu Arts and Science College (Bharathiar University)
              </p>
              <p className="text-muted-foreground text-sm">
                Coimbatore, Tamil Nadu
              </p>
              <span className="inline-block mt-3 font-mono text-primary text-xs px-3 py-1 rounded-md bg-secondary">
                June 2018 – June 2021
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
