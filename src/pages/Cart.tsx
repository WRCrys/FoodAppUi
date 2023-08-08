import React from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import colors from "../styles/colors";
import { StackParamList } from "../types/stackParams";
import type { StackScreenProps } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/MaterialIcons";
import foods from "../consts/foods";
import { IFood } from "../interfaces/IFood";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { Button } from "../components/Button";

type Props = StackScreenProps<StackParamList, 'Cart'>;

interface CartCardProps {
    food: IFood
}

export function Cart({ navigation }: Props) {
    const CartCard = ({ food }: CartCardProps) => (
        <View style={styles.cartCard}>
            <Image source={food.image} style={styles.cardImage} />
            <View style={styles.priceContainer}>
                <Text style={styles.textFoodName} numberOfLines={1}>{food.name}</Text>
                <Text style={{ fontSize: 13, color: colors.grey }}>{food.ingredients}</Text>
                <Text style={styles.textFoodName}>${food.price}</Text>
            </View>
            <View style={styles.quantityContainer}>
                <Text style={styles.textFoodName}>3</Text>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <TouchableOpacity style={styles.buttonLess}>
                        <Icon name="remove" size={25} color={colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonPlus}>
                        <Icon name="add" size={25} color={colors.white} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Icon name="arrow-back-ios" size={28} onPress={() => navigation.goBack()} />
                <Text style={styles.textHeader}>Cart</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 80 }}
                data={foods}
                renderItem={({ item }) => <CartCard food={item} />}
                ListFooterComponent={() => (
                    <View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginVertical: 15,
                                marginHorizontal: 15,
                            }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                Total Price
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>$50</Text>
                        </View>
                        <View style={{ marginHorizontal: 30 }}>
                            <Button title="Checkout" />
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
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
    cartCard: {
        height: 100,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: colors.white,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardImage: {
        height: 80,
        width: 80,
    },
    priceContainer: {
        height: 100,
        marginLeft: 10,
        paddingVertical: 20,
        flex: 1,
    },
    textFoodName: {
        fontWeight: "bold",
        fontSize: 16,
    },
    quantityContainer: {
        height: 100,
        marginLeft: 10,
        paddingVertical: 20,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
    },
    buttonLess: {
        backgroundColor: colors.primary,
        width: 40,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopStartRadius: 30,
        borderBottomStartRadius: 30,
    },
    buttonPlus: {
        backgroundColor: colors.primary,
        width: 40,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopEndRadius: 30,
        borderBottomEndRadius: 30,
    }
});