// src/screens/OnboardingUsernameScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useUserStore } from "../store/userStore";

/**
 * Screen for completing onboarding by selecting a unique username.
 * This creates a user identity used across the app.
 */
export default function OnboardingUsernameScreen({ navigation }) {
  const setUsername = useUserStore((state) => state.setUsername);
  const completeOnboarding = useUserStore((state) => state.completeOnboarding);

  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function handleContinue() {
    const trimmed = value.trim().toLowerCase();

    if (trimmed.length < 3) {
      setError("Username must be at least 3 characters.");
      return;
    }
    if (!/^[a-z0-9._]+$/.test(trimmed)) {
      setError("Only letters, numbers, dots and underscores allowed.");
      return;
    }

    // Update global user state
    setUsername(trimmed);
    completeOnboarding();

    // Navigate to tabs
    navigation.replace("Tabs");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your username</Text>
      <Text style={styles.subtitle}>
        This will be your identity inside the app.
      </Text>

      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="@yourname"
        placeholderTextColor="#666"
        value={value}
        onChangeText={(t) => {
          setValue(t);
          setError("");
        }}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <PrimaryButton label="Continue" onPress={handleContinue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 8,
  },
  subtitle: {
    color: "#999",
    fontSize: 15,
    marginBottom: 24,
  },
  input: {
    backgroundColor: "#111",
    borderColor: "#222",
    borderWidth: 1,
    padding: 14,
    borderRadius: 10,
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
  error: {
    color: "#FF4A4A",
    marginBottom: 16,
  },
});
