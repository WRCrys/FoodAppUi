import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import colors from "../styles/colors";
import onBoardImage from "../assets/onboardImage.png"
import { Button } from "../components/Button";
import { useNavigation } from '@react-navigation/core';

export function Board() {

    const navigation = useNavigation();
    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewImage}>
                <Image style={styles.image} source={onBoardImage} />
            </View>
            <View style={styles.textContainer}>
                <View>
                    <Text style={styles.title}>Delicious Food</Text>
                    <Text style={styles.subTitle}>We help you to find best and delicious food</Text>
                </View>
            </View>
            <View style={styles.indicatorContainer}>
                <View style={styles.currentIndicator}></View>
                <View style={styles.indicator}></View>
                <View style={styles.indicator}></View>
            </View>
            <Button title="Get Started" onPress={() => navigation.navigate('Home' as never)} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    viewImage: {
        height: 400
    },
    image: {
        width: '100%',
        resizeMode: "contain",
        top: -150,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
    },
    subTitle: {
        marginTop: 20,
        fontSize: 18,
        textAlign: "center",
        color: colors.grey
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 50,
        justifyContent: "space-between",
        paddingBottom: 40,
    },
    indicatorContainer: {
        height: 50,
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    currentIndicator: {
        height: 12,
        width: 30,
        borderRadius: 10,
        backgroundColor: colors.primary,
        marginHorizontal: 5,
    },
    indicator: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: colors.grey,
        marginHorizontal: 5,
    },
});