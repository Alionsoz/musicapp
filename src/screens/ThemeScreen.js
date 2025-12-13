import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useThemeStore } from "../store/themeStore";

const THEMES = [
  { key: "dark", label: "Dark", icon: "moon" },
  { key: "light", label: "Light", icon: "sun" },
  { key: "system", label: "System", icon: "smartphone" },
];

export default function ThemeScreen() {
  const navigation = useNavigation();
  const { theme, setTheme } = useThemeStore();

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={26} color="#F5F5F7" />
        </TouchableOpacity>

        <Text style={styles.title}>Theme</Text>
        <View style={{ width: 26 }} />
      </View>

      {/* OPTIONS */}
      {THEMES.map((item) => {
        const active = theme === item.key;

        return (
          <TouchableOpacity
            key={item.key}
            style={[styles.option, active && styles.optionActive]}
            onPress={() => setTheme(item.key)}
            activeOpacity={0.8}
          >
            <View style={styles.optionLeft}>
              <Feather
                name={item.icon}
                size={18}
                color={active ? "#050509" : "#F5F5F7"}
              />
              <Text
                style={[
                  styles.optionText,
                  active && styles.optionTextActive,
                ]}
              >
                {item.label}
              </Text>
            </View>

            {active && (
              <Feather name="check" size={18} color="#050509" />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050509",
    paddingHorizontal: 18,
    paddingTop: 18,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28,
  },
  title: {
    color: "#F5F5F7",
    fontSize: 20,
    fontWeight: "700",
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: "#0E0E11",
    marginBottom: 14,
  },
  optionActive: {
    backgroundColor: "#F5F5F7",
  },
  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    color: "#F5F5F7",
    fontSize: 15,
    marginLeft: 12,
    fontWeight: "500",
  },
  optionTextActive: {
    color: "#050509",
    fontWeight: "700",
  },
});
