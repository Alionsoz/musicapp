// src/screens/ProfileScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useUserStore } from "../store/userStore";

/**
 * User profile screen.
 * Displays username and general account info.
 */
export default function ProfileScreen() {
  const username = useUserStore((state) => state.username);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Username</Text>
        <Text style={styles.username}>@{username}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#111",
    padding: 20,
    borderRadius: 12,
    borderColor: "#222",
    borderWidth: 1,
    marginTop: 10,
  },
  label: {
    color: "#888",
    fontSize: 14,
    marginBottom: 6,
  },
  username: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
});
