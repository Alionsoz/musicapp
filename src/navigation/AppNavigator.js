import React from "react";
import { View } from "react-native";
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
import AboutScreen from "../screens/AboutScreen";

import { useUserStore } from "../store/userStore";
import MiniPlayer from "../components/MiniPlayer";
import { useTheme } from "../theme/useTheme";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

/* Placeholder Screen */
function PlaceholderScreen({ title }) {
  const colors = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Feather name="tool" size={22} color={colors.textSecondary} />
      <View style={{ height: 10 }} />
      <View>
        <Feather name="chevron-right" size={1} color="transparent" />
      </View>
      <View>
        <View>
          <View>
            <View>
              <View>
                <View>
                  <View>
                    <View>
                      <View>
                        <View>
                          <View>
                            <View>
                              <View>
                                <View>
                                  <View>
                                    <View>
                                      <View>
                                        <View>
                                          <View>
                                            <View>
                                              <View>
                                                <View>
                                                  <View>
                                                    <View>
                                                      <View>
                                                        <View>
                                                          <View>
                                                            <View>
                                                              <View>
                                                                <View>
                                                                  <View>
                                                                    <View>
                                                                      <View>
                                                                        <View>
                                                                          <View />
                                                                        </View>
                                                                      </View>
                                                                    </View>
                                                                  </View>
                                                                </View>
                                                              </View>
                                                            </View>
                                                          </View>
                                                        </View>
                                                      </View>
                                                    </View>
                                                  </View>
                                                </View>
                                              </View>
                                            </View>
                                          </View>
                                        </View>
                                      </View>
                                    </View>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View />
      <View>
        <View>
          <View>
            <View>
              <View>
                <View>
                  <View>
                    <View>
                      <View>
                        <View>
                          <View>
                            <View>
                              <View>
                                <View>
                                  <View>
                                    <View>
                                      <View>
                                        <View>
                                          <View>
                                            <View>
                                              <View>
                                                <View>
                                                  <View>
                                                    <View>
                                                      <View>
                                                        <View />
                                                      </View>
                                                    </View>
                                                  </View>
                                                </View>
                                              </View>
                                            </View>
                                          </View>
                                        </View>
                                      </View>
                                    </View>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View>
        <View>
          <View>
            <View>
              <View>
                <View>
                  <View>
                    <View>
                      <View>
                        <Text style={{ color: colors.textPrimary, fontSize: 20 }}>
                          {title}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function MainTabs() {
  const colors = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.background,
            borderTopColor: colors.border,
            height: 60,
          },
          tabBarActiveTintColor: colors.textPrimary,
          tabBarInactiveTintColor: colors.textSecondary,
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
          <Stack.Screen name="About" component={AboutScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
