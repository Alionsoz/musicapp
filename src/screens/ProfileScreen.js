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
import { useNavigation } from "@react-navigation/native"; // ✅ EKLENDİ

export default function ProfileScreen() {
  const navigation = useNavigation(); // ✅ EKLENDİ

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>Profile</Text>

        {/* ⚙️ SETTINGS ICON → SETTINGS SCREEN */}
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Feather name="settings" size={22} color="#F5F5F7" />
        </TouchableOpacity>
      </View>

      {/* PROFILE CARD */}
      <View style={styles.profileCard}>
        <BlurView intensity={30} tint="dark" style={styles.blur}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>A</Text>
          </View>

          <Text style={styles.username}>@alionsoz</Text>
          <Text style={styles.subText}>Free Plan • Music App</Text>
        </BlurView>
      </View>

      {/* ACTIONS */}
      <View style={styles.section}>
        <ProfileItem icon="user" label="Edit Profile" />
        <ProfileItem icon="lock" label="Account & Security" />
        <ProfileItem icon="bell" label="Notifications" />
        <ProfileItem icon="moon" label="Appearance" />

        {/* ✅ SETTINGS ROW EKLENDİ */}
        <ProfileItem
          icon="settings"
          label="Settings"
          onPress={() => navigation.navigate("Settings")}
        />
      </View>

      {/* DANGER */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.logout}>
          <Feather name="log-out" size={18} color="#FF6B6B" />
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 120 }} />
    </ScrollView>
  );
}

function ProfileItem({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.itemLeft}>
        <Feather name={icon} size={18} color="#A6B1FF" />
        <Text style={styles.itemText}>{label}</Text>
      </View>
      <Feather name="chevron-right" size={18} color="#777C96" />
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
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  title: {
    color: "#F5F5F7",
    fontSize: 28,
    fontWeight: "800",
  },

  profileCard: {
    borderRadius: 22,
    overflow: "hidden",
    marginBottom: 26,
    backgroundColor: "#15151F",
  },
  blur: {
    alignItems: "center",
    paddingVertical: 26,
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: "#1F2333",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  avatarText: {
    color: "#F5F5F7",
    fontSize: 32,
    fontWeight: "800",
  },
  username: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
  subText: {
    color: "#9FA4C4",
    fontSize: 13,
    marginTop: 4,
  },

  section: {
    backgroundColor: "#0E0E11",
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
    color: "#F5F5F7",
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
    color: "#FF6B6B",
    fontSize: 15,
    marginLeft: 12,
    fontWeight: "600",
  },
});
