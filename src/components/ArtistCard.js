import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ArtistCard({ name, photo }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: photo }} style={styles.photo} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginRight: 16,
    alignItems: "center",
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 8,
    backgroundColor: "#222",
  },
  name: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
});
