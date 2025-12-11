// src/screens/LoginScreen.js
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useAuth } from "../context/AuthContext";

/**
 * LoginScreen currently performs a "fake" login:
 * pressing the button marks the user as authenticated.
 *
 * Later this screen will host the Spotify OAuth flow.
 */
export default function LoginScreen() {
  const { login } = useAuth();

  const handleFakeSpotifyLogin = () => {
    // For now we simulate a successful Spotify login.
    // Real OAuth integration will be added on top.
    login();
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>R</Text>
        </View>
        <Text style={styles.brand}>Routune (working name)</Text>
      </View>

      <Text style={styles.title}>Smart, context-aware music.</Text>
      <Text style={styles.subtitle}>
        Connect once, and let your routines, locations and mood decide what
        plays next.
      </Text>

      <View style={styles.spacer} />

      <PrimaryButton
        title="Continue with Spotify"
        onPress={handleFakeSpotifyLogin}
      />

      <Text style={styles.helperText}>
        This is a prototype. Spotify login is simulated for now.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020202",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  logoWrapper: {
    alignItems: "center",
    marginBottom: 32,
  },
  logoCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#111",
    borderWidth: 2,
    borderColor: "#1DB954",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  logoText: {
    color: "#1DB954",
    fontSize: 32,
    fontWeight: "800",
  },
  brand: {
    color: "#eee",
    fontSize: 16,
    letterSpacing: 1,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    color: "#aaa",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
  spacer: {
    height: 48,
  },
  helperText: {
    color: "#666",
    fontSize: 11,
    marginTop: 16,
    textAlign: "center",
  },
});
