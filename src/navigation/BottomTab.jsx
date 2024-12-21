import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import { Settings } from "../screens/Settings";

const BottomTab = createBottomTabNavigator();

export function BottomTabNavigation() {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons size={size} color={color} name="home" />
          ),
        }}
      />
      <BottomTab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons size={size} color={color} name="settings" />
          ),
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons size={size} color={color} name="person" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
