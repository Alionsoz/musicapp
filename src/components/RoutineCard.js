import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function RoutineCard({ title, description }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(240,240,240,0.7)",
    borderRadius: 18,
    padding: 18,
    marginBottom: 12,
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111",
  },
  desc: {
    marginTop: 6,
    fontSize: 14,
    color: "#444",
  },
});
