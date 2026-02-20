import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "ashwathrammurugan@gmail.com",
    href: "mailto:ashwathrammurugan@gmail.com",
  },
  {
    icon: Phone,
    label: "8124511697",
    href: "tel:8124511697",
  },
  {
    icon: Github,
    label: "github.com/ashwath-ashwin",
    href: "https://github.com/ashwath-ashwin",
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/ashwathashwin",
    href: "https://linkedin.com/in/ashwathashwin",
  },
  {
    icon: MapPin,
    label: "Coimbatore, Tamil Nadu, India",
    href: "#",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">// Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Interested in collaborating or have an opportunity? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:glow-border transition-all text-left"
            >
              <link.icon size={18} className="text-primary shrink-0" />
              <span className="text-sm text-secondary-foreground font-mono truncate">
                {link.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
