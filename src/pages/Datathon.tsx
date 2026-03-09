/**
 * Datathon Page — AI Community at Stony Brook University
 *
 * This page serves as the landing page for the annual AI Community Datathon.
 * It is designed to be reused each year by updating the constants at the top
 * of this file (dates, registration link, tracks, schedule, FAQ, etc.).
 *
 * Theme: Under-the-sea / ocean, matching the Datathon flyer artwork.
 */

import { useState, useEffect } from "react";
import "./Datathon.css";

/* =======================================================================
 * REGISTRATION LINK
 * -----------------------------------------------------------------------
 * Update this URL each year with the new Google Form (or other platform).
 * The same constant is referenced by every "Register" button on the page,
 * so changing it here updates all of them at once.
 *
 * Current form: Spring 2026 Datathon
 * ======================================================================= */
const REGISTRATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf4Erk6779ew6xoFdgdKKUNZIu2GjtvsoTmF9rs40OAqmMuFg/viewform";

/* =======================================================================
 * EVENT DETAILS
 * -----------------------------------------------------------------------
 * Central place to update the year, dates, times, and venue each year.
 * ======================================================================= */
const EVENT = {
  semester: "Spring 2026",
  dateRange: "March 28 – 29",
  day1Label: "Saturday, March 28",
  day1Time: "6:00 PM – 10:00 PM",
  day2Label: "Sunday, March 29",
  day2Time: "10:00 AM – 9:30 PM",
  venue: "SAC Ballroom B",
  university: "Stony Brook University",
};

/* =======================================================================
 * TYPES
 * ======================================================================= */

interface FAQItem {
  question: string;
  answer: string;
}

interface Track {
  title: string;
  icon: string;
  tagline: string;
  focusAreas: string[];
}

