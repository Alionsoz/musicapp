// src/screens/ExploreScreen.js
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import { Colors, Spacing, Typography, Radius } from "../theme/theme";

/**
 * ExploreScreen organizes content discovery into themed sections.
 * The UI follows a flexible grid system to easily add new categories.
 */

const categories = [
  "Top Hits",
  "Focus Flow",
  "Chill Vibes",
  "Workout Mix",
  "Hip-Hop",
  "Deep House",
  "Indie Boost",
  "Classical Zone",
];

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Header title="Explore" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Discover</Text>

          <View style={styles.grid}>
            {categories.map((item, index) => (
              <View key={index} style={styles.card}>
                <Text style={styles.cardText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
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
  sectionTitle: {
    ...Typography.sectionTitle,
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  card: {
    width: "47%",
    height: 80,
    backgroundColor: Colors.card,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    color: Colors.textPrimary,
    fontWeight: "600",
  },
});
