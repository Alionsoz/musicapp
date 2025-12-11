// src/components/PrimaryButton.js
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

/**
 * PrimaryButton is the main CTA used across the app.
 * It supports both `label` and `title` prop names for safety.
 */
export default function PrimaryButton({ label, title, onPress, style }) {
  const text = label ?? title ?? "Button";

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1DB954",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 999,
    minWidth: 220,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
