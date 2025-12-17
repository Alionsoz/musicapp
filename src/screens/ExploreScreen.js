// src/screens/ExploreScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { useMusicStore } from "../store/musicStore";
import { useTheme } from "../theme/useTheme";

const FEATURED_MIX = {
  title: "Night Drive Mix",
  subtitle: "Dark electronic • Synthwave • Focus",
  cover:
    "https://i.scdn.co/image/ab67706f00000002c4782555026a7566bbb6d6f8",
};

const CATEGORIES = [
  "Trending",
  "Chill",
  "Workout",
  "Deep Focus",
  "Driving",
  "Energy",
];

const ARTISTS = [
  {
    id: "1",
    name: "The Weeknd",
    tag: "Synth • Pop",
    photo:
      "https://i.scdn.co/image/ab6761610000e5eba4e5df2fa2a343b3bf3f1e4f",
  },
  {
    id: "2",
    name: "Billie Eilish",
    tag: "Alt • Pop",
    photo:
      "https://i.scdn.co/image/ab6761610000e5eb8964eac2ffb5f3e30aea0a16",
  },
  {
    id: "3",
    name: "ODESZA",
    tag: "Electronic",
    photo:
      "https://i.scdn.co/image/ab6761610000e5eb2d3a1eee7bcddc3e39fb8bcb",
  },
];

const TRENDING_TRACKS = [
  {
    id: "1",
    title: "Blinding Lights",
    artist: "The Weeknd",
    cover:
      "https://i.scdn.co/image/ab67616d00001e02c5dcb19b8bc447ddb5e5c4a7",
  },
  {
    id: "2",
    title: "Bad Guy",
    artist: "Billie Eilish",
    cover:
      "https://i.scdn.co/image/ab67616d00001e022c8d4add0d68f4ea3b4f1f64",
  },
  {
    id: "3",
    title: "Higher Ground",
    artist: "ODESZA",
    cover:
      "https://i.scdn.co/image/ab67616d00001e02a9c4c26a4b8206dfa8185724",
  },
];

