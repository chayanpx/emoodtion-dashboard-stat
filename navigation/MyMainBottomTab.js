import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import MoodScreen from "../screens/MoodScreen";
import MyDashborad from "./MyDashboardStack.js"
import CareCenterScreen from "../screens/CareCenterScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";

const MainBottomTab = createMaterialBottomTabNavigator();

export default function MyMainBottomTab() {
    return (
        <MainBottomTab.Navigator
            initialRouteName="Mood"
            activeColor="#fff"
            inactiveColor="pink"
            barStyle={{ backgroundColor: "salmon" }}
        >
            <MainBottomTab.Screen
                name="Mood"
                component={MoodScreen}
                options={{
                    tabBarLabel: "Mood",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="emoticon-happy-outline"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <MainBottomTab.Screen
                name="Dashboard"
                component={MyDashborad}
                options={{
                    tabBarLabel: "Dashboard",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="chart-timeline-variant"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <MainBottomTab.Screen
                name="CareCenter"
                component={CareCenterScreen}
                options={{
                    tabBarLabel: "Care Center",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="heart-half-full"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <MainBottomTab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </MainBottomTab.Navigator>
    );
}