import { create } from "zustand";

/**
 * Global user state
 * Controls authentication & onboarding flow
 */
export const useUserStore = create((set) => ({
  // --- STATE ---
  user: null,
  hasCompletedOnboarding: false,

  // --- ACTIONS ---

  // Fake login (for now)
  login: () =>
    set({
      user: {
        id: "1",
        username: "alionsoz",
      },
      hasCompletedOnboarding: true, // onboarding'i şimdilik geçiyoruz
    }),

  logout: () =>
    set({
      user: null,
      hasCompletedOnboarding: false,
    }),

  completeOnboarding: () =>
    set({
      hasCompletedOnboarding: true,
    }),
}));
