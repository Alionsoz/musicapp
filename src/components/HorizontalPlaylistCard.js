import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

export default function HorizontalPlaylistCard({ title, cover }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: cover }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginRight: 16,
    width: 160,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 20,
  },
  title: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
  },
});
