import { create } from "zustand";

/**
 * Global user state.
 * Stores authentication info, onboarding completion, and profile data.
 */
export const useUserStore = create((set) => ({
  user: null,
  username: null,
  hasCompletedOnboarding: false,

  login: (userData) =>
    set({
      user: userData,
      hasCompletedOnboarding: false, // always start onboarding
    }),

  logout: () =>
    set({
      user: null,
      username: null,
      hasCompletedOnboarding: false,
    }),

  setUsername: (value) =>
    set({
      username: value,
    }),

  completeOnboarding: () =>
    set({
      hasCompletedOnboarding: true,
    }),
}));
