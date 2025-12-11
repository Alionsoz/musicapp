import { create } from "zustand";

/**
 * Global user store for managing authentication state and profile data.
 * This state persists during the app session and allows any component
 * to access user information without prop-drilling.
 */
export const useUserStore = create((set) => ({
  user: null,

  login: (userData) => set({ user: userData }),
  logout: () => set({ user: null }),
}));
