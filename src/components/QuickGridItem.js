import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function QuickGridItem({ label, color }) {
  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: color }]}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "47%",
    height: 70,
    borderRadius: 14,
    justifyContent: "center",
    paddingLeft: 12,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
