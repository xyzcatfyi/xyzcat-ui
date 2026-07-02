/**
 * AuthLogout
 * version: 0.1.0
 * created: 10-06-2026
 * updated: 02-07-2026
 * description: Logout button — clears auth from localStorage and calls onLogout.
 * props:
 *   onLogout    — called after logout (required)
 *   storageKey  — localStorage key to clear (required)
 *
 * usage:
 *   <AuthLogout onLogout={() => setAuthed(false)} storageKey="hub-auth" />
 */

import React from "react";
import "./AuthLogout.css";

export function AuthLogout({ onLogout, storageKey }) {
  function handleLogout() {
    // Remove auth flag from localStorage — user will see login screen on next visit
    localStorage.removeItem(storageKey);
    onLogout();
  }

  return (
    <button className="auth-logout" onClick={handleLogout}>
      Log out
    </button>
  );
}