interface ScheduleEvent {
  time: string;
  event: string;
  location: string;
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
      "Teams can have up to 4 members. You can register with a team or come solo — we'll host a team formation event at the start so everyone can find their group.",
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
 * TRACKS
 * -----------------------------------------------------------------------
 * The four datathon challenge tracks. Update titles, icons, taglines,
 * and focus areas each year as tracks change.
 * ======================================================================= */
const tracks: Track[] = [
  {
    title: "Education",
    icon: "🎓",
    tagline: "Build the next generation of EdTech for learners everywhere.",
    focusAreas: [
      "College Pricing Trends",
      "Financial Aid Trends",
      "Education & Unemployment",
      "Education in India",
      "NCES Education Statistics",
      "Student Engagement (NSSE)",
    ],
  },
  {
    title: "Sustainability & Infrastructure",
    icon: "🌿",
    tagline: "Use data to create a greener, smarter world.",
    focusAreas: [
      "CISA Infrastructure Mapping",
      "Electrical Grid (Data.gov)",
      "Critical Infrastructure Analysis",
    ],
  },
  {
    title: "Healthcare & Wellness",
    icon: "🏥",
    tagline: "Innovate tools that support holistic health and care.",
    focusAreas: [
      "Sleep Health & Lifestyle",
      "Lung Cancer & Air Pollution",
      "Obesity / CVD Risk",
      "Leukemia Image Classification",
      "Heart Failure Prediction",
      "COVID-19 Research",
    ],
  },
  {
    title: "Finance & Economics",
    icon: "📈",
    tagline: "Decode market trends and drive smarter decisions.",
    focusAreas: [
      "Coca-Cola Stocks (100+ yrs)",
      "Bitcoin Historical Data",
      "FRED Unemployment Rate",
      "NVIDIA Stocks (1999–2025)",
      "Bankruptcy Prediction",
      "Palantir Stock Data",
      "U.S. Census Data",
    ],
  },
];

/* =======================================================================
 * SCHEDULE
 * -----------------------------------------------------------------------
 * Two-day event schedule. Update times, events, and locations each year.
 * ======================================================================= */
const schedule: { day1: ScheduleEvent[]; day2: ScheduleEvent[] } = {
  day1: [
    { time: "6:00 – 7:00 PM", event: "Opening Ceremony", location: "SAC Ballroom B" },
    { time: "7:00 PM", event: "Dinner", location: "SAC Ballroom B" },
    { time: "8:00 – 10:00 PM", event: "Hacking Hours", location: "SAC Ballroom B" },
    { time: "10:00 PM", event: "SAC Closes — Day 1 Ends", location: "SAC Ballroom B" },
  ],
  day2: [
    { time: "10:00 AM", event: "Doors Open & Hacking Resumes", location: "SAC Ballroom B" },
    { time: "12:00 – 1:00 PM", event: "Lunch + Uninterrupted Hacking", location: "SAC Ballroom B" },
    { time: "2:00 – 5:00 PM", event: "Mocktail Stand 🍹", location: "SAC Ballroom B" },
    { time: "2:00 – 5:00 PM", event: "Crash Out Corner (Board Games & Chill)", location: "SAC Ballroom B" },
    { time: "2:00 – 5:00 PM", event: "Scavenger Hunt with NeuralSeek", location: "Around SAC" },
    { time: "4:00 – 5:00 PM", event: "Judges Arrive & Tour", location: "SAC Ballroom B" },
    { time: "5:00 – 7:00 PM", event: "Judging", location: "SAC Ballroom B" },
    { time: "7:00 – 8:00 PM", event: "Closing Ceremony + Dinner 🎉", location: "SAC Ballroom B" },
    { time: "8:00 – 9:30 PM", event: "Wrap Up + Clean Up", location: "SAC Ballroom B" },
  ],
};

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
  const [activeDay, setActiveDay] = useState<1 | 2>(1);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleCard = (index: number) => {
    setFlippedCards((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
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

          {/* Event date & venue */}
          <div className="hero-details">
            <span className="hero-detail-highlight">{EVENT.dateRange}</span>
            <span className="hero-divider">~</span>
            <span>{EVENT.venue}</span>
          </div>
          <div className="hero-day-times">
            <span>
              {EVENT.day1Label}: {EVENT.day1Time}
            </span>
            <span>
              {EVENT.day2Label}: {EVENT.day2Time}
            </span>
          </div>

          {/* Quick stats */}
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">2</span>
              <span className="hero-stat-label">Days</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">4</span>
              <span className="hero-stat-label">Tracks</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">Free</span>
              <span className="hero-stat-label">Entry</span>
            </div>
          </div>

          <p className="hero-meals">Meals will be served!</p>

          {/* --------------------------------------------------------
           * REGISTRATION BUTTONS
           * --------------------------------------------------------
           * Both buttons link to REGISTRATION_URL defined at the top
           * of this file. Update that constant each year.
           * -------------------------------------------------------- */}
          <div className="hero-buttons">
            <a
              href={REGISTRATION_URL}
              className="hero-btn hero-btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </a>
            <a href="#datathon-about" className="hero-btn hero-btn-secondary">
              Learn More
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="hero-scroll-indicator">
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
       * TRACKS SECTION
       * ------------------------------------------------------------ 
       * Update the `tracks` array at the top of this file each year.
       * ============================================================ */}
      <section
        className="datathon-section datathon-section-alt"
        id="datathon-tracks"
      >
        <div className="section-container">
          <h2 className="section-number">02 // TRACKS</h2>
          <h3 className="section-title">Choose Your Challenge</h3>
          <div className="tracks-grid">
            {tracks.map((track, index) => (
              <div
                className="track-card"
                key={index}
                onClick={() => toggleCard(index)}
              >
                <div
                  className={`track-card-inner ${flippedCards.has(index) ? "track-card-flipped" : ""}`}
                >
                  <div className="track-card-front">
                    <span className="track-icon">{track.icon}</span>
                    <h4 className="track-title">{track.title}</h4>
                    <p className="track-tagline">{track.tagline}</p>
                    <span className="track-flip-hint">
                      Tap / hover to flip
                    </span>
                  </div>
                  <div className="track-card-back">
                    <h4 className="track-title">{track.title}</h4>
                    <p className="track-back-label">Focus Areas</p>
                    <ul className="track-focus-areas">
                      {track.focusAreas.map((area, i) => (
                        <li key={i}>{area}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
       * SCHEDULE SECTION
       * ------------------------------------------------------------ 
       * Update the `schedule` object at the top of this file each year.
       * ============================================================ */}
      <section className="datathon-section" id="datathon-schedule">
        <div className="section-container">
          <h2 className="section-number">03 // SCHEDULE</h2>
          <h3 className="section-title">Event Timeline</h3>
          <div className="schedule-tabs">
            <button
              className={`schedule-tab ${activeDay === 1 ? "schedule-tab-active" : ""}`}
              onClick={() => setActiveDay(1)}
            >
              {EVENT.day1Label}
            </button>
            <button
              className={`schedule-tab ${activeDay === 2 ? "schedule-tab-active" : ""}`}
              onClick={() => setActiveDay(2)}
            >
              {EVENT.day2Label}
            </button>
          </div>
          <div className="schedule-table">
            <div className="schedule-header">
              <span>Time</span>
              <span>Event</span>
              <span>Location</span>
            </div>
            {(activeDay === 1 ? schedule.day1 : schedule.day2).map(
              (item, index) => (
                <div className="schedule-row" key={index}>
                  <span className="schedule-time">{item.time}</span>
                  <span className="schedule-event">{item.event}</span>
                  <span className="schedule-location">{item.location}</span>
                </div>
              )
            )}
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
          <h2 className="section-number">04 // FAQ</h2>
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
       * CALL-TO-ACTION SECTION
       * ------------------------------------------------------------ 
       * Final registration push. Uses REGISTRATION_URL from the top.
       * ============================================================ */}
      <section className="datathon-cta" id="datathon-register">
        <div className="cta-glow" />
        <div className="section-container">
          <h2 className="cta-title">Ready to dive in? 🐙</h2>
          <p className="cta-subtitle">
            Registration is free and open to all college students.
          </p>
          {/* Registration button — links to REGISTRATION_URL */}
          <a
            href={REGISTRATION_URL}
            className="hero-btn hero-btn-primary cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
          </a>
        </div>
      </section>

      {/* ============================================================
       * SPONSORS / FUNDING SECTION
       * ============================================================ */}
      <section className="datathon-section" id="datathon-sponsors">
        <div className="section-container">
          <h2 className="section-number">05 // SPONSORS</h2>
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
