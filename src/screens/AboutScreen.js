import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import Constants from "expo-constants";

export default function AboutScreen() {
  const appVersion = Constants.expoConfig?.version ?? "1.0.0";
  const sdkVersion = Constants.expoConfig?.sdkVersion ?? "Expo";

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <Text style={styles.header}>About</Text>

      {/* APP CARD */}
      <View style={styles.card}>
        <BlurView intensity={30} tint="dark" style={styles.blur}>
          <View style={styles.logo}>
            <Feather name="headphones" size={36} color="#F5F5F7" />
          </View>

          <Text style={styles.appName}>Music App</Text>
          <Text style={styles.tagline}>
            Minimal. Focused. Modern music experience.
          </Text>
        </BlurView>
      </View>

      {/* INFO */}
      <View style={styles.section}>
        <InfoRow label="Version" value={appVersion} />
        <InfoRow label="Build" value={sdkVersion} />
        <InfoRow label="Platform" value="Expo • React Native" />
      </View>

      {/* CREATOR */}
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.creatorRow}
          onPress={() => Linking.openURL("https://github.com/Alionsoz")}
        >
          <View style={styles.creatorLeft}>
            <Feather name="user" size={18} color="#A6B1FF" />
            <Text style={styles.creatorText}>Developed by Ali Önsöz</Text>
          </View>
          <Feather name="external-link" size={16} color="#777C96" />
        </TouchableOpacity>
      </View>

      {/* FOOTER */}
      <Text style={styles.footer}>© 2025 • All rights reserved</Text>

      <View style={{ height: 120 }} />
    </ScrollView>
  );
}

function InfoRow({ label, value }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
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
    marginBottom: 22,
  },

  card: {
    borderRadius: 22,
    overflow: "hidden",
    marginBottom: 28,
    backgroundColor: "#15151F",
  },
  blur: {
    alignItems: "center",
    paddingVertical: 28,
    paddingHorizontal: 20,
  },

  logo: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: "#1F2333",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },

  appName: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
  },

  tagline: {
    color: "#9FA4C4",
    fontSize: 13,
    marginTop: 6,
    textAlign: "center",
  },

  section: {
    backgroundColor: "#0E0E11",
    borderRadius: 18,
    paddingVertical: 6,
    marginBottom: 22,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  infoLabel: {
    color: "#9FA4C4",
    fontSize: 14,
  },
  infoValue: {
    color: "#F5F5F7",
    fontSize: 14,
    fontWeight: "600",
  },

  creatorRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  creatorLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  creatorText: {
    color: "#F5F5F7",
    fontSize: 15,
    marginLeft: 12,
    fontWeight: "500",
  },

  footer: {
    color: "#777C96",
    fontSize: 12,
    textAlign: "center",
    marginTop: 8,
  },
});
