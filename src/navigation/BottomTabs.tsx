import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/MaterialIcons";
import { Home } from "../pages/Home";
import colors from "../styles/colors";
import { Cart } from "../pages/Cart";

const Tab = createBottomTabNavigator();

const BottomTabs = () => (
    <Tab.Navigator screenOptions={{
        tabBarStyle: {
            height: 55,
            borderTopWidth: 0,
            elevation: 0,
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
    }}>
        <Tab.Screen name="HomeScreen" component={Home} options={{ tabBarIcon: ({ color }) => <Icon name="home-filled" color={color} size={28} /> }} />
        <Tab.Screen name="LocalMall" component={Home} options={{ tabBarIcon: ({ color }) => <Icon name="local-mall" color={color} size={28} /> }} />
        <Tab.Screen name="Search" component={Home} options={{ tabBarIcon: () => (
            <View style={styles.buttonSearch}>
                <Icon name="search" color={colors.primary} size={28} />
            </View>
        ) }} />
        <Tab.Screen name="Favorite" component={Home} options={{ tabBarIcon: ({ color }) => <Icon name="favorite" color={color} size={28} /> }} />
        <Tab.Screen name="CartScreen" component={Cart} options={{ tabBarIcon: ({ color }) => <Icon name="shopping-cart" color={color} size={28} /> }} />
    </Tab.Navigator>
);

const styles = StyleSheet.create({
    buttonSearch: {
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderColor: colors.primary,
        borderWidth: 2,
        borderRadius: 30,
        top: -25,
        elevation: 5,
    }
});

export default BottomTabs;