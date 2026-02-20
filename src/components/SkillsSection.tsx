import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "SQL"],
  },
  {
    title: "Frameworks",
    skills: ["Django", "Django REST Framework"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, RDS)", "Docker", "Jenkins", "GitLab CI/CD"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "GitLab", "Linux", "Postman", "Celery", "Nginx"],
  },
  {
    title: "Other",
    skills: ["REST APIs", "Unit Testing", "System Design", "TDD", "Agile/Scrum", "Data Migration"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">// Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-lg border border-border bg-card hover:glow-border transition-all group"
            >
              <h3 className="font-mono text-primary text-sm mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
