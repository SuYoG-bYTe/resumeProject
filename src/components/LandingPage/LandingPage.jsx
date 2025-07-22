"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import MainPage from "../Mainpage/MainPage"
import styles from "./landingpage.module.css"
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeFeature, setActiveFeature] = useState(0)
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-cycle through features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const headerClass = scrollY > 50 ? `${styles.header} ${styles.headerScrolled}` : styles.header

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={headerClass}>
        <div className={styles.headerContent}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.logo}
          >
            <svg className={styles.logoIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="14,2 14,8 20,8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="16"
                y1="13"
                x2="8"
                y2="13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="16"
                y1="17"
                x2="8"
                y2="17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="10,9 9,9 8,9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={styles.logoText}>Resume Builder & Analyzer </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            
            <button className={styles.menuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </motion.div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.mobileMenu}
          >
            <div className={styles.mobileMenuContent}>
              {["Features", "Templates", "Analyzer", "Pricing"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button
                className={`${styles.button} ${styles.buttonPrimary} ${styles.mobileButton}`}
                onClick={() => {
                  setIsMenuOpen(false)
                  setIsModalOpen(true)
                }}
              >
                Get Started Free
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroGradient1} />
          <div className={styles.heroGradient2} />
          <div className={styles.heroPattern} />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={styles.heroTitle}
            >
              Build Professional Resumes That Get You Hired
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={styles.heroSubtitle}
            >
              Create stunning resumes in minutes with our AI-powered builder and analyzer. Stand out from the crowd with
              professional templates and real-time optimization.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={styles.heroButtons}
            >
              <button
                onClick={() => navigate("/MainPage")}
                className={`${styles.button} ${styles.buttonPrimary} ${styles.heroButton}`}
              >
                Start Building Now
                <svg className={styles.buttonIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {/* <button className={`${styles.button} ${styles.buttonSecondary}`}>View Templates</button> */}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className={styles.heroDemo}
          >
            <div className={styles.demoContainer}>
              <div className={styles.demoHeader}>
                <div className={styles.demoControls}>
                  <span className={styles.demoControl}></span>
                  <span className={styles.demoControl}></span>
                  <span className={styles.demoControl}></span>
                </div>
                <span className={styles.demoTitle}>Resume Builder </span>
              </div>

              <div className={styles.demoContent}>
                <div className={styles.demoSidebar}>
                  <div className={styles.demoSidebarItem}>
                    <div className={styles.demoIcon}></div>
                    <span>Personal Info</span>
                  </div>
                  <div className={styles.demoSidebarItem}>
                    <div className={styles.demoIcon}></div>
                    <span>Experience</span>
                  </div>
                  <div className={styles.demoSidebarItem}>
                    <div className={styles.demoIcon}></div>
                    <span>Education</span>
                  </div>
                  <div className={styles.demoSidebarItem}>
                    <div className={styles.demoIcon}></div>
                    <span>Skills</span>
                  </div>
                </div>

                <div className={styles.demoMain}>
                  <div className={styles.demoResume}>
                    <div className={styles.demoResumeHeader}>
                      <div className={styles.demoAvatar}></div>
                      <div className={styles.demoHeaderText}>
                        <div className={styles.demoLine} style={{ width: "60%" }}></div>
                        <div className={styles.demoLine} style={{ width: "40%" }}></div>
                      </div>
                    </div>
                    <div className={styles.demoSection}>
                      <div className={styles.demoSectionTitle}></div>
                      <div className={styles.demoLine}></div>
                      <div className={styles.demoLine} style={{ width: "80%" }}></div>
                      <div className={styles.demoLine} style={{ width: "90%" }}></div>
                    </div>
                    <div className={styles.demoSection}>
                      <div className={styles.demoSectionTitle}></div>
                      <div className={styles.demoLine}></div>
                      <div className={styles.demoLine} style={{ width: "70%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <div className={styles.featuresBackground}>
          <div className={styles.featuresGradient} />
        </div>

        <div className={styles.featuresContent}>
          <div className={styles.sectionHeader}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={styles.sectionTitle}>Our Features</h2>
              <p className={styles.sectionSubtitle}>
                Everything you need to create a perfect resume that stands out from the competition
              </p>
            </motion.div>
          </div>

          <div className={styles.featuresGrid}>
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                title: "Professional Templates",
                description: "Choose from ATS-friendly templates designed by us to help you stand out.",
                color: "purple",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                title: "AI Resume Analyzer",
                description:
                  "Get instant feedback on your resume with our AI-powered analyzer that checks for ATS compatibility.",
                color: "blue",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                title: "Real-time Editing",
                description:
                  "See your changes instantly with our live preview editor. No more guessing how it will look.",
                color: "green",
              },
            
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.featureCard}
              >
                <div
                  className={`${styles.featureIcon} ${styles[`featureIcon${feature.color.charAt(0).toUpperCase() + feature.color.slice(1)}`]}`}
                >
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analyzer Section */}
      <section id="analyzer" className={styles.analyzer}>
        <div className={styles.analyzerBackground}>
          <div className={styles.analyzerGradient} />
        </div>

        <div className={styles.analyzerContent}>
          <div className={styles.analyzerGrid}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={styles.analyzerText}
            >
              <h2 className={styles.sectionTitle}>AI-Powered Resume Analyzer</h2>
              <p className={styles.sectionSubtitle}>
                Get instant feedback on your resume with our advanced AI analyzer. Optimize for ATS systems and improve
                your chances of getting hired.
              </p>
              <ul className={styles.analyzerFeatures}>
                {[
                  "ATS Compatibility Check",
                  "Keyword Optimization",
                  "Format & Structure Analysis",
                  "Content Improvement Suggestions",
                  "Industry-Specific Recommendations",
                ].map((feature, i) => (
                  <li key={i} className={styles.analyzerFeature}>
                    <svg
                      className={styles.checkIcon}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
               onClick={() => navigate("/analyzer")} 
               className={`${styles.button} ${styles.buttonPrimary}`}>Try Analyzer Now </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={styles.analyzerDemo}
            >
              <div className={styles.analyzerDashboard}>
                <div className={styles.analyzerHeader}>
                  <h3>Resume Analysis Results</h3>
                  <div className={styles.analyzerScore}>
                    <div className={styles.scoreCircle}>
                      <span className={styles.scoreNumber}>87</span>
                      <span className={styles.scoreLabel}>Score</span>
                    </div>
                  </div>
                </div>

                <div className={styles.analyzerMetrics}>
                  <div className={styles.metric}>
                    <div className={styles.metricLabel}>ATS Compatibility</div>
                    <div className={styles.metricBar}>
                      <div className={styles.metricProgress} style={{ width: "92%" }}></div>
                    </div>
                    <span className={styles.metricValue}>92%</span>
                  </div>
                  <div className={styles.metric}>
                    <div className={styles.metricLabel}>Keyword Match</div>
                    <div className={styles.metricBar}>
                      <div className={styles.metricProgress} style={{ width: "78%" }}></div>
                    </div>
                    <span className={styles.metricValue}>78%</span>
                  </div>
                  <div className={styles.metric}>
                    <div className={styles.metricLabel}>Format Quality</div>
                    <div className={styles.metricBar}>
                      <div className={styles.metricProgress} style={{ width: "95%" }}></div>
                    </div>
                    <span className={styles.metricValue}>95%</span>
                  </div>
                </div>

                <div className={styles.analyzerSuggestions}>
                  <h4>Improvement Suggestions</h4>
                  <div className={styles.suggestion}>
                    <div className={styles.suggestionIcon}>!</div>
                    <span>Add more industry-specific keywords</span>
                  </div>
                  <div className={styles.suggestion}>
                    <div className={styles.suggestionIcon}>✓</div>
                    <span>Include quantified achievements</span>
                  </div>
                  <div className={styles.suggestion}>
                    <div className={styles.suggestionIcon}>!</div>
                    <span>Optimize section headings</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>
                <svg className={styles.logoIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="14,2 14,8 20,8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="16"
                    y1="13"
                    x2="8"
                    y2="13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="16"
                    y1="17"
                    x2="8"
                    y2="17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="10,9 9,9 8,9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Resume Builder & Analyzer</span>
              </div>
              <p className={styles.footerDescription}>
                Build professional resumes that get you hired 
              </p>
            </div>

            {/* <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Product</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#templates">Templates</a>
                </li>
                <li>
                  <a href="#analyzer">Resume Analyzer</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Resources</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="#">Resume Tips</a>
                </li>
                <li>
                  <a href="#">Career Advice</a>
                </li>
                <li>
                  <a href="#">Interview Guide</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div> */}

            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Support</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>&copy; 2024 ResumeBuilder Pro. All rights reserved.</p>
            <div className={styles.footerSocial}>
              <a href="#" className={styles.socialLink}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#" className={styles.socialLink}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="4"
                    cy="4"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modal} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>Start Building Your Resume</h2>
              <button className={styles.modalClose} onClick={() => setIsModalOpen(false)}>
                ✕
              </button>
            </div>
            <div className={styles.modalBody}>
              <p>
                Join thousands of job seekers who have successfully landed their dream jobs with our resume builder.
              </p>
              <form className={styles.modalForm}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.modalInput}
                />
                <input type="text" placeholder="Full Name" className={styles.modalInput} />
                <button
                  type="submit"
                  className={`${styles.button} ${styles.buttonPrimary} ${styles.modalButton}`}
                  onClick={(e) => {
                    e.preventDefault()
                    alert("Welcome to ResumeBuilder Pro! Let's get started.")
                    setIsModalOpen(false)
                  }}
                >
                  Get Started Free
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
