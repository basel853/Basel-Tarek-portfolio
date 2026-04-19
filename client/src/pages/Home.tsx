import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Code2, Brain, BarChart3, Award, Users, Briefcase, BookOpen, Download, Phone } from "lucide-react";

import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [contactModal, setContactModal] = useState<"email" | "phone" | "kaggle" | null>(null);

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
      items: ["Python", "SQL", "Dart"],
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
      description: "Developing AI solutions and machine learning models for real-world applications.",
    },
    {
      title: "Machine Learning Intern",
      company: "National Telecommunication Institute (NTI)",
      period: "March 2024 – October 2024",
      description: "Completed comprehensive ML training with hands-on projects in supervised and unsupervised learning.",
    },
    {
      title: "Data Science Freelancer",
      company: "Freelance Yard",
      period: "October 2024 – Present",
      description: "Developed EarthlyEats Warehouse Dashboard under NTI supervision for supply chain optimization.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-500">Basel Tarek</div>
          <ul className="flex gap-8">
            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Basel Tarek Osman</h1>
          <div className="text-2xl mb-4">Data Scientist | Machine Learning Engineer | Data Analyst</div>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Transforming Complex Data Into Actionable Business Insights | Building End-to-End ML Solutions
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#projects" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold transition transform hover:-translate-y-1">
              View My Work
            </a>
            <a href="#contact" className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-full font-bold transition transform hover:-translate-y-1">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 pb-4 relative inline-block w-full">
            About Me
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600"></span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-lg leading-relaxed">
                I'm a passionate Machine Learning Engineer with hands-on experience building end-to-end predictive models, data pipelines, and analytical dashboards. My journey in data science started at the National Telecommunication Institute (NTI), where I developed expertise in Python, Scikit-learn, NLP, and Power BI.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                I specialize in transforming complex datasets into actionable business insights and deploying production-ready solutions. Whether it's sentiment analysis, object detection, or predictive modeling, I bring a strategic and technical approach to every challenge.
              </p>
              <p className="text-lg leading-relaxed">
                Beyond my technical skills, I'm a continuous learner committed to staying at the forefront of machine learning innovations. I thrive in collaborative environments and love contributing to projects that make a real-world impact.
              </p>
            </div>

            <div>
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <div className="text-3xl font-bold text-blue-600">9+</div>
                  <div className="text-gray-600 font-semibold">Internships</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <div className="text-3xl font-bold text-blue-600">8+</div>
                  <div className="text-gray-600 font-semibold">ML Projects</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <div className="text-3xl font-bold text-blue-600">90%+</div>
                  <div className="text-gray-600 font-semibold">Avg Accuracy</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-gray-600 font-semibold">Certifications</div>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-600 shadow">
                  <strong className="text-blue-600 block mb-1">🎓 Education</strong>
                  <span className="text-gray-700">Bachelor of Computer Science, Thebes Academy (GPA: 3.16/4.0)</span>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-600 shadow">
                  <strong className="text-blue-600 block mb-1">🏆 Recognition</strong>
                  <span className="text-gray-700">Kaggle Expert | NTI Trained | Project Leader</span>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-600 shadow">
                  <strong className="text-blue-600 block mb-1">🔧 Specialization</strong>
                  <span className="text-gray-700">ML, NLP, Computer Vision, BI, Data Engineering</span>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-600 shadow">
                  <strong className="text-blue-600 block mb-1">🌍 Location</strong>
                  <span className="text-gray-700">Al Qalyubia, Egypt | Available for Remote Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 pb-4 relative inline-block w-full">
            Featured Projects
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600"></span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition border-t-4 border-blue-600">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 min-h-24 flex items-center">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((t, i) => (
                      <span key={i} className="bg-gray-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="text-green-600 font-bold">✓ {project.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 pb-4 relative inline-block w-full">
            Skills
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600"></span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-blue-600 mb-4 pb-2 border-b-2 border-blue-600">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="text-green-600 font-bold mr-3">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold mb-4 pb-4 relative inline-block w-full">
            Let's Connect
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-green-500"></span>
          </h2>
          
          <p className="text-lg opacity-90 mb-8">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out!
          </p>
          
          <a href="mailto:baseltarek226@gmail.com" className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold transition transform hover:-translate-y-1 mb-8">
            Send Me an Email
          </a>
          
          <div className="flex gap-4 justify-center mb-8">
            <a href="https://www.linkedin.com/in/basel-tarek-044307321" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 hover:bg-green-500 rounded-full flex items-center justify-center font-bold transition transform hover:-translate-y-1">
              in
            </a>
            <a href="https://github.com/basel853" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 hover:bg-green-500 rounded-full flex items-center justify-center font-bold transition transform hover:-translate-y-1">
              GH
            </a>
            <a href="https://kaggle.com/baseltarek" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 hover:bg-green-500 rounded-full flex items-center justify-center font-bold transition transform hover:-translate-y-1">
              KG
            </a>
          </div>
          
          <p className="opacity-80">
            <strong>Email:</strong> baseltarek226@gmail.com<br/>
            <strong>Phone:</strong> +201025813806<br/>
            <strong>Location:</strong> Al Qalyubia, Egypt
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white text-center py-6 border-t-2 border-blue-600">
        <p>&copy; 2024 Basel Tarek Osman. All rights reserved. | Data Scientist | Machine Learning Engineer</p>
      </footer>
    </div>
  );
}
