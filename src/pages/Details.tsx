import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import colors from "../styles/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import type { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from "../types/stackParams";
import { Button } from "../components/Button";

type Props = StackScreenProps<StackParamList, 'DetailsScreen'>;

export function Details({ navigation, route }: Props) {

    const food = route.params.food;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Icon name="arrow-back-ios" size={28} onPress={() => navigation.goBack()} />
                <Text style={styles.textHeader}>Details</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.containerImage}>
                    <Image source={food.image} style={styles.image} />
                </View>
                <View style={styles.containerDetails}>
                    <View style={styles.details}>
                        <Text style={styles.title}>{food.name}</Text>
                        <View style={styles.iconContainer}>
                            <Icon name="favorite-border" size={25} color={colors.primary} />
                        </View>
                    </View>
                    <Text style={styles.detailsText}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries.
                    </Text>
                    <View style={styles.containerButton}>
                        <Button title="Add to Cart" styleButton={styles.button} styleText={styles.textButton}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    textHeader: {
        fontSize: 20,
        fontWeight: "bold",
    },
    containerImage: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 280
    },
    image: {
        height: 220,
        width: 220,
    },
    containerDetails: {
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 60,
        backgroundColor: colors.primary,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    details: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 25,
        color: colors.white,
        fontWeight: "bold",
    },
    iconContainer: {
        height: 50,
        width: 50,
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30
    },
    detailsText: {
        marginTop: 10,
        lineHeight: 22,
        fontSize: 16,
        color: colors.white,
    },
    containerButton: {
        marginTop: 40,
        marginBottom: 40,
    },
    button: {
        backgroundColor: colors.white,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 18,
    }
});