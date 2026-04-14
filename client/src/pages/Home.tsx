import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Code2, Brain, BarChart3 } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Sentiment Analysis App",
      description: "Real-time NLP application for text sentiment classification (Positive/Negative)",
      tech: ["Python", "Streamlit", "NLTK", "Scikit-learn"],
      link: "https://lnkd.in/dyDzmh-v",
      github: "https://github.com/basel853",
      icon: Brain,
    },
    {
      title: "EarthlyEats Warehouse Dashboard",
      description: "Comprehensive business dashboard for warehouse operations and inventory tracking (NTI Supervised)",
      tech: ["Power BI", "Excel", "Data Analysis"],
      link: "#",
      icon: BarChart3,
    },
    {
      title: "Red Object Detection System",
      description: "Real-time computer vision system for identifying red objects using color masking and contour detection",
      tech: ["OpenCV", "Python", "Image Processing"],
      link: "#",
      icon: Code2,
    },
    {
      title: "Cartoon Image Transformation",
      description: "Image processing tool that converts photographs into cartoon-style illustrations",
      tech: ["OpenCV", "Python", "Edge Detection"],
      link: "#",
      icon: Code2,
    },
    {
      title: "Airline Passenger Satisfaction Prediction",
      description: "ML pipeline predicting passenger satisfaction with 90%+ accuracy using ensemble methods",
      tech: ["Random Forest", "Gradient Boosting", "Scikit-learn"],
      link: "#",
      icon: Brain,
    },
    {
      title: "Heart Disease Prediction Model",
      description: "Diagnostic classification model predicting heart disease risk from clinical attributes",
      tech: ["SVM", "Logistic Regression", "Feature Analysis"],
      link: "#",
      icon: Brain,
    },
  ];

  const skills = [
    {
      category: "Programming & Frameworks",
      items: ["Python", "SQL", "Flutter", "Dart", "Pandas", "NumPy", "Scikit-learn"],
    },
    {
      category: "Machine Learning & AI",
      items: ["Classification", "Regression", "NLP", "Sentiment Analysis", "Object Detection", "Feature Engineering"],
    },
    {
      category: "Data Visualization & Tools",
      items: ["Power BI", "Excel", "Tableau", "Streamlit", "Jupyter", "Google Colab"],
    },
    {
      category: "Platforms & DevOps",
      items: ["Git", "GitHub", "VS Code", "Cisco Packet Tracer", "Android Studio"],
    },
  ];

  const experiences = [
    {
      title: "Artificial Intelligence Intern",
      company: "Sprints",
      period: "07/2025 – 09/2025",
      highlights: ["End-to-end ML workflows", "Model deployment", "Real-world problem solving"],
    },
    {
      title: "Python for Data Analysis Intern",
      company: "National Telecommunication Institute (NTI)",
      period: "11/2024 – 02/2025",
      highlights: ["Exploratory Data Analysis", "Data visualization", "Feature engineering"],
      nti: true,
    },
    {
      title: "Machine Learning for Data Analysis",
      company: "National Telecommunication Institute (NTI)",
      period: "08/2024 – 09/2024",
      highlights: ["ML model building", "Data preparation", "AI challenges"],
      nti: true,
    },
    {
      title: "AI & Machine Learning Intern",
      company: "Orange Digital Center (AMIT Learning)",
      period: "11/2024 – 12/2024",
      highlights: ["Supervised learning", "Real-world datasets", "Model implementation"],
    },
    {
      title: "Data Analyst Intern",
      company: "Creativa Hub Benha",
      period: "09/2024 – 10/2024",
      highlights: ["Dashboard design", "Data transformation", "Business insights"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Basel Tarek
          </div>
          <div className="flex items-center gap-4">
            <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-sm hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a>
            <a href="#experience" className="text-sm hover:text-primary transition-colors">Experience</a>
            <div className="flex gap-2 ml-4">
              <a href="https://github.com/basel853" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/basel-tarek-044307321" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>
              <a href="mailto:baseltarek226@gmail.com">
                <Button variant="ghost" size="icon">
                  <Mail className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Data Scientist & <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">ML Engineer</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transforming complex data into actionable insights and intelligent solutions. Kaggle Expert with expertise in Python, NLP, and predictive modeling.
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
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I'm a results-driven Machine Learning Engineer and Data Scientist with a strong foundation in building end-to-end predictive models, data pipelines, and interactive analytical dashboards. I hold Kaggle Expert status, showcasing my proficiency in advanced ML techniques.
              </p>
              <p>
                My expertise spans Python, Scikit-learn, Natural Language Processing, and Computer Vision. Through internships at the National Telecommunication Institute (NTI), Orange Digital Center, and Sprints, I've developed practical skills in transforming complex datasets into actionable business insights.
              </p>
              <p>
                I'm passionate about solving real-world problems through data-driven solutions and continuously expanding my knowledge in AI and machine learning.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Internships</div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary">3.16</div>
                <div className="text-sm text-muted-foreground">GPA (4.0)</div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary">Expert</div>
                <div className="text-sm text-muted-foreground">Kaggle Level</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
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
                <div key={idx} className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors group">
                  <div className="flex items-start justify-between mb-4">
                    <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                      </a>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
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
          <div className="space-y-6 max-w-3xl">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  {exp.nti && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      NTI
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                <ul className="space-y-1">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:baseltarek226@gmail.com">
              <Button size="lg" variant="secondary">
                <Mail className="w-5 h-5 mr-2" />
                Send me an Email
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/basel-tarek-044307321" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Basel Tarek Osman. All rights reserved.
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/basel853" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/basel-tarek-044307321" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:baseltarek226@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
