import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./navigation/Stack";

export function Navigation() {
  return (
    <NavigationContainer>
      <StackNavigation />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
