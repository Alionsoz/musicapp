import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: "dark", // "dark" | "light" | "system"

  setTheme: (theme) => set({ theme }),
}));
