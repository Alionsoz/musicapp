import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useUserStore } from "../store/userStore";

// ✅ THEME
import { useThemeStore } from "../store/themeStore";

export default function LoginScreen() {
  const login = useUserStore((state) => state.login);
  const { colors } = useThemeStore();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
    >
      <View
        style={[
          styles.card,
          { backgroundColor: colors.card },
        ]}
      >
        <Text
          style={[
            styles.title,
            { color: colors.textPrimary },
          ]}
        >
          Music App
        </Text>

        <Text
          style={[
            styles.desc,
            { color: colors.textSecondary },
          ]}
        >
          A modern music experience tailored for you
        </Text>

        <TouchableOpacity
          style={[
            styles.btn,
            { backgroundColor: colors.textPrimary },
          ]}
          onPress={() => login({ id: "demo-user" })}
        >
          <Text
            style={[
              styles.btnText,
              { color: colors.background },
            ]}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 18,
  },
  card: {
    borderRadius: 28,
    padding: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 10,
  },
  desc: {
    marginBottom: 30,
    fontSize: 14,
    lineHeight: 20,
  },
  btn: {
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  btnText: {
    fontWeight: "700",
    fontSize: 15,
  },
});
