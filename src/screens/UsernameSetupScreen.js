// src/screens/UsernameSetupScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useAuth } from "../context/AuthContext";

/**
 * UsernameSetupScreen forces the user to pick a unique handle
 * after authentication, similar to how Instagram/Twitter work.
 *
 * This is where we can later add:
 * - username availability checks
 * - validation rules
 * - suggestions, etc.
 */
export default function UsernameSetupScreen({ navigation }) {
  const { username, setUsername } = useAuth();
  const [value, setValue] = useState(username ?? "");

  const handleContinue = () => {
    if (!value.trim()) return;
    // Basic normalization: lowercase, trimmed.
    const normalized = value.trim().toLowerCase();
    setUsername(normalized);
    navigation.replace("Tabs");
  };

  const isDisabled = !value.trim() || value.trim().length < 3;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: "padding", android: undefined })}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>Choose your username</Text>
        <Text style={styles.subtitle}>
          This handle will identify you in the app, similar to Instagram. You
          can change it later in your profile settings.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="@username"
          placeholderTextColor="#666"
          value={value}
          onChangeText={setValue}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Text style={styles.hint}>
          • Minimum 3 characters{"\n"}• Only letters, numbers and underscores
          recommended
        </Text>

        <View style={styles.spacer} />

        <PrimaryButton
          title="Continue"
          onPress={handleContinue}
          disabled={isDisabled}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020202",
  },
  inner: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
  },
  subtitle: {
    color: "#aaa",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 24,
  },
  input: {
    backgroundColor: "#111",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: "#fff",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#333",
  },
  hint: {
    color: "#777",
    fontSize: 12,
    marginTop: 8,
  },
  spacer: {
    height: 32,
  },
});
