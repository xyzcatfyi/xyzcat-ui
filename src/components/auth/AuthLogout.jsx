/**
 * AuthLogout
 * version: 0.1.0
 * created: 10-06-2026
 * updated: 10-06-2026
 * description: Logout button — clears auth from localStorage and calls onLogout.
 * props:
 *   onLogout    — called after logout (required)
 *   storageKey  — localStorage key to clear (required)
 */

import React from "react";
import "./AuthLogout.css";

export function AuthLogout({ onLogout, storageKey }) {
  function handleLogout() {
    localStorage.removeItem(storageKey);
    onLogout();
  }

  return (
    <button className="auth-logout" onClick={handleLogout}>
      Log out
    </button>
  );
}
