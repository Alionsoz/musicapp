import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useThemeStore } from "../store/themeStore";
import { useTheme } from "../theme/useTheme";
import { useNavigation } from "@react-navigation/native";

export default function ThemeScreen() {
  const navigation = useNavigation();
  const { theme, setTheme } = useThemeStore();
  const { colors, isDark } = useTheme();

  const selectedBg = isDark
    ? "rgba(255,255,255,0.04)"
    : colors.surface;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={26} color={colors.textPrimary} />
        </TouchableOpacity>

        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
          Theme
        </Text>

        <View style={{ width: 26 }} />
      </View>

      <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
        Choose how the app looks.
      </Text>

      {/* DARK */}
      <TouchableOpacity
        style={[
          styles.option,
          {
            backgroundColor:
              theme === "dark" ? selectedBg : colors.surface,
            borderColor:
              theme === "dark" ? colors.primary : colors.border,
          },
        ]}
        onPress={() => setTheme("dark")}
        activeOpacity={0.85}
      >
        <View style={styles.optionLeft}>
          <Feather
            name="moon"
            size={18}
            color={
              theme === "dark"
                ? colors.primary
                : colors.textSecondary
            }
          />
          <Text
            style={[
              styles.optionText,
              { color: colors.textPrimary },
            ]}
          >
            Dark
          </Text>
        </View>

        {theme === "dark" && (
          <Feather name="check" size={18} color={colors.primary} />
        )}
      </TouchableOpacity>

      {/* LIGHT */}
      <TouchableOpacity
        style={[
          styles.option,
          {
            backgroundColor:
              theme === "light" ? selectedBg : colors.surface,
            borderColor:
              theme === "light" ? colors.primary : colors.border,
          },
        ]}
        onPress={() => setTheme("light")}
        activeOpacity={0.85}
      >
        <View style={styles.optionLeft}>
          <Feather
            name="sun"
            size={18}
            color={
              theme === "light"
                ? colors.primary
                : colors.textSecondary
            }
          />
          <Text
            style={[
              styles.optionText,
              { color: colors.textPrimary },
            ]}
          >
            Light
          </Text>
        </View>

        {theme === "light" && (
          <Feather name="check" size={18} color={colors.primary} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 18,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 13,
    marginBottom: 18,
  },
  option: {
    padding: 16,
    borderRadius: 18,
    borderWidth: 1,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: "600",
  },
});
