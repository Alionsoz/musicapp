import { create } from "zustand";

const lightColors = {
  background: "#F5F5F7",
  card: "#FFFFFF",

  textPrimary: "#050509",
  textSecondary: "#4A4E69",
  textMuted: "#8A8FA8",

  iconPrimary: "#050509",
  iconSecondary: "#4A5DFF",
  iconMuted: "#9A9DB2",

  accent: "#4A5DFF",
  danger: "#E53935",

  border: "#E5E6EC",
};


const darkColors = {
  background: "#050509",
  card: "#0E0E11",

  textPrimary: "#F5F5F7",
  textSecondary: "#B5B8D6",
  textMuted: "#777C96",

  iconPrimary: "#F5F5F7",
  iconSecondary: "#A6B1FF",
  iconMuted: "#777C96",

  accent: "#A6B1FF",
  danger: "#FF6B6B",

  border: "#1C1C24",
};


export const useThemeStore = create((set, get) => ({
  theme: "dark", // "dark" | "light"

  colors: darkColors, // 🔴 BU SATIR EKSİKTİ

  setTheme: (value) => {
    set({
      theme: value,
      colors: value === "light" ? lightColors : darkColors,
    });
  },

  toggleTheme: () => {
    const next = get().theme === "dark" ? "light" : "dark";
    set({
      theme: next,
      colors: next === "light" ? lightColors : darkColors,
    });
  },
}));
