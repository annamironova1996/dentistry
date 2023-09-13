import styled from "styled-components/native";
import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PatientScreen from "./screens/PatientScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Клиенты", headerTitleStyle: "fontWeight: 800", headerTintColor: '#2A66FF' }}
        />

        <Stack.Screen
          name="PatientScreen"
          component={PatientScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


