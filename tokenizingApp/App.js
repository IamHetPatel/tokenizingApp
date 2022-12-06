import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import welcome from "./components/Welcome";
import Signup from "./components/signup";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Listing from "./components/Listing";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome !">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="Welcome"
          component={welcome}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />
        {/* Auth Navigator: Include Login and Signup */}

        <Stack.Screen
          name="signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="login"
          component={Login}
          // Hiding header for Navigation Drawer
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Listing"
          component={Listing}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

{
  /* 
function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#3740FE",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
       <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ title: "Signup" }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login" }}
      /> 
      <Stack.Screen
        name="Welcome"
        component={welcome}
        options={{ title: "Welcome" }}
      />
    </Stack.Navigator>
  );
    }
*/
}
