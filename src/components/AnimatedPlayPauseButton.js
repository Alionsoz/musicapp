// src/components/AnimatedPlayPauseButton.js
import React, { useEffect, useRef } from "react";
import { TouchableOpacity, Animated, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function AnimatedPlayPauseButton({ isPlaying, onPress }) {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.spring(scale, {
        toValue: 1.15,
        useNativeDriver: true,
        speed: 20,
        bounciness: 8,
      }),
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
        speed: 20,
        bounciness: 8,
      }),
    ]).start();
  }, [isPlaying]);

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Animated.View style={[styles.button, { transform: [{ scale }] }]}>
        <Feather
          name={isPlaying ? "pause" : "play"}
          size={26}
          color="#000"
          style={{ marginLeft: isPlaying ? 0 : 2 }} // play ikonunu ortalamak için
        />
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#1DB954",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
});
