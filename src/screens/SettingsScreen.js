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

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      {SETTINGS_SECTIONS.map((section) => (
        <View key={section.title} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>

          {section.items.map((item) => (
            <TouchableOpacity
              key={item.label}
              style={styles.row}
              onPress={() => navigation.navigate(item.route)}
            >
              <View style={styles.rowLeft}>
                <Feather name={item.icon} size={18} color="#F5F5F7" />
                <Text style={styles.rowText}>{item.label}</Text>
              </View>
              <Feather name="chevron-right" size={18} color="#777C96" />
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050509",
    paddingHorizontal: 18,
    paddingTop: 24,
  },
  header: {
    color: "#F5F5F7",
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 24,
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    color: "#9FA4C4",
    fontSize: 13,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.06)",
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowText: {
    color: "#F5F5F7",
    fontSize: 15,
    marginLeft: 12,
  },
});
