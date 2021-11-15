import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import MoodScreen from "../screens/MoodScreen";
import DashboardScreen from "../screens/DashboardScreen";
import CareCenterScreen from "../screens/CareCenterScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ViewStatScreen from "../screens/ViewStat";
import { NavigationContainer } from "@react-navigation/native";

// const MainBottomTab = createMaterialBottomTabNavigator();

// function MyMainBottomTab() {
//     return (
//         <MainBottomTab.Navigator
//             initialRouteName="Mood"
//             activeColor="#fff"
//             inactiveColor="pink"
//             barStyle={{ backgroundColor: "salmon" }}
//         >
//             <MainBottomTab.Screen
//                 name="Mood"
//                 component={MoodScreen}
//                 options={{
//                     tabBarLabel: "Mood",
//                     tabBarIcon: ({ color }) => (
//                         <MaterialCommunityIcons
//                             name="emoticon-happy-outline"
//                             color={color}
//                             size={26}
//                         />
//                     ),
//                 }}
//             />
//             <MainBottomTab.Screen
//                 name="Dashboard"
//                 component={DashboardScreen}
//                 options={{
//                     tabBarLabel: "Dashboard",
//                     tabBarIcon: ({ color }) => (
//                         <MaterialCommunityIcons
//                             name="chart-timeline-variant"
//                             color={color}
//                             size={26}
//                         />
//                     ),
//                 }}
//             />
//             <MainBottomTab.Screen
//                 name="CareCenter"
//                 component={CareCenterScreen}
//                 options={{
//                     tabBarLabel: "Care Center",
//                     tabBarIcon: ({ color }) => (
//                         <MaterialCommunityIcons
//                             name="heart-half-full"
//                             color={color}
//                             size={26}
//                         />
//                     ),
//                 }}
//             />
//             <MainBottomTab.Screen
//                 name="Profile"
//                 component={ProfileScreen}
//                 options={{
//                     tabBarLabel: "Profile",
//                     tabBarIcon: ({ color }) => (
//                         <MaterialCommunityIcons name="account" color={color} size={26} />
//                     ),
//                 }}
//             />
//             {/* trial ka */}
//             <MainBottomTab.Screen
//                 name="View Stat"
//                 component={ViewStatScreen}
//                 options={{
//                     tabBarLabel: "View Stat",
//                     tabBarIcon: ({ color }) => (
//                         <MaterialCommunityIcons name="chart-line" color={color} size={26} />
//                     ),
//                 }}
//             />
//         </MainBottomTab.Navigator>
//     );
// }

const ViewStatNavigator = createNativeStackNavigator();

export default function MyViewStatNavigator() {
    return (
        <ViewStatNavigator.Navigator
            initialRouteName="DashboardScreen"
            screenOptions={{
                shadowColor: 'transparent'
            }}
        >
            <ViewStatNavigator.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{
                    headerShown: false
                }}
            />
            <ViewStatNavigator.Screen
                name="ViewStat"
                component={ViewStatScreen}
                options={{
                    title: "Statistics",
                    shadowColor: 'transparent',
                    headerStyle: {
                        backgroundColor: "#f2f2f2",
                        height: 60, 
                        borderBottomWidth: 0,
                    },
                    headerTintColor: "#909090",
                    
                }}
            />
        </ViewStatNavigator.Navigator>
    )
}

// export default function MyNavigator() {
//     return (
//         <NavigationContainer>

//         </NavigationContainer>
//     )
// }