import { useThemeStore } from "../store/themeStore";
import { darkColors, lightColors } from "./colors";

export function useTheme() {
  const theme = useThemeStore((s) => s.theme);

  const base = theme === "dark" ? darkColors : lightColors;

  return {
    // surfaces
    background: base.background,
    surface: base.surface ?? base.card ?? base.background,
    card: base.card ?? base.surface ?? base.background,

    // text
    textPrimary: base.textPrimary,
    textSecondary: base.textSecondary,
    textMuted: base.textMuted ?? "#777C96",

    // accents (🔥 KRİTİK)
    primary: base.primary ?? "#A6B1FF",
    accent: base.accent ?? base.primary ?? "#A6B1FF",
    danger: base.danger ?? "#FF6B6B",

    // borders
    border: base.border ?? "rgba(255,255,255,0.08)",
  };
}
