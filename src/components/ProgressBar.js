import React from "react";
import { View } from "react-native";

export default function ProgressBar({ progress = 0.3 }) {
  return (
    <View
      style={{
        height: 4,
        backgroundColor: "#333",
        borderRadius: 5,
        marginTop: 30,
        width: "100%",
      }}
    >
      <View
        style={{
          width: `${progress * 100}%`,
          height: "100%",
          backgroundColor: "#1DB954",
          borderRadius: 5,
        }}
      />
    </View>
  );
}
