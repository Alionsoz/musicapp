import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function PlayerControls({ onPlayPause, playing }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "80%",
        marginTop: 30,
      }}
    >
      {/* PREVIOUS */}
      <TouchableOpacity>
        <Feather name="skip-back" size={32} color="white" />
      </TouchableOpacity>

      {/* PLAY / PAUSE */}
      <TouchableOpacity
        onPress={onPlayPause}
        style={{
          backgroundColor: "#1DB954",
          width: 70,
          height: 70,
          borderRadius: 35,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Feather
          name={playing ? "pause" : "play"}
          size={34}
          color="white"
          style={{ marginLeft: playing ? 0 : 4 }}
        />
      </TouchableOpacity>

      {/* NEXT */}
      <TouchableOpacity>
        <Feather name="skip-forward" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
}
