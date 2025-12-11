// src/navigation/AppNavigator.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ExploreScreen from "../screens/ExploreScreen";
import PlayerScreen from "../screens/PlayerScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from "../screens/LoginScreen";

import { useUserStore } from "../store/userStore";
import MiniPlayer from "../components/MiniPlayer";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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

      {/* Mini Player burada tek şekilde render olur */}
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
        <Stack.Screen name="Tabs" component={MainTabs} />
      )}
    </Stack.Navigator>
  );
}
