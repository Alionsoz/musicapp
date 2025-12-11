// src/screens/ProfileScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import { Colors, Spacing, Typography, Radius } from "../theme/theme";
import { useAuth } from "../context/AuthContext";

/**
 * ProfileScreen displays user information and account actions.
 * More sections such as routines, badges and statistics will be added later.
 */
export default function ProfileScreen() {
  const { username, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Header title="Profile" />

      <View style={styles.userBlock}>
        <Text style={styles.username}>@{username}</Text>
        <Text style={styles.label}>Smart Music User</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>App Theme</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, styles.logout]} onPress={logout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  userBlock: {
    padding: Spacing.md,
    marginTop: Spacing.md,
  },
  username: {
    ...Typography.title,
    color: Colors.textPrimary,
  },
  label: {
    color: Colors.textSecondary,
    marginTop: 4,
  },
  section: {
    marginTop: Spacing.lg,
    paddingHorizontal: Spacing.md,
  },
  sectionTitle: {
    ...Typography.sectionTitle,
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
  },
  card: {
    backgroundColor: Colors.card,
    padding: Spacing.md,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: Spacing.sm,
  },
  cardText: {
    color: Colors.textPrimary,
  },
  logout: {
    borderColor: Colors.danger,
  },
  logoutText: {
    color: Colors.danger,
    fontWeight: "600",
  },
});
