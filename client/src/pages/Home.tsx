import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Code2, Brain, BarChart3, Award, Users, Briefcase, BookOpen, Download, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [contactModal, setContactModal] = useState<"email" | "phone" | null>(null);

  const projects = [
    {
      title: "Sentiment Analysis App",
      description: "Real-time NLP application for text sentiment classification (Positive/Negative)",
      details: "Developed using Python and Streamlit with NLTK for preprocessing and Scikit-learn for model training. Provides businesses with instant insights into customer feedback.",
      tech: ["Python", "Streamlit", "NLTK", "Scikit-learn"],
      link: "https://lnkd.in/dyDzmh-v",
      github: "https://github.com/basel853",
      icon: Brain,
      category: "NLP",
    },
    {
      title: "EarthlyEats Warehouse Dashboard",
      description: "Comprehensive business dashboard for warehouse operations (NTI Supervised)",
      details: "Freelance project developed under National Telecommunication Institute supervision. Analyzed complex warehouse datasets to track inventory milestones and optimize supply chain operations.",
      tech: ["Power BI", "Excel", "Data Analysis"],
      link: "#",
      icon: BarChart3,
      category: "Data Analytics",
      nti: true,
    },
    {
      title: "Red Object Detection System",
      description: "Real-time computer vision system for identifying red objects",
      details: "Built using OpenCV and Python with color masking, contour detection, and morphological transformations for efficient real-time processing.",
      tech: ["OpenCV", "Python", "Image Processing"],
      link: "#",
      icon: Code2,
      category: "Computer Vision",
    },
    {
      title: "Cartoon Image Transformation",
      description: "Image processing tool converting photographs into cartoon-style illustrations",
      details: "Utilizes OpenCV for edge detection using Laplacian and Canny filters with bilateral filtering to achieve stylized artistic effects.",
      tech: ["OpenCV", "Python", "Edge Detection"],
      link: "#",
      icon: Code2,
      category: "Computer Vision",
    },
    {
      title: "Airline Passenger Satisfaction Prediction",
      description: "ML pipeline predicting passenger satisfaction with 90%+ accuracy",
      details: "Engineered comprehensive machine learning pipeline using Random Forest and Gradient Boosting algorithms with extensive EDA and hyperparameter tuning.",
      tech: ["Random Forest", "Gradient Boosting", "Scikit-learn"],
      link: "#",
      icon: Brain,
      category: "Machine Learning",
    },
    {
      title: "Heart Disease Prediction Model",
      description: "Diagnostic classification model predicting heart disease risk",
      details: "Developed using Support Vector Machine (SVM) and Logistic Regression with comprehensive feature correlation analysis to identify medically significant risk factors.",
      tech: ["SVM", "Logistic Regression", "Feature Analysis"],
      link: "#",
      icon: Brain,
      category: "Machine Learning",
    },
  ];

  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "SQL", "Dart", "TypeScript"],
    },
    {
      category: "Data Science & ML",
      items: ["Pandas", "NumPy", "Scikit-learn", "NLTK", "Matplotlib", "Seaborn", "TensorFlow"],
    },
    {
      category: "Machine Learning",
      items: ["Classification", "Regression", "NLP", "Sentiment Analysis", "Object Detection", "Feature Engineering", "Hyperparameter Tuning"],
    },
    {
      category: "Data Visualization",
      items: ["Power BI", "Tableau", "Streamlit", "Jupyter", "Google Colab", "Excel"],
    },
    {
      category: "Frameworks & Tools",
      items: ["Flask", "Git", "GitHub", "VS Code", "Cisco Packet Tracer", "Flutter", "Dart"],
    },
    {
      category: "Soft Skills",
      items: ["Problem-Solving", "Communication", "Analytical Thinking", "Creativity", "Fast Learning", "Team Collaboration", "Innovation", "Teamwork"],
    },
  ];

  const experiences = [
    {
      title: "Artificial Intelligence Intern",
      company: "Sprints",
      period: "July 2025 – September 2025",
      highlights: ["End-to-end ML workflows", "Model deployment", "Real-world problem solving"],
    },
    {
      title: "Python for Data Analysis Intern",
      company: "National Telecommunication Institute (NTI)",
      period: "November 2024 – February 2025",
      highlights: ["Exploratory Data Analysis", "Data visualization", "Feature engineering"],
      nti: true,
    },
    {
      title: "Machine Learning for Data Analysis Training",
      company: "National Telecommunication Institute (NTI)",
      period: "August 2024 – September 2024",
      highlights: ["ML model building", "Data preparation", "AI challenges"],
      nti: true,
    },
    {
      title: "AI & Machine Learning Intern",
      company: "Orange Digital Center (AMIT Learning)",
      period: "November 2024 – December 2024",
      highlights: ["Supervised learning", "Real-world datasets", "Model implementation"],
    },
    {
      title: "Data Analyst Intern",
      company: "Creativa Hub Benha",
      period: "September 2024 – October 2024",
      highlights: ["Dashboard design", "Data transformation", "Business insights"],
    },
    {
      title: "Data Analyst Intern",
      company: "Holol",
      period: "September 2024",
      highlights: ["Data exploration", "Report generation", "Preprocessing techniques"],
    },
    {
      title: "InnovEgypt Internship Program",
      company: "Creativa Giza (ITIDA and TIEC)",
      period: "January 2024 – February 2024",
      highlights: ["Innovation methodology", "Startup development", "Problem solving"],
    },
    {
      title: "Network Engineer Intern",
      company: "Thebes Academy & Link Co.",
      period: "August 2023 – October 2023",
      highlights: ["Network configuration", "Cisco Packet Tracer", "Troubleshooting"],
    },
    {
      title: "Flutter Developer Intern",
      company: "Thebes Academy",
      period: "January 2022 – December 2023",
      highlights: ["Mobile UI development", "State management", "Cross-platform testing"],
    },
  ];

  const certifications = [
    { name: "Machine Learning for Data Analysis", issuer: "National Telecommunication Institute (NTI)" },
    { name: "Python for Data Analysis", issuer: "National Telecommunication Institute (NTI)" },
    { name: "Artificial Intelligence", issuer: "Orange Digital Center & AMIT Learning" },
    { name: "Data Analysis", issuer: "Creativa Hub Benha" },
    { name: "Artificial Intelligence", issuer: "Orange Digital Center Digital HUB (D-HUB)" },
    { name: "InnovEgypt Internship Program", issuer: "ITIDA and TIEC" },
    { name: "Networking", issuer: "Thebes Academy" },
    { name: "Blockchain Basics", issuer: "EYouth" },
    { name: "Flutter Development", issuer: "Thebes Academy" },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/basel853" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/basel-tarek-044307321" },
    { icon: Mail, label: "Email", url: "mailto:baseltarek226@gmail.com" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Basel Tarek
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-sm hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a>
            <a href="#experience" className="text-sm hover:text-primary transition-colors">Experience</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
          </div>
          <div className="flex gap-2">
            <a href="https://github.com/basel853" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" title="GitHub">
                <Github className="w-5 h-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/basel-tarek-044307321" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" title="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </Button>
            </a>
            <button
              onClick={() => setContactModal("email")}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </button>
            <button
              onClick={() => setContactModal("phone")}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              title="Phone"
            >
              <Phone className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Data Scientist, Data Analyst & <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">ML Engineer</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transforming complex data into actionable insights and intelligent solutions. Specialized in Python, Natural Language Processing, Computer Vision, and predictive modeling with proven expertise from National Telecommunication Institute (NTI) and industry internships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projects">
                <Button size="lg" className="w-full sm:w-auto">
                  View My Work
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/basel-tarek-044307321" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Connect on LinkedIn
                </Button>
              </a>
              <a href="/Basel_Tarek_Osman_CV.docx" download>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a results-driven Machine Learning Engineer and Data Scientist with a strong foundation in building end-to-end predictive models, data pipelines, and interactive analytical dashboards. I hold Kaggle Expert status, showcasing my proficiency in advanced ML techniques and competitive problem-solving.
              </p>
              <p>
                My expertise spans Python, Scikit-learn, Natural Language Processing, Computer Vision, and Data Analysis. Through comprehensive internships at the National Telecommunication Institute (NTI), Orange Digital Center, Sprints, and other leading organizations, I've developed practical skills in transforming complex datasets into actionable business insights.
              </p>
              <p>
                I'm passionate about solving real-world problems through data-driven solutions, building scalable machine learning systems, and continuously expanding my knowledge in AI and emerging technologies. My work has focused on practical applications including sentiment analysis, object detection, predictive modeling, and business intelligence dashboards.
              </p>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10">
              <div className="bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="text-3xl font-bold text-primary">9+</div>
                <div className="text-sm text-muted-foreground">Internships</div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="text-3xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Major Projects</div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="text-3xl font-bold text-primary">3.16</div>
                <div className="text-sm text-muted-foreground">GPA (4.0)</div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="text-3xl font-bold text-primary">Expert</div>
                <div className="text-sm text-muted-foreground">Kaggle Level</div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="text-3xl font-bold text-primary">9</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <h3 className="text-lg font-semibold mb-4 text-primary">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => {
              const IconComponent = project.icon;
              return (
                <div key={idx} className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                      {project.nti && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">NTI</span>
                      )}
                    </div>
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                      </a>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{project.details}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Professional Experience</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  {exp.nti && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">NTI Supervised</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                <ul className="space-y-1">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Certifications & Training</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              I'm available for freelance projects, full-time opportunities, and collaborations. Whether you need data analysis, machine learning solutions, or business intelligence dashboards, let's connect.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Contact Modals */}
      <ContactModal
        isOpen={contactModal === "email"}
        onClose={() => setContactModal(null)}
        type="email"
      />
      <ContactModal
        isOpen={contactModal === "phone"}
        onClose={() => setContactModal(null)}
        type="phone"
      />

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Basel Tarek Osman. All rights reserved.
            </div>
            <div className="flex gap-4">
              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" title={link.label}>
                    <Button variant="ghost" size="icon">
                      <Icon className="w-5 h-5" />
                    </Button>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
