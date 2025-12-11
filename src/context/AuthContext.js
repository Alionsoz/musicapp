// src/context/AuthContext.js
import React, { createContext, useContext, useState, useMemo } from "react";

/**
 * AuthContext keeps global authentication state (logged-in or not)
 * and basic user profile data such as username.
 *
 * Later we can extend this to also store Spotify access tokens,
 * refresh tokens, and user profile details from the Spotify API.
 */

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);

  const login = () => {
    // Fake login for now: mark the user as authenticated.
    // Spotify OAuth will be integrated here later.
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Reset all auth-related state on logout.
    setIsAuthenticated(false);
    setUsername(null);
  };

  const value = useMemo(
    () => ({
      isAuthenticated,
      username,
      setUsername,
      login,
      logout,
    }),
    [isAuthenticated, username]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
