import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ExploreScreen from "../screens/ExploreScreen";
import PlayerScreen from "../screens/PlayerScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from "../screens/LoginScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ThemeScreen from "../screens/ThemeScreen";
import AboutScreen from "../screens/AboutScreen"; // ✅ EKLENDİ

import { useUserStore } from "../store/userStore";
import MiniPlayer from "../components/MiniPlayer";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

/* 🔹 Placeholder Screen (Sadece henüz yapılmayanlar için) */
function PlaceholderScreen({ title }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#050509",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "#fff", fontSize: 20 }}>{title}</Text>
    </View>
  );
}

function MainTabs() {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#050509",
            borderTopColor: "#15151F",
            height: 60,
          },
          tabBarActiveTintColor: "#F5F5F7",
          tabBarInactiveTintColor: "#777C96",
          tabBarLabelStyle: {
            fontSize: 11,
            marginBottom: 4,
          },
          tabBarIcon: ({ color }) => {
            const icons = {
              Home: "home",
              Explore: "compass",
              Player: "headphones",
              Profile: "user",
            };
            return <Feather name={icons[route.name]} size={20} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Player" component={PlayerScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>

      <MiniPlayer />
    </View>
  );
}

export default function AppNavigator() {
  const user = useUserStore((state) => state.user);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <Stack.Screen name="Login" component={LoginScreen} />
      ) : (
        <>
          <Stack.Screen name="Tabs" component={MainTabs} />
          <Stack.Screen name="Settings" component={SettingsScreen} />

          {/* Settings Sub Screens */}
          <Stack.Screen
            name="AudioQuality"
            children={() => <PlaceholderScreen title="Audio Quality" />}
          />
          <Stack.Screen
            name="OfflineMode"
            children={() => <PlaceholderScreen title="Offline Mode" />}
          />

          <Stack.Screen name="Theme" component={ThemeScreen} />

          <Stack.Screen
            name="Language"
            children={() => <PlaceholderScreen title="Language" />}
          />
          <Stack.Screen
            name="Privacy"
            children={() => <PlaceholderScreen title="Privacy" />}
          />

          {/* ✅ GERÇEK ABOUT */}
          <Stack.Screen name="About" component={AboutScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
