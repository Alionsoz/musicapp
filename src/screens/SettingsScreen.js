import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../theme/useTheme";

const SETTINGS_SECTIONS = [
  {
    title: "Playback",
    items: [
      { label: "Audio Quality", icon: "music", route: "AudioQuality" },
      { label: "Offline Mode", icon: "download", route: "OfflineMode" },
    ],
  },
  {
    title: "App",
    items: [
      { label: "Theme", icon: "moon", route: "Theme" },
      { label: "Language", icon: "globe", route: "Language" },
    ],
  },
  {
    title: "Account",
    items: [
      { label: "Privacy", icon: "lock", route: "Privacy" },
      { label: "About", icon: "info", route: "About" },
    ],
  },
];

export default function SettingsScreen() {
  const navigation = useNavigation();
  const { colors, isDark } = useTheme();

  const cardBg = isDark
    ? "rgba(18,18,26,0.95)"
    : colors.surface;

  const borderSoft = isDark
    ? "rgba(255,255,255,0.08)"
    : colors.border;

  const iconStrong = isDark
    ? colors.primary
    : colors.textPrimary;

  const iconMuted = isDark
    ? "#8C91B8"
    : colors.textSecondary;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      showsVerticalScrollIndicator={false}
    >
      <Text style={[styles.header, { color: colors.textPrimary }]}>
        Settings
      </Text>

      {SETTINGS_SECTIONS.map((section) => (
        <View key={section.title} style={styles.section}>
          <Text
            style={[
              styles.sectionTitle,
              { color: colors.textSecondary },
            ]}
          >
            {section.title}
          </Text>

          <View
            style={[
              styles.sectionCard,
              {
                backgroundColor: cardBg,
                borderColor: borderSoft,
              },
            ]}
          >
            {section.items.map((item, idx) => (
              <TouchableOpacity
                key={item.label}
                style={[
                  styles.row,
                  idx !== section.items.length - 1 && {
                    borderBottomWidth: 1,
                    borderBottomColor: borderSoft,
                  },
                ]}
                onPress={() => navigation.navigate(item.route)}
                activeOpacity={0.85}
              >
                <View style={styles.rowLeft}>
                  <Feather
                    name={item.icon}
                    size={18}
                    color={iconStrong}
                  />
                  <Text
                    style={[
                      styles.rowText,
                      { color: colors.textPrimary },
                    ]}
                  >
                    {item.label}
                  </Text>
                </View>

                <Feather
                  name="chevron-right"
                  size={18}
                  color={iconMuted}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 24,
  },
  header: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 24,
  },
  section: {
    marginBottom: 22,
  },
  sectionTitle: {
    fontSize: 13,
    marginBottom: 10,
    letterSpacing: 0.3,
  },
  sectionCard: {
    borderRadius: 18,
    overflow: "hidden",
    borderWidth: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 16,
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowText: {
    fontSize: 15,
    marginLeft: 12,
    fontWeight: "500",
  },
});
