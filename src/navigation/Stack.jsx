import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/Login";
import { BottomTabNavigation } from "./BottomTab";

const Stack = createStackNavigator();

export function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="tab" component={BottomTabNavigation} />
    </Stack.Navigator>
  );
}
