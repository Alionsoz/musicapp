// src/screens/ProfileScreen.js
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
import { useNavigation } from "@react-navigation/native";

// ✅ THEME
import { useThemeStore } from "../store/themeStore";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const { colors, isDark } = useThemeStore();

  const iconStrong = isDark ? "#E6E8FF" : colors.primary;
  const iconMuted = isDark ? "#8A8FAE" : colors.textMuted;

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <View style={styles.headerRow}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>
          Profile
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Feather
            name="settings"
            size={22}
            color={iconStrong}
          />
        </TouchableOpacity>
      </View>

      {/* PROFILE CARD */}
      <View
        style={[
          styles.profileCard,
          {
            backgroundColor: isDark
              ? "rgba(20,20,28,0.85)"
              : colors.card,
          },
        ]}
      >
        <BlurView
          intensity={isDark ? 35 : 25}
          tint={isDark ? "dark" : "light"}
          style={styles.blur}
        >
          <View
            style={[
              styles.avatar,
              {
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.08)"
                  : colors.surface,
              },
            ]}
          >
            <Text
              style={[
                styles.avatarText,
                { color: colors.textPrimary },
              ]}
            >
              A
            </Text>
          </View>

          <Text
            style={[
              styles.username,
              { color: colors.textPrimary },
            ]}
          >
            @alionsoz
          </Text>
          <Text
            style={[
              styles.subText,
              { color: colors.textSecondary },
            ]}
          >
            Free Plan • Music App
          </Text>
        </BlurView>
      </View>

      {/* ACTIONS */}
      <View
        style={[
          styles.section,
          { backgroundColor: colors.card },
        ]}
      >
        <ProfileItem
          icon="user"
          label="Edit Profile"
          iconColor={iconStrong}
        />
        <ProfileItem
          icon="lock"
          label="Account & Security"
          iconColor={iconStrong}
        />
        <ProfileItem
          icon="bell"
          label="Notifications"
          iconColor={iconStrong}
        />
        <ProfileItem
          icon="moon"
          label="Appearance"
          iconColor={iconStrong}
        />

        <ProfileItem
          icon="settings"
          label="Settings"
          iconColor={iconStrong}
          onPress={() => navigation.navigate("Settings")}
        />
      </View>

      {/* DANGER */}
      <View
        style={[
          styles.section,
          { backgroundColor: colors.card },
        ]}
      >
        <TouchableOpacity style={styles.logout}>
          <Feather
            name="log-out"
            size={18}
            color={colors.danger}
          />
          <Text
            style={[
              styles.logoutText,
              { color: colors.danger },
            ]}
          >
            Log out
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 120 }} />
    </ScrollView>
  );
}

function ProfileItem({ icon, label, onPress, iconColor }) {
  const { colors, isDark } = useThemeStore();

  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.itemLeft}>
        <Feather
          name={icon}
          size={18}
          color={iconColor}
        />
        <Text
          style={[
            styles.itemText,
            { color: colors.textPrimary },
          ]}
        >
          {label}
        </Text>
      </View>
      <Feather
        name="chevron-right"
        size={18}
        color={isDark ? "#8A8FAE" : colors.textMuted}
      />
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

  profileCard: {
    borderRadius: 22,
    overflow: "hidden",
    marginBottom: 26,
  },
  blur: {
    alignItems: "center",
    paddingVertical: 26,
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: "800",
  },
  username: {
    fontSize: 18,
    fontWeight: "700",
  },
  subText: {
    fontSize: 13,
    marginTop: 4,
  },

  section: {
    borderRadius: 18,
    paddingVertical: 6,
    marginBottom: 22,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    fontSize: 15,
    marginLeft: 12,
    fontWeight: "500",
  },

  logout: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  logoutText: {
    fontSize: 15,
    marginLeft: 12,
    fontWeight: "600",
  },
});
