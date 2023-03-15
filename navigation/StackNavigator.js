import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import Story from "../screens/Story";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Tab" component={TabNavigator} />
            <Stack.Screen name="Story" component={Story} />
        </Stack.Navigator>
    );
};

export default StackNavigator;