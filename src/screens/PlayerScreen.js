import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";

// ✅ THEME
import { useThemeStore } from "../store/themeStore";

export default function PlayerScreen() {
  const navigation = useNavigation();
  const { colors, isDark } = useThemeStore();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather
            name="chevron-down"
            size={26}
            color={colors.textPrimary}
          />
        </TouchableOpacity>

        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
          Now Playing
        </Text>

        <TouchableOpacity>
          <Feather
            name="more-vertical"
            size={22}
            color={colors.textPrimary}
          />
        </TouchableOpacity>
      </View>

      {/* COVER */}
      <View style={styles.coverWrapper}>
        <BlurView
          intensity={isDark ? 45 : 30}
          tint={isDark ? "dark" : "light"}
          style={[
            styles.cover,
            {
              backgroundColor: isDark
                ? "rgba(20,20,28,0.85)"
                : colors.card,
            },
          ]}
        >
          <Feather
            name="music"
            size={64}
            color={isDark ? "#8A8FAE" : colors.textMuted}
          />
        </BlurView>
      </View>

      {/* SONG INFO */}
      <View style={styles.info}>
        <Text style={[styles.songTitle, { color: colors.textPrimary }]}>
          Blinding Lights
        </Text>
        <Text style={[styles.artist, { color: colors.textSecondary }]}>
          The Weeknd
        </Text>
      </View>

      {/* PROGRESS */}
      <View style={styles.progressWrapper}>
        <View
          style={[
            styles.progressBar,
            {
              backgroundColor: isDark
                ? "rgba(255,255,255,0.15)"
                : colors.border,
            },
          ]}
        >
          <View
            style={[
              styles.progressFill,
              { backgroundColor: colors.textPrimary },
            ]}
          />
        </View>

        <View style={styles.timeRow}>
          <Text style={[styles.time, { color: colors.textMuted }]}>
            1:24
          </Text>
          <Text style={[styles.time, { color: colors.textMuted }]}>
            3:20
          </Text>
        </View>
      </View>

      {/* CONTROLS */}
      <View style={styles.controls}>
        <TouchableOpacity>
          <Feather
            name="shuffle"
            size={22}
            color={isDark ? "#8A8FAE" : colors.textMuted}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather
            name="skip-back"
            size={28}
            color={colors.textPrimary}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.playButton,
            { backgroundColor: colors.textPrimary },
          ]}
        >
          <Feather
            name="pause"
            size={28}
            color={colors.background}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather
            name="skip-forward"
            size={28}
            color={colors.textPrimary}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather
            name="repeat"
            size={22}
            color={isDark ? "#8A8FAE" : colors.textMuted}
          />
        </TouchableOpacity>
      </View>

      {/* SECONDARY */}
      <View style={styles.secondary}>
        <TouchableOpacity>
          <Feather
            name="heart"
            size={20}
            color={isDark ? "#FF6B6B" : colors.danger}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather
            name="list"
            size={20}
            color={isDark ? "#8A8FAE" : colors.textMuted}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 18,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  coverWrapper: {
    alignItems: "center",
    marginBottom: 30,
  },
  cover: {
    width: 260,
    height: 260,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
  },

  info: {
    alignItems: "center",
    marginBottom: 26,
  },
  songTitle: {
    fontSize: 22,
    fontWeight: "800",
  },
  artist: {
    marginTop: 6,
    fontSize: 14,
  },

  progressWrapper: {
    marginBottom: 34,
  },
  progressBar: {
    height: 4,
    borderRadius: 2,
  },
  progressFill: {
    width: "45%",
    height: 4,
    borderRadius: 2,
  },
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },
  time: {
    fontSize: 12,
  },

  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  playButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },

  secondary: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
  },
});
