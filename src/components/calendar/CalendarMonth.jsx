/**
 * CalendarMonth
 * version: 0.1.0
 * created: 11-06-2026
 * updated: 02-07-2026
 * description: Monthly calendar grid. Displays days, marks dates with a red dot.
 *              Week starts on Monday. Dates are handled internally as YYYY-MM-DD.
 * props:
 *   month       — number 1-12 (required)
 *   year        — number (required)
 *   markedDates — array of YYYY-MM-DD strings to mark with dot (required)
 *   onDateClick — callback(YYYY-MM-DD) (optional)
 *
 * usage:
 *   <CalendarMonth
 *     month={7}
 *     year={2026}
 *     markedDates={["2026-07-01", "2026-07-05"]}
 *     onDateClick={(date) => console.log(date)}
 *   />
 */

import React from "react";
import "./CalendarMonth.css";

// Week starts Monday — order matters for the grid layout
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// month here is 1-12; passing it directly to Date(year, month, 0) gives
// the last day of the previous month — which equals the days in our month
function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

// Returns 0 (Mon) to 6 (Sun) — JS getDay() returns 0 for Sunday,
// so we remap it to 6 to keep Monday as the first column
function getFirstDayOfMonth(month, year) {
  const day = new Date(year, month - 1, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

// Returns an array of nulls to pad the grid before day 1
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

  // Today's date as YYYY-MM-DD for highlighting
  const today = new Date().toISOString().split("T")[0];

  // Builds a YYYY-MM-DD string for a given day number in this month
  function toDateString(day) {
    const mm = String(month).padStart(2, "0");
    const dd = String(day).padStart(2, "0");
    return `${year}-${mm}-${dd}`;
  }

  // toLocaleString with "default" uses the browser's locale for the month name
  const monthLabel = new Date(year, month - 1, 1).toLocaleString("default", {
    month: "long",
  });

  return (
    <div className="calendar-month">
      <h2 className="calendar-month__title">
        {monthLabel} {year}
      </h2>
      <div className="calendar-month__grid">
        {/* Day headers — Mon to Sun */}
        {DAYS.map((d) => (
          <div key={d} className="calendar-month__day-label">
            {d}
          </div>
        ))}

        {/* Empty cells to offset day 1 to the correct column */}
        {padding.map((_, i) => (
          <div key={`pad-${i}`} className="calendar-month__cell--empty" />
        ))}

        {/* Day cells */}
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
                // Only add clickable class if a handler was provided
                onDateClick ? "calendar-month__cell--clickable" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => onDateClick && onDateClick(dateStr)}
            >
              <span className="calendar-month__day">{day}</span>
              {/* Red dot — only renders for marked dates */}
              {isMarked && <span className="calendar-month__dot" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
