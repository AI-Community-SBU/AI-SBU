/**
 * useCountdown — Real-time countdown hook.
 *
 * Returns days, hours, minutes, seconds remaining until the target date,
 * updating every second. When the target has passed, `isOver` is true.
 *
 * DATATHON_START is exported so both the Datathon page and the Home-page
 * banner can share the same target date. Update it each year.
 */

import { useState, useEffect } from "react";

/* ===== Update this date each year (Eastern Time) ===== */
export const DATATHON_START = new Date("2026-03-28T18:00:00-04:00");

interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isOver: boolean;
}

export function useCountdown(target: Date): CountdownResult {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = target.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isOver: false,
  };
}
