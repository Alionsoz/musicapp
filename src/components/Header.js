// src/components/Header.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Spacing, Typography } from "../theme/theme";

/**
 * Header renders a consistent top section used across screens.
 * It supports a simple title for now but can later include:
 * - search button
 * - notifications
 * - user avatar
 */
export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.md,
    paddingTop: 50,
    paddingBottom: Spacing.md,
    backgroundColor: Colors.background,
  },
  title: {
    ...Typography.title,
    color: Colors.textPrimary,
  },
});
