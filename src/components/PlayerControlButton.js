import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function PlayerControlButton({ icon, size = 32, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 14 }}>
      <Feather name={icon} size={size} color="#fff" />
    </TouchableOpacity>
  );
}
