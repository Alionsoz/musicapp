// src/screens/LoginScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useUserStore } from "../store/userStore";

/**
 * Login screen where the user begins authentication.
 * For now this screen uses a fake Spotify login for rapid development.
 */
export default function LoginScreen() {
  const login = useUserStore((state) => state.login);

  function handleFakeSpotifyLogin() {
    const fakeUser = {
      id: "user_123",
      name: "Ali",
      username: "alion",
      country: "TR",
      image:
        "https://i.scdn.co/image/ab6775700000ee85e43ad12f489b6e54c2a1a7e2",
    };

    // Update global state only; navigation will react automatically
    login(fakeUser);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Routine</Text>
      <Text style={styles.subtitle}>
        Smart music that adapts to your routines
      </Text>

      <PrimaryButton
        label="Continue with Spotify"
        onPress={handleFakeSpotifyLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    color: "#FFFFFF",
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#AAAAAA",
    textAlign: "center",
    marginBottom: 32,
  },
});
