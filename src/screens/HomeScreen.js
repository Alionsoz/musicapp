// src/screens/HomeScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import { Colors, Spacing, Typography, Radius } from "../theme/theme";
import { useAuth } from "../context/AuthContext";

/**
 * HomeScreen shows contextual blocks such as routines, 
 * recently played content, quick actions, etc.
 * 
 * For now we implement the UI skeleton.
 */
export default function HomeScreen() {
  const { username } = useAuth();

  return (
    <View style={styles.container}>
      <Header title="Home" />

      <View style={styles.section}>
        <Text style={styles.welcome}>
          Welcome back{username ? `, @${username}` : ""} 👋
        </Text>
        <Text style={styles.subtitle}>
          Your personalized smart music overview.
        </Text>
      </View>

      <View style={styles.cardGrid}>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Gym Routine</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>Study Focus</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>Evening Relax</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>Commute Mix</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Continue Listening</Text>
        <View style={styles.listenCard}>
          <Text style={styles.listenText}>No recent playback</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  section: {
    paddingHorizontal: Spacing.md,
    marginBottom: Spacing.lg,
  },
  welcome: {
    ...Typography.title,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  subtitle: {
    ...Typography.body,
    color: Colors.textSecondary,
  },
  sectionTitle: {
    ...Typography.sectionTitle,
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
  },
  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: Spacing.md,
    gap: 12,
  },
  card: {
    width: "47%",
    backgroundColor: Colors.card,
    padding: Spacing.md,
    borderRadius: Radius.lg,
    borderColor: Colors.border,
    borderWidth: 1,
  },
  cardLabel: {
    color: Colors.textPrimary,
    fontSize: 14,
    fontWeight: "600",
  },
  listenCard: {
    backgroundColor: Colors.card,
    padding: Spacing.md,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  listenText: {
    color: Colors.textSecondary,
  },
});
