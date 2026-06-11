/**
 * CalendarMonth
 * version: 0.1.0
 * created: 11-06-2026
 * updated: 11-06-2026
 * description: Monthly calendar grid. Displays days, marks dates with flow data via red dot.
 * props:
 *   month       — number 1-12 (required)
 *   year        — number (required)
 *   markedDates — array of YYYY-MM-DD strings to mark with dot (required)
 *   onDateClick — callback(YYYY-MM-DD) (optional)
 */

import React from "react";
import "./CalendarMonth.css";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function getFirstDayOfMonth(month, year) {
  // Returns 0 (Mon) to 6 (Sun)
  const day = new Date(year, month - 1, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

function padStart(month, year) {
  const firstDay = getFirstDayOfMonth(month, year);
  return Array(firstDay).fill(null);
}

export function CalendarMonth({
  month,
  year,
  markedDates = [],
  onDateClick = null,
}) {
  const daysInMonth = getDaysInMonth(month, year);
  const padding = padStart(month, year);

  const today = new Date().toISOString().split("T")[0];

  function toDateString(day) {
    const mm = String(month).padStart(2, "0");
    const dd = String(day).padStart(2, "0");
    return `${year}-${mm}-${dd}`;
  }

  const monthLabel = new Date(year, month - 1, 1).toLocaleString("default", {
    month: "long",
  });

  return (
    <div className="calendar-month">
      <h2 className="calendar-month__title">
        {monthLabel} {year}
      </h2>
      <div className="calendar-month__grid">
        {DAYS.map((d) => (
          <div key={d} className="calendar-month__day-label">
            {d}
          </div>
        ))}
        {padding.map((_, i) => (
          <div key={`pad-${i}`} className="calendar-month__cell--empty" />
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
          const dateStr = toDateString(day);
          const isMarked = markedDates.includes(dateStr);
          const isToday = dateStr === today;

          return (
            <div
              key={day}
              className={[
                "calendar-month__cell",
                isToday ? "calendar-month__cell--today" : "",
                onDateClick ? "calendar-month__cell--clickable" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => onDateClick && onDateClick(dateStr)}
            >
              <span className="calendar-month__day">{day}</span>
              {isMarked && <span className="calendar-month__dot" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
