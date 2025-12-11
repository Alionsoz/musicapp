import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function PlaylistCard({ title, cover }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: cover }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginRight: 14,
    width: 140,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: "#222", // yüklenene kadar boş görünmesin
  },
  title: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
});
