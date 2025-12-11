// FINAL PlayerScreen.js
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Image } from "expo-image";
import { BlurView } from "expo-blur";
import Slider from "@react-native-community/slider";
import { Feather } from "@expo/vector-icons";

import AnimatedPlayPauseButton from "../components/AnimatedPlayPauseButton";
import Waveform from "../components/Waveform";
import { useMusicStore } from "../store/musicStore";

const { width } = Dimensions.get("window");

export default function PlayerScreen() {
  const { currentTrack, isPlaying, position, togglePlay, setPosition } =
    useMusicStore();

  if (!currentTrack) {
    return (
      <View style={[styles.container, { justifyContent: "center" }]}>
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>
          No track is playing yet.
        </Text>
      </View>
    );
  }

  const progress = currentTrack.duration
    ? position / currentTrack.duration
    : 0;

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 10 === 0 ? 0 : sec % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: currentTrack.cover }}
        style={StyleSheet.absoluteFillObject}
        contentFit="cover"
        blurRadius={45}
      />
      <BlurView intensity={65} tint="dark" style={StyleSheet.absoluteFillObject} />
      <View style={styles.overlay} />

      <View style={styles.content}>
        <View style={styles.topArea}>
          <Feather name="chevron-down" size={22} color="#fff" />
          <Text style={styles.playingFrom}>NOW PLAYING</Text>
          <Feather name="more-horizontal" size={22} color="#fff" />
        </View>

        <View style={styles.coverWrapper}>
          <Image
            source={{ uri: currentTrack.cover }}
            style={styles.cover}
            contentFit="cover"
          />
        </View>

        <View style={styles.textArea}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title} numberOfLines={1}>
              {currentTrack.title}
            </Text>
            <Text style={styles.artist}>{currentTrack.artist}</Text>
          </View>
          <Feather name="heart" size={22} color="#1DB954" />
        </View>

        <View style={styles.progressSection}>
          <Slider
            style={{ width: "100%" }}
            minimumValue={0}
            maximumValue={currentTrack.duration || 1}
            minimumTrackTintColor="#1DB954"
            maximumTrackTintColor="rgba(255,255,255,0.3)"
            thumbTintColor="#1DB954"
            value={position}
            onValueChange={(val) => setPosition(val)}
          />

          <View style={styles.timeRow}>
            <Text style={styles.timeText}>{formatTime(position)}</Text>
            <Text style={styles.timeText}>
              -{formatTime((currentTrack.duration || 0) - position)}
            </Text>
          </View>

          <Waveform progress={progress} />
        </View>

        <View style={styles.controlsRow}>
          <Feather name="shuffle" size={20} color="rgba(255,255,255,0.7)" />
          <Feather name="skip-back" size={28} color="#fff" />
          <AnimatedPlayPauseButton isPlaying={isPlaying} onPress={togglePlay} />
          <Feather name="skip-forward" size={28} color="#fff" />
          <Feather name="repeat" size={20} color="rgba(255,255,255,0.7)" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.55)" },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 32,
    justifyContent: "space-between",
  },
  topArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  coverWrapper: { alignItems: "center", marginTop: 10 },
  cover: {
    width: width - 70,
    height: width - 70,
    borderRadius: 28,
  },

  textArea: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 26,
    marginBottom: 16,
  },

  title: { color: "#fff", fontSize: 24, fontWeight: "700" },
  artist: { color: "#ccc", fontSize: 15, marginTop: 4 },

  progressSection: { marginTop: 8 },

  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  timeText: { color: "#aaa", fontSize: 12 },

  controlsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
  },
});
