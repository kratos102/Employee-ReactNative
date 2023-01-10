import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditScreen from "./app/screen/EditScreen";
import HomeScreen from "./app/screen/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Employees" }}
        />

        <Stack.Screen
          name="Edit"
          component={EditScreen}
          options={{ title: "Fill required fields" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
