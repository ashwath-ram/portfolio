import { motion } from "framer-motion";

const stats = [
  { value: "3.6+", label: "Years Experience" },
  { value: "50+", label: "REST APIs Built" },
  { value: "40%", label: "Performance Boost" },
  { value: "50%", label: "Deployment Speedup" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-primary text-sm mb-2">// About</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Who <span className="text-gradient">I Am</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            A Senior Python Developer with a passion for building scalable, high-performance 
            backend systems. Experienced in architecting multi-tenant systems, automating 
            enterprise workflows, and optimizing legacy codebases. I thrive on solving 
            complex problems and delivering robust solutions that drive business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-lg border border-border bg-background text-center hover:glow-border transition-all"
            >
              <p className="text-2xl md:text-3xl font-bold text-gradient mb-1 font-mono">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground font-mono">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
