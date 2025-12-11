import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useMusicStore } from "../store/musicStore";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";

import {
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";

export default function MiniPlayer() {
  const navigation = useNavigation();
  const { currentTrack, isPlaying, togglePlay } = useMusicStore();

  const translateY = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateY.value = event.translationY;
    })
    .onEnd((event) => {
      if (event.translationY < -35) {
        runOnJS(navigation.navigate)("Player");
      }
      translateY.value = withTiming(0, { duration: 140 });
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  if (!currentTrack) return null;

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <TouchableOpacity
          style={styles.inner}
          onPress={() => navigation.navigate("Player")}
          activeOpacity={0.85}
        >
          {/* Cover */}
          <Image
            source={{ uri: currentTrack.cover }}
            style={styles.cover}
          />

          {/* Titles */}
          <View style={styles.textBox}>
            <Text style={styles.title} numberOfLines={1}>
              {currentTrack.title}
            </Text>
            <Text style={styles.artist} numberOfLines={1}>
              {currentTrack.artist}
            </Text>
          </View>

          {/* Floating play button */}
          <TouchableOpacity onPress={togglePlay} style={styles.playButton}>
            <Feather
              name={isPlaying ? "pause" : "play"}
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 70,
    left: 15,
    right: 15,

    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 14,

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",

    // GLASS EFFECT
    backdropFilter: "blur(16px)", // iOS destekli
    overflow: "hidden",

    // GLOW
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    elevation: 18,
  },

  inner: {
    flexDirection: "row",
    alignItems: "center",
  },

  cover: {
    width: 46,
    height: 46,
    borderRadius: 10,
  },

  textBox: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  artist: {
    color: "#d0d0d0",
    fontSize: 12,
    marginTop: 2,
  },

  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.18)",
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
});
