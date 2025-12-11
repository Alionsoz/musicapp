import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function CategoryTile({ title, color }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: color || "#222",
        padding: 16,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white", fontWeight: "600", fontSize: 16 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
