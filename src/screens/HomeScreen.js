// src/screens/HomeScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

// ✅ THEME
import { useThemeStore } from "../store/themeStore";

export default function HomeScreen() {
  const { colors, isDark } = useThemeStore();

  const iconStrong = isDark ? "#E6E8FF" : colors.primary;
  const iconMuted = isDark ? "#8A8FAE" : colors.textMuted;
  const cardBg = isDark ? "rgba(20,20,28,0.85)" : colors.card;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <View style={styles.headerRow}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>
          Good evening
        </Text>
        <Feather name="bell" size={22} color={iconStrong} />
      </View>

      {/* HERO CARD */}
      <View style={[styles.heroCard, { backgroundColor: cardBg }]}>
        <BlurView
          intensity={isDark ? 40 : 28}
          tint={isDark ? "dark" : "light"}
          style={styles.heroBlur}
        >
          <Text style={[styles.heroTitle, { color: colors.textPrimary }]}>
            Your daily sound
          </Text>
          <Text
            style={[styles.heroSubtitle, { color: colors.textSecondary }]}
          >
            Hand-picked tracks for focus & flow
          </Text>

          <TouchableOpacity
            style={[
              styles.heroButton,
              { backgroundColor: colors.textPrimary },
            ]}
          >
            <Feather
              name="play"
              size={18}
              color={colors.background}
            />
            <Text
              style={[
                styles.heroButtonText,
                { color: colors.background },
              ]}
            >
              Play now
            </Text>
          </TouchableOpacity>
        </BlurView>
      </View>

      {/* QUICK ACTIONS */}
      <View style={styles.quickGrid}>
        <QuickCard
          icon="clock"
          label="Recently played"
          iconColor={iconStrong}
          colors={colors}
          bg={cardBg}
        />
        <QuickCard
          icon="heart"
          label="Liked songs"
          iconColor={iconStrong}
          colors={colors}
          bg={cardBg}
        />
        <QuickCard
          icon="download"
          label="Downloads"
          iconColor={iconStrong}
          colors={colors}
          bg={cardBg}
        />
        <QuickCard
          icon="headphones"
          label="Focus mode"
          iconColor={iconStrong}
          colors={colors}
          bg={cardBg}
        />
      </View>

      {/* SECTION */}
      <SectionHeader title="Recently played" colors={colors} />

      <View style={[styles.listCard, { backgroundColor: cardBg }]}>
        <TrackRow
          title="Blinding Lights"
          artist="The Weeknd"
          colors={colors}
          iconColor={iconMuted}
        />
        <TrackRow
          title="Bad Guy"
          artist="Billie Eilish"
          colors={colors}
          iconColor={iconMuted}
        />
        <TrackRow
          title="Higher Ground"
          artist="ODESZA"
          colors={colors}
          iconColor={iconMuted}
        />
      </View>

      {/* SECTION */}
      <SectionHeader title="Made for you" colors={colors} />

      <View style={styles.mixGrid}>
        <MixCard
          title="Night Drive"
          subtitle="Electronic • Focus"
          colors={colors}
          bg={cardBg}
        />
        <MixCard
          title="Deep Focus"
          subtitle="Minimal • Ambient"
          colors={colors}
          bg={cardBg}
        />
      </View>

      <View style={{ height: 120 }} />
    </ScrollView>
  );
}

/* ---------------- COMPONENTS ---------------- */

function SectionHeader({ title, colors }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
        {title}
      </Text>
      <Text style={{ color: colors.textMuted }}>See all</Text>
    </View>
  );
}

function QuickCard({ icon, label, colors, iconColor, bg }) {
  return (
    <TouchableOpacity style={[styles.quickCard, { backgroundColor: bg }]}>
      <Feather name={icon} size={20} color={iconColor} />
      <Text style={[styles.quickText, { color: colors.textPrimary }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

function TrackRow({ title, artist, colors, iconColor }) {
  return (
    <TouchableOpacity style={styles.trackRow}>
      <View>
        <Text style={[styles.trackTitle, { color: colors.textPrimary }]}>
          {title}
        </Text>
        <Text
          style={[styles.trackArtist, { color: colors.textSecondary }]}
        >
          {artist}
        </Text>
      </View>
      <Feather name="play" size={18} color={iconColor} />
    </TouchableOpacity>
  );
}

function MixCard({ title, subtitle, colors, bg }) {
  return (
    <TouchableOpacity style={[styles.mixCard, { backgroundColor: bg }]}>
      <Text style={[styles.mixTitle, { color: colors.textPrimary }]}>
        {title}
      </Text>
      <Text
        style={[styles.mixSubtitle, { color: colors.textSecondary }]}
      >
        {subtitle}
      </Text>
    </TouchableOpacity>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 18,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
  },

  heroCard: {
    borderRadius: 26,
    overflow: "hidden",
    marginBottom: 22,
  },
  heroBlur: {
    padding: 24,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 6,
  },
  heroSubtitle: {
    fontSize: 14,
    marginBottom: 18,
  },
  heroButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  heroButtonText: {
    marginLeft: 8,
    fontWeight: "700",
  },

  quickGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 26,
  },
  quickCard: {
    width: "48%",
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
  },
  quickText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "600",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
  },

  listCard: {
    borderRadius: 18,
    marginBottom: 26,
  },
  trackRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.06)",
  },
  trackTitle: {
    fontWeight: "600",
  },
  trackArtist: {
    fontSize: 12,
    marginTop: 2,
  },

  mixGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mixCard: {
    width: "48%",
    borderRadius: 18,
    padding: 18,
  },
  mixTitle: {
    fontSize: 16,
    fontWeight: "700",
  },
  mixSubtitle: {
    marginTop: 6,
    fontSize: 12,
  },
});
