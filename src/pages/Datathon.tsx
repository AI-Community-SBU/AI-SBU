/**
 * Datathon Page — AI Community at Stony Brook University
 *
 * This page serves as the landing page for the annual AI Community Datathon.
 * It is designed to be reused each year by updating the constants at the top
 * of this file (FAQ, etc.).
 *
 * Theme: Under-the-sea / ocean, matching the Datathon flyer artwork.
 */

import { useState, useEffect } from "react";
import "./Datathon.css";

/* =======================================================================
 * TYPES
 * ======================================================================= */

interface FAQItem {
  question: string;
  answer: string;
}

/* =======================================================================
 * FAQ DATA
 * -----------------------------------------------------------------------
 * Update the questions and answers each year as needed.
 * ======================================================================= */
const faqData: FAQItem[] = [
  {
    question: "What is a Datathon?",
    answer:
      "A datathon is a data-focused hackathon where participants work in teams to analyze real-world datasets, build models, and create data-driven solutions. Whether you're into machine learning, data visualization, or statistical analysis, there's a challenge for you.",
  },
  {
    question: "Who can participate?",
    answer:
      "Any current college student! No prior data science experience is required. We'll have workshops and mentors available throughout the event to help you learn as you go.",
  },
  {
    question: "How do teams work?",
    answer:
      "Teams can have up to 3 members. You can register with a team or come solo.",
  },
  {
    question: "What datasets will be provided?",
    answer:
      "Datasets will be released at the opening ceremony. They'll span various domains and difficulty levels. You're also welcome to incorporate external public datasets into your project.",
  },
  {
    question: "What tools and languages can I use?",
    answer:
      "Anything you want! Python, R, SQL, Jupyter notebooks, Tableau, Excel — use whatever tools and languages you're comfortable with. There are no restrictions.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring your laptop, charger, and any peripherals you need. We'll provide food, snacks, Wi-Fi, and a comfortable hacking space. A water bottle and layers are recommended.",
  },
  {
    question: "How will projects be judged?",
    answer:
      "Projects will be evaluated on technical complexity, creativity, data insights, presentation quality, and real-world impact. Judges will include professors, industry professionals, and data scientists.",
  },
  {
    question: "Is there a cost to participate?",
    answer:
      "No! The AI Community Datathon is completely free for all participants. Food, swag, and everything else is on us.",
  },
];

/* =======================================================================
 * DECORATIVE BUBBLES
 * -----------------------------------------------------------------------
 * Deterministic pseudo-random values so bubbles look organic but stay
 * consistent across renders.
 * ======================================================================= */
const BUBBLES = Array.from({ length: 25 }, (_, i) => ({
  size: 8 + ((i * 37 + 13) % 45),
  left: ((i * 53 + 7) % 97) + 1,
  delay: ((i * 31 + 3) % 150) / 10,
  duration: 8 + ((i * 43 + 11) % 100) / 10,
  opacity: 0.25 + ((i * 17) % 30) / 100,
}));

/* =======================================================================
 * COMPONENT
 * ======================================================================= */
