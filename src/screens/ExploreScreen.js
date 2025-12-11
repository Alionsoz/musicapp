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

// ✅ EKLENEN IMPORTLAR
import { useNavigation } from "@react-navigation/native";
import { useMusicStore } from "../store/musicStore";

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

  // ✅ EKLENEN SATIRLAR
  const navigation = useNavigation();
  const { playTrack } = useMusicStore();

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>Explore</Text>
        <Feather name="search" size={22} color="#F5F5F7" />
      </View>

      {/* FEATURED HERO */}
      <TouchableOpacity activeOpacity={0.9} style={styles.heroCard}>
        <Image
          source={{ uri: FEATURED_MIX.cover }}
          style={styles.heroImage}
          contentFit="cover"
        />
        <View style={styles.heroOverlay} />
        <View style={styles.heroContent}>
          <Text style={styles.heroLabel}>FEATURED MIX</Text>
          <Text style={styles.heroTitle}>{FEATURED_MIX.title}</Text>
          <Text style={styles.heroSubtitle}>{FEATURED_MIX.subtitle}</Text>

          <View style={styles.heroBottomRow}>
            <View style={styles.heroTag}>
              <Feather name="activity" size={14} color="#A6B1FF" />
              <Text style={styles.heroTagText}>Dynamic mood-based</Text>
            </View>

            <View style={styles.heroPlay}>
              <Feather name="play" size={20} color="#000" />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* CATEGORIES */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 18 }}
      >
        {CATEGORIES.map((cat) => {
          const active = cat === activeCategory;
          return (
            <TouchableOpacity
              key={cat}
              style={[styles.chip, active && styles.chipActive]}
              onPress={() => setActiveCategory(cat)}
            >
              <Text style={[styles.chipText, active && styles.chipTextActive]}>
                {cat}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* ARTISTS */}
      <View style={styles.sectionHeaderRow}>
        <Text style={styles.sectionTitle}>Artists for you</Text>
        <Text style={styles.sectionLink}>See all</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 12 }}
      >
        {ARTISTS.map((artist) => (
          <View key={artist.id} style={styles.artistCard}>
            <Image
              source={{ uri: artist.photo }}
              style={styles.artistImage}
              contentFit="cover"
            />
            <Text style={styles.artistName} numberOfLines={1}>
              {artist.name}
            </Text>
            <Text style={styles.artistTag}>{artist.tag}</Text>
          </View>
        ))}
      </ScrollView>

      {/* TRENDING TRACKS */}
      <View style={styles.sectionHeaderRow}>
        <Text style={styles.sectionTitle}>
          Trending in {activeCategory}
        </Text>
      </View>

      <View style={{ marginBottom: 60 }}>
        {TRENDING_TRACKS.map((track) => (
          <View key={track.id} style={styles.trackRow}>
            <Image
              source={{ uri: track.cover }}
              style={styles.trackCover}
              contentFit="cover"
            />

            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.trackTitle} numberOfLines={1}>
                {track.title}
              </Text>
              <Text style={styles.trackArtist}>{track.artist}</Text>

              <MiniWaveform />
            </View>

            {/* ✅ PLAY BUTONU ARTIK GERÇEK FONKSİYONU ÇALIŞTIRIYOR */}
            <TouchableOpacity
              style={styles.trackPlayButton}
              onPress={() => {
                playTrack(track);
                navigation.navigate("Player");
              }}
            >
              <Feather name="play" size={18} color="#000" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

// Mini waveform
function MiniWaveform() {
  const bars = [6, 10, 14, 9, 16, 12, 18, 8, 13, 11];

  return (
    <View style={styles.waveContainer}>
      {bars.map((h, idx) => (
        <View key={idx} style={[styles.waveBar, { height: h }]} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050509",
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
    color: "#F5F5F7",
    fontSize: 28,
    fontWeight: "800",
  },

  // HERO
  heroCard: {
    borderRadius: 22,
    overflow: "hidden",
    height: 210,
    marginTop: 4,
    backgroundColor: "#15151F",
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
    color: "#A6B1FF",
    fontSize: 11,
    letterSpacing: 2,
    fontWeight: "600",
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
    marginTop: 6,
  },
  heroSubtitle: {
    color: "#E1E1EC",
    fontSize: 13,
    marginTop: 4,
  },
  heroBottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heroTag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(13, 16, 32, 0.7)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  heroTagText: {
    color: "#A6B1FF",
    fontSize: 11,
    marginLeft: 6,
  },
  heroPlay: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#F5F5F7",
    alignItems: "center",
    justifyContent: "center",
  },

  // CATEGORIES
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    marginRight: 10,
  },
  chipActive: {
    backgroundColor: "#F5F5F7",
    borderColor: "#F5F5F7",
  },
  chipText: {
    color: "#E0E0E6",
    fontSize: 13,
  },
  chipTextActive: {
    color: "#050509",
    fontWeight: "600",
  },

  // ARTISTS
  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: {
    color: "#F5F5F7",
    fontSize: 18,
    fontWeight: "700",
  },
  sectionLink: {
    color: "#9FA4C4",
    fontSize: 13,
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
    color: "#F5F5F7",
    fontSize: 14,
    fontWeight: "600",
  },
  artistTag: {
    color: "#9FA4C4",
    fontSize: 12,
    marginTop: 2,
  },

  // TRACKS
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
    color: "#F5F5F7",
    fontSize: 15,
    fontWeight: "600",
  },
  trackArtist: {
    color: "#9FA4C4",
    fontSize: 12,
    marginTop: 2,
  },
  trackPlayButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#F5F5F7",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },

  // MINI WAVEFORM
  waveContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 6,
  },
  waveBar: {
    width: 3,
    borderRadius: 999,
    marginRight: 2,
    backgroundColor: "rgba(159,164,196,0.9)",
  },
});
