// src/screens/PlayerScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import { Colors, Spacing, Typography, Radius } from "../theme/theme";

/**
 * PlayerScreen is the central music playback UI.
 * This version includes the visual structure only.
 * Functional audio playback will be added later.
 */
export default function PlayerScreen() {
  return (
    <View style={styles.container}>
      <Header title="Now Playing" />

      <View style={styles.artwork} />

      <View style={styles.info}>
        <Text style={styles.trackTitle}>No track playing</Text>
        <Text style={styles.trackArtist}>—</Text>
      </View>

      <View style={styles.controls}>
        <View style={styles.controlBtn} />
        <View style={styles.playBtn} />
        <View style={styles.controlBtn} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Spacing.md,
  },
  artwork: {
    height: 280,
    backgroundColor: Colors.card,
    borderRadius: Radius.lg,
    marginTop: 40,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  info: {
    marginTop: Spacing.lg,
  },
  trackTitle: {
    ...Typography.title,
    color: Colors.textPrimary,
  },
  trackArtist: {
    color: Colors.textSecondary,
    marginTop: Spacing.sm,
  },
  controls: {
    marginTop: Spacing.xl,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  controlBtn: {
    width: 50,
    height: 50,
    backgroundColor: Colors.card,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  playBtn: {
    width: 70,
    height: 70,
    backgroundColor: Colors.primary,
    borderRadius: 999,
  },
});
