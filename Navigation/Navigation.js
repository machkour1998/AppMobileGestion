import React, { Component } from "react";
import Login from "../Pages/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigation;
