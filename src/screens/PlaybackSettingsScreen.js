import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function PlaybackSettingsScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={26} color="#F5F5F7" />
        </TouchableOpacity>
        <Text style={styles.title}>Playback</Text>
        <View style={{ width: 26 }} />
      </View>

      {/* OPTIONS */}
      <View style={styles.card}>
        <Row label="Audio Quality" value="High" />
        <Row label="Offline Mode" value="Off" />
        <Row label="Normalize Volume" value="On" />
      </View>
    </ScrollView>
  );
}

function Row({ label, value }) {
  return (
    <TouchableOpacity style={styles.row}>
      <Text style={styles.rowText}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050509",
    paddingHorizontal: 18,
    paddingTop: 18,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  title: {
    color: "#F5F5F7",
    fontSize: 20,
    fontWeight: "700",
  },
  card: {
    backgroundColor: "#0E0E11",
    borderRadius: 18,
  },
  row: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },
  rowText: {
    color: "#F5F5F7",
    fontSize: 15,
  },
  rowValue: {
    color: "#9FA4C4",
    fontSize: 14,
  },
});
