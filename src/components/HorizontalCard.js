import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function HorizontalCard({ title, image }) {
  return (
    <TouchableOpacity
      style={{
        marginRight: 14,
        width: 140,
      }}
    >
      <Image
        source={{ uri: image }}
        style={{
          width: "100%",
          height: 140,
          borderRadius: 12,
        }}
      />

      <Text
        style={{
          color: "white",
          marginTop: 6,
          fontWeight: "600",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
