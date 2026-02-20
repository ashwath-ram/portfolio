import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-primary text-sm mb-4"
        >
          // Hello, World! I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-4 font-sans"
        >
          Ashwathram{" "}
          <span className="text-gradient">Murugan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground font-mono mb-2"
        >
          Senior Software Engineer<span className="terminal-cursor" />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          3.6+ years of experience architecting scalable backend solutions and optimizing 
          enterprise-grade applications. Expert in Django, DRF, and AWS.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground font-mono">
            <MapPin size={14} className="text-primary" />
            Coimbatore, India
          </span>
          <span className="text-border">|</span>
          <a href="tel:8124511697" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-mono">
            <Phone size={14} className="text-primary" />
            8124511697
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/ashwath-ashwin"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border bg-card hover:glow-border hover:text-primary transition-all"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/ashwathashwin"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border bg-card hover:glow-border hover:text-primary transition-all"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:ashwathrammurugan@gmail.com"
            className="p-3 rounded-lg border border-border bg-card hover:glow-border hover:text-primary transition-all"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
