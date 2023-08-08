import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Board } from "../pages/Board";
import { Details } from "../pages/Details";
import BottomTabs from "../navigation/BottomTabs";
import { StackParamList } from "../types/stackParams";

const stackRoutes = createStackNavigator<StackParamList>();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        screenOptions={
            {
                headerShown: false
            }
        }>
        <stackRoutes.Screen name="BoardScreen" component={Board} />
        <stackRoutes.Screen name="Home" component={BottomTabs} />
        <stackRoutes.Screen name="DetailsScreen" component={Details} />
    </stackRoutes.Navigator>
);

export default AppRoutes;