export default function ExploreScreen() {
  const [activeCategory, setActiveCategory] = useState("Trending");

  const navigation = useNavigation();
  const { playTrack } = useMusicStore();
  const { colors, isDark } = useTheme();

  // ✅ SAFE THEME ACCESS (BUG FIX)
  const accent = colors.primary ?? colors.textPrimary;
  const iconStrong = isDark ? "#E8EAFF" : (colors.primary ?? colors.textPrimary);
  const iconMuted = isDark ? "#8C91B8" : colors.textMuted;
  const cardBg = isDark ? "rgba(18,18,26,0.92)" : colors.card;
  const borderSoft = isDark ? "rgba(255,255,255,0.08)" : colors.border;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {/* HEADER */}
      <View style={styles.headerRow}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>
          Explore
        </Text>
        <Feather name="search" size={22} color={iconStrong} />
      </View>

      {/* FEATURED HERO */}
      <TouchableOpacity
        activeOpacity={0.9}
        style={[styles.heroCard, { backgroundColor: cardBg }]}
      >
        <Image
          source={{ uri: FEATURED_MIX.cover }}
          style={styles.heroImage}
          contentFit="cover"
        />
        <View style={styles.heroOverlay} />
        <View style={styles.heroContent}>
          <Text style={[styles.heroLabel, { color: accent }]}>
            FEATURED MIX
          </Text>
          <Text style={[styles.heroTitle, { color: colors.textPrimary }]}>
            {FEATURED_MIX.title}
          </Text>
          <Text
            style={[styles.heroSubtitle, { color: colors.textSecondary }]}
          >
            {FEATURED_MIX.subtitle}
          </Text>

          <View style={styles.heroBottomRow}>
            <View style={styles.heroTag}>
              <Feather name="activity" size={14} color={accent} />
              <Text style={[styles.heroTagText, { color: accent }]}>
                Dynamic mood-based
              </Text>
            </View>

            <View
              style={[
                styles.heroPlay,
                { backgroundColor: colors.textPrimary },
              ]}
            >
              <Feather name="play" size={20} color={colors.background} />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* CATEGORIES */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {CATEGORIES.map((cat) => {
          const active = cat === activeCategory;
          return (
            <TouchableOpacity
              key={cat}
              style={[
                styles.chip,
                {
                  backgroundColor: active
                    ? colors.textPrimary
                    : "transparent",
                  borderColor: borderSoft,
                },
              ]}
              onPress={() => setActiveCategory(cat)}
            >
              <Text
                style={{
                  color: active
                    ? colors.background
                    : colors.textPrimary,
                  fontWeight: "600",
                }}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* ARTISTS */}
      <View style={styles.sectionHeaderRow}>
        <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
          Artists for you
        </Text>
        <Text style={{ color: colors.textSecondary }}>See all</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {ARTISTS.map((artist) => (
          <View key={artist.id} style={styles.artistCard}>
            <Image
              source={{ uri: artist.photo }}
              style={styles.artistImage}
              contentFit="cover"
            />
            <Text
              style={[styles.artistName, { color: colors.textPrimary }]}
              numberOfLines={1}
            >
              {artist.name}
            </Text>
            <Text
              style={[styles.artistTag, { color: colors.textSecondary }]}
            >
              {artist.tag}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* TRACKS */}
      <View style={{ marginBottom: 60 }}>
        {TRENDING_TRACKS.map((track) => (
          <View key={track.id} style={styles.trackRow}>
            <Image
              source={{ uri: track.cover }}
              style={styles.trackCover}
            />

            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text
                style={[styles.trackTitle, { color: colors.textPrimary }]}
              >
                {track.title}
              </Text>
              <Text
                style={[
                  styles.trackArtist,
                  { color: colors.textSecondary },
                ]}
              >
                {track.artist}
              </Text>

              <MiniWaveform color={iconMuted} />
            </View>

            <TouchableOpacity
              style={[
                styles.trackPlayButton,
                { backgroundColor: colors.textPrimary },
              ]}
              onPress={() => {
                playTrack(track);
                navigation.navigate("Player");
              }}
            >
              <Feather name="play" size={18} color={colors.background} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

function MiniWaveform({ color }) {
  const bars = [6, 10, 14, 9, 16, 12, 18, 8, 13, 11];

  return (
    <View style={styles.waveContainer}>
      {bars.map((h, i) => (
        <View
          key={i}
          style={[styles.waveBar, { height: h, backgroundColor: color }]}
        />
      ))}
    </View>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 18,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
  },

  heroCard: {
    borderRadius: 22,
    overflow: "hidden",
    height: 210,
    marginTop: 4,
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  heroContent: {
    flex: 1,
    padding: 18,
    justifyContent: "space-between",
  },
  heroLabel: {
    fontSize: 11,
    letterSpacing: 2,
    fontWeight: "600",
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: "800",
  },
  heroSubtitle: {
    fontSize: 13,
  },
  heroBottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heroTag: {
    flexDirection: "row",
    alignItems: "center",
  },
  heroTagText: {
    fontSize: 11,
    marginLeft: 6,
  },
  heroPlay: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
  },

  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    marginRight: 10,
  },

  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
  },

  artistCard: {
    width: 120,
    marginRight: 14,
  },
  artistImage: {
    width: 120,
    height: 120,
    borderRadius: 18,
    marginBottom: 8,
  },
  artistName: {
    fontSize: 14,
    fontWeight: "600",
  },
  artistTag: {
    fontSize: 12,
  },

  trackRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  trackCover: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  trackTitle: {
    fontSize: 15,
    fontWeight: "600",
  },
  trackArtist: {
    fontSize: 12,
  },
  trackPlayButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },

  waveContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 6,
  },
  waveBar: {
    width: 3,
    borderRadius: 999,
    marginRight: 2,
  },
});