const Datathon = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.padding = "0";
    document.body.style.backgroundColor = "#d6eef8";

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.documentElement.style.scrollBehavior = "";
      document.body.style.padding = "";
      document.body.style.backgroundColor = "";
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="datathon">
      {/* ============================================================
       * HERO SECTION
       * ============================================================ */}
      <section className="datathon-hero">
        {/* Animated rising bubbles */}
        <div className="hero-bubbles">
          {BUBBLES.map((b, i) => (
            <div
              className="bubble"
              key={i}
              style={
                {
                  "--size": `${b.size}px`,
                  "--left": `${b.left}%`,
                  "--delay": `${b.delay}s`,
                  "--duration": `${b.duration}s`,
                  "--opacity": b.opacity,
                } as React.CSSProperties
              }
            />
          ))}
        </div>

        {/* Decorative glow orbs */}
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-glow hero-glow-3" />

        {/* Main hero content */}
        <div className="hero-content">
          <p className="hero-pre-title">AI Community at Stony Brook University</p>
          <h1 className="hero-title">
            <span className="hero-title-gradient">Datathon</span>
            <span className="hero-octopus"> 🐙</span>
          </h1>
          <p className="hero-tagline">Dive into data analysis and AI/ML!</p>

          {/* Next event teaser */}
          <p className="hero-detail-highlight">Join us this Spring!</p>

          <div className="hero-buttons">
            <a href="#datathon-about" className="hero-btn hero-btn-secondary">
              Learn More
            </a>
          </div>
        </div>

        {/* Scroll hint — fades out as user scrolls */}
        <div
          className="hero-scroll-indicator"
          style={{
            opacity: Math.max(0, 1 - scrollY / 250),
            pointerEvents: scrollY > 100 ? "none" : "auto",
          }}
        >
          <span>Scroll to explore</span>
          <div className="scroll-arrow" />
        </div>

        {/* Wavy transition into the next section */}
        <div className="wave-divider">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,60 C180,110 360,10 540,60 C720,110 900,10 1080,60 C1260,110 1380,40 1440,70 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* ============================================================
       * ABOUT SECTION
       * ============================================================ */}
      <section className="datathon-section" id="datathon-about">
        <div className="section-container">
          <h2 className="section-number">01 // ABOUT</h2>
          <h3 className="section-title">What is the AI Community Datathon?</h3>
          <div className="about-content">
            <div className="about-text">
              <p>
                The AI Community Datathon is Stony Brook University's premier
                data science competition, bringing together students of all
                skill levels for a weekend of data exploration, analysis, and
                innovation.
              </p>
              <p>
                Enjoy a weekend of hacking, networking, fun activities, and
                minigames! Whether you're a seasoned data scientist or just
                getting started with your first dataset, this is your chance to
                collaborate, learn, and build something meaningful with
                real-world data.
              </p>
            </div>
            <div className="about-highlights">
              <div className="highlight-card">
                <span className="highlight-icon">🗺️</span>
                <h4>Real Datasets</h4>
                <p>Curated real-world datasets spanning multiple domains</p>
              </div>
              <div className="highlight-card">
                <span className="highlight-icon">🐙</span>
                <h4>Workshops</h4>
                <p>Hands-on sessions led by experienced data scientists</p>
              </div>
              <div className="highlight-card">
                <span className="highlight-icon">🍕</span>
                <h4>Meals Provided</h4>
                <p>Food and snacks throughout the entire event</p>
              </div>
              <div className="highlight-card">
                <span className="highlight-icon">🏆</span>
                <h4>Prizes</h4>
                <p>Compete for prizes across multiple tracks and categories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
       * FAQ SECTION
       * ------------------------------------------------------------
       * Update the `faqData` array at the top of this file each year.
       * ============================================================ */}
      <section
        className="datathon-section datathon-section-alt"
        id="datathon-faq"
      >
        <div className="section-container">
          <h2 className="section-number">02 // FAQ</h2>
          <h3 className="section-title">Frequently Asked Questions</h3>
          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div
                className={`faq-item ${openFaq === index ? "faq-item-open" : ""}`}
                key={index}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-toggle">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
       * SPONSORS / FUNDING SECTION
       * ============================================================ */}
      <section className="datathon-section" id="datathon-sponsors">
        <div className="section-container">
          <h2 className="section-number">03 // SPONSORS</h2>
          <h3 className="section-title">Our Sponsors</h3>
          <p className="sponsors-text">
            Funded by the USG Student Activity Fee.
          </p>
          <p className="sponsors-text">
            Interested in sponsoring the AI Community Datathon?
            <br />
            <a
              href="mailto:aicommunity@stonybrook.edu"
              className="sponsors-link"
            >
              Get in touch with us →
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Datathon;
