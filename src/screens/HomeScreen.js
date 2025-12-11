import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useUserStore } from "../store/userStore";

import SectionHeader from "../components/SectionHeader";
import QuickGridItem from "../components/QuickGridItem";
import HorizontalPlaylistCard from "../components/HorizontalPlaylistCard";
import RoutineCard from "../components/RoutineCard";

export default function HomeScreen() {
  const user = useUserStore((state) => state.user);

  const quickItems = [
    { label: "Recently Played", color: "#1DB954" },
    { label: "Workout Mix", color: "#FF7F50" },
    { label: "Chill Vibes", color: "#6A5ACD" },
    { label: "Driving Mode", color: "#20B2AA" },
  ];

  const playlists = [
    {
      id: "1",
      title: "Focus Flow",
      cover:
        "https://i.scdn.co/image/ab67706f0000000281e5e7fa05afd995702d0022",
    },
    {
      id: "2",
      title: "Fresh Beats",
      cover:
        "https://i.scdn.co/image/ab67706f000000026bbd863281c45ffb3917e1e4",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Greeting */}
      <Text style={styles.greeting}>Good Morning, {user?.username}</Text>

      {/* Quick Grid */}
      <View style={styles.grid}>
        {quickItems.map((item, i) => (
          <QuickGridItem key={i} label={item.label} color={item.color} />
        ))}
      </View>

      <SectionHeader title="Made For You" />

      {/* Horizontal Scroll */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {playlists.map((p) => (
          <HorizontalPlaylistCard
            key={p.id}
            title={p.title}
            cover={p.cover}
          />
        ))}
      </ScrollView>

      <SectionHeader title="Your Routine Picks" />

      {/* Routine Logic (fake for now) */}
      <RoutineCard
        title="Morning Energy Mix"
        description="Based on your mornings and weather."
      />
      <RoutineCard
        title="Workout Booster"
        description="You seem active this time of day."
      />
      <RoutineCard
        title="Evening Chill Set"
        description="Relaxing tunes for unwinding."
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F7",
    padding: 18,
    flex: 1,
  },
  greeting: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111",
    marginBottom: 22,
    marginTop: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
