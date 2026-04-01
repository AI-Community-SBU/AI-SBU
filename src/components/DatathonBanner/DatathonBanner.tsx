/**
 * DatathonBanner — Promotional banner for the AI Community Datathon.
 * Placed on the Home page to drive traffic to the Datathon page.
 *
 * Update REGISTRATION_URL and event details each year.
 */

import { Link } from "react-router-dom";
import { useCountdown, DATATHON_START } from "../../hooks/useCountdown.ts";
import "./DatathonBanner.css";

const REGISTRATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf4Erk6779ew6xoFdgdKKUNZIu2GjtvsoTmF9rs40OAqmMuFg/viewform";

const SHOW_DATATHON_BANNER = false; // Set false after event ends; keep this component in place for future reuse.

const DatathonBanner = () => {
  if (!SHOW_DATATHON_BANNER) return null;

  const countdown = useCountdown(DATATHON_START);

  return (
    <section className="datathon-banner">
      <div className="datathon-banner-bubbles">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            className="datathon-banner-bubble"
            key={i}
            style={
              {
                "--b-size": `${10 + ((i * 37 + 5) % 30)}px`,
                "--b-left": `${((i * 53 + 7) % 97) + 1}%`,
                "--b-delay": `${((i * 31 + 2) % 100) / 10}s`,
                "--b-dur": `${8 + ((i * 43) % 80) / 10}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="datathon-banner-content">
        <span className="datathon-banner-octopus">🐙</span>
        <h2 className="datathon-banner-title">Datathon 2026</h2>
        <p className="datathon-banner-tagline">
          Dive into data analysis and AI/ML!
        </p>
        <p className="datathon-banner-details">
          March 28 – 29 &nbsp;|&nbsp; SAC Ballroom B &nbsp;|&nbsp; Free Entry
        </p>

        {/* Countdown clock */}
        {!countdown.isOver ? (
          <div className="banner-countdown">
            <div className="banner-cd-unit">
              <span className="banner-cd-value">
                {String(countdown.days).padStart(2, "0")}
              </span>
              <span className="banner-cd-label">Days</span>
            </div>
            <span className="banner-cd-sep">:</span>
            <div className="banner-cd-unit">
              <span className="banner-cd-value">
                {String(countdown.hours).padStart(2, "0")}
              </span>
              <span className="banner-cd-label">Hrs</span>
            </div>
            <span className="banner-cd-sep">:</span>
            <div className="banner-cd-unit">
              <span className="banner-cd-value">
                {String(countdown.minutes).padStart(2, "0")}
              </span>
              <span className="banner-cd-label">Min</span>
            </div>
            <span className="banner-cd-sep">:</span>
            <div className="banner-cd-unit">
              <span className="banner-cd-value">
                {String(countdown.seconds).padStart(2, "0")}
              </span>
              <span className="banner-cd-label">Sec</span>
            </div>
          </div>
        ) : (
          <p className="banner-countdown-over">The Datathon has begun!</p>
        )}

        <p className="datathon-banner-meals">Meals will be served!</p>
        <div className="datathon-banner-buttons">
          <Link to="/AI-SBU/pages/Datathon" className="datathon-banner-btn datathon-banner-btn-primary">
            Learn More
          </Link>
          <a
            href={REGISTRATION_URL}
            className="datathon-banner-btn datathon-banner-btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default DatathonBanner;
