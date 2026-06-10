/**
 * AuthLogin
 * version: 0.1.0
 * created: 10-06-2026
 * updated: 10-06-2026
 * description: Password gate for Hub instances. Checks localStorage on mount —
 *              calls onSuccess immediately if already authenticated.
 * props:
 *   onSuccess   — called when auth is confirmed (required)
 *   password    — expected password, pass from env var (required)
 *   storageKey  — localStorage key for auth state (required)
 */

import React, { useState, useEffect } from "react";
import "./AuthLogin.css";

export function AuthLogin({ onSuccess, password, storageKey }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  // Auto-login if already authenticated
  useEffect(() => {
    if (localStorage.getItem(storageKey) === "true") {
      onSuccess();
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (input === password) {
      localStorage.setItem(storageKey, "true");
      setError(false);
      onSuccess();
    } else {
      setError(true);
      setInput("");
    }
  }

  return (
    <div className="auth-login">
      <div className="auth-login__box">
        <form className="auth-login__form" onSubmit={handleSubmit}>
          <div className="auth-login__field">
            <input
              className={`auth-login__input ${error ? "auth-login__input--error" : ""}`}
              type="password"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError(false);
              }}
              placeholder="Password"
              autoFocus
              autoComplete="current-password"
            />
            {error && (
              <span className="auth-login__error">Incorrect password</span>
            )}
          </div>
          <button className="auth-login__btn" type="submit">
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
