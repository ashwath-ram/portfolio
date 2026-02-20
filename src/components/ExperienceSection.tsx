import { motion } from "framer-motion";

const experiences = [
  {
    company: "Rosemallow Technologies",
    location: "Tamil Nadu, India",
    role: "Senior Python Developer",
    period: "July 2025 – Present",
    bullets: [
      "Collaborated with stakeholders on strategic project planning and technical roadmapping for cloud migrations and RPA initiatives, ensuring alignment with business goals",
      "Orchestrated enterprise workflow automation via Autosys, developing self-healing scripts for job monitoring and failure recovery.",
      "Developed RPA solutions using Python to reduce manual effort and improve process efficiency.",
      "Integrated Microsoft Graph API with Django for secure authentication and automated email handling.",
      "Server migration of Projects from DigitalOcean to Hetzner for cost reduction. Executed a seamless infrastructure migration from DigitalOcean to Hetzner for a diverse tech stack (Spring Boot, FastAPI, Django, Gitlab), optimizing server costs and enhancing uptime",
      "Led application lifecycle management including monitoring, performance optimization, and scalable architecture enhancements.",
    ],
  },
  {
    company: "Tecnospice Technologies Pvt Ltd",
    location: "Tamil Nadu, India",
    role: "Senior Software Engineer",
    period: "June 2024 – April 2025",
    bullets: [
      "Partnered with product teams for feature strategy decisions. Drove feature design leveraging strong domain knowledge.",
      "Translated business requirements into scalable technical solutions. Owned technical direction for key product features.",
      "Accelerated application performance by 40% by refactoring legacy Django codebase and introducing multithreading.",
      "Architected a multi-tenant backend system with dynamic database routing for scalable client onboarding.",
      "Automated enterprise report delivery using Celery and SQL stored procedures, reducing processing time by 40%.",
    ],
  },
  {
    company: "Tecnospice Technologies Pvt Ltd",
    location: "Tamil Nadu, India",
    role: "Python Backend Developer",
    period: "April 2023 – May 2024",
    bullets: [
      "Contributed to the development and enhancement of a SaaS-based HIMS and EHR platform serving multi-specialty healthcare providers.",
      "Advised stakeholders with domain-driven technical insights.",
      "Automated financial workflows via Tally integration, reducing manual reconciliation effort by 60%.",
      "Cut deployment times in half with Jenkins-driven CI/CD pipelines.",
      "Translated complex business requirements into modular, scalable backend components.",
    ],
  },
  {
    company: "Tecnospice Technologies Pvt Ltd",
    location: "Tamil Nadu, India",
    role: "Junior Backend Developer",
    period: "March 2022 – March 2023",
    bullets: [
      "Delivered 50+ scalable RESTful APIs using Django and DRF.",
      "Executed critical production database migrations with zero downtime.",
      "Designed a facial recognition system using OpenCV, improving attendance tracking accuracy.",
      "Increased PDF generation speed by 40% by transitioning to ReportLab.",
    ],
  },
  {
    company: "Tecnospice Technologies Pvt Ltd",
    location: "Tamil Nadu, India",
    role: "Full Stack Intern",
    period: "Dec 2021 – Feb 2022",
    bullets: [
      "Created REST API endpoints using Django, DRF, MySQL.",
      "Built screens using React.js with MUI Components.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">// Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Work <span className="text-gradient">History</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.role}-${exp.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_hsl(142_70%_45%/0.5)]" />

                <div className="p-6 rounded-lg border border-border bg-card hover:glow-border transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                    <h3 className="font-bold text-lg">{exp.role}</h3>
                    <span className="font-mono text-primary text-xs">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 font-mono">
                    {exp.company} · {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-secondary-foreground flex gap-2">
                        <span className="text-primary mt-1 shrink-0">▹</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
