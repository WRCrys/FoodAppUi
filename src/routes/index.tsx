import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './stack.routes';
import { StatusBar } from "react-native";
import colors from "../styles/colors";

const Routes = () => (
    <NavigationContainer>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <StackRoutes />
    </NavigationContainer>
)

export default Routes;