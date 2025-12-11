import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function SongRow({ title, artist, cover }) {
  return (
    <View style={styles.row}>
      <Image source={{ uri: cover }} style={styles.cover} />

      <View style={{ marginLeft: 12 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.artist}>{artist}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  cover: {
    width: 60,
    height: 60,
    borderRadius: 6,
    backgroundColor: "#222",
  },
  title: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  artist: {
    color: "#aaa",
    fontSize: 13,
    marginTop: 4,
  },
});
