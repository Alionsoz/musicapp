// src/components/Waveform.js
import React from "react";
import { View, StyleSheet } from "react-native";

const BARS = [
  8, 14, 18, 10, 20, 26, 16, 22, 12, 30,
  24, 18, 28, 14, 26, 20, 32, 16, 22, 10,
  18, 24, 14, 28, 12, 26, 20, 16, 30, 18,
];

export default function Waveform({ progress = 0 }) {
  const activeCount = Math.round(BARS.length * progress);

  return (
    <View style={styles.container}>
      {BARS.map((h, index) => {
        const active = index < activeCount;
        return (
          <View
            key={index}
            style={[
              styles.bar,
              {
                height: h,
                backgroundColor: active ? "#1DB954" : "#555",
                opacity: active ? 1 : 0.4,
              },
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 12,
  },
  bar: {
    width: 3,
    borderRadius: 999,
    marginHorizontal: 1,
  },
});
