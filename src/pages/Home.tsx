import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View, TextInput, FlatList, Dimensions } from "react-native";
import colors from "../styles/colors";
import person from "../assets/person.png";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import categories from "../consts/categories";
import foods from "../consts/foods";
import { TouchableHighlight } from "react-native";
import { IFood } from "../interfaces/IFood";
import type { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from "../types/stackParams";

const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

interface CardProps {
    food: IFood;
}

type Props = StackScreenProps<StackParamList, 'Home'>;

export function Home({ navigation }: Props) {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

    const ListCategories = () => (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesListContainer}>
            {categories.map((category, index) => (
                <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => setSelectedCategoryIndex(index)}>
                    <View style={
                        {
                            backgroundColor: selectedCategoryIndex === index
                                ? colors.primary
                                : colors.secondary,
                            ...styles.categoryButton
                        }
                    }>
                        <View style={styles.categoryButtonImage}>
                            <Image source={category.image} style={{ height: 35, width: 35, resizeMode: "cover" }} />
                        </View>
                        <Text style={
                            {
                                color: selectedCategoryIndex === index
                                    ? colors.white
                                    : colors.primary,
                                ...styles.categoryText
                            }
                        }>{category.name}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )

    const Card = ({ food }: CardProps) => (
        <TouchableHighlight underlayColor={colors.white} activeOpacity={0.9} onPress={() => navigation.navigate('DetailsScreen', { food: food })}>
            <View style={styles.card}>
                <View style={styles.containerImageCard}>
                    <Image source={food.image} style={styles.imageCard} />
                </View>
                <View style={styles.containerTextCard}>
                    <Text style={styles.textCard} numberOfLines={1}>{food.name}</Text>
                    <Text style={styles.ingredientsTextCard}>{food.ingredients}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.textPrice}>${food.price}</Text>
                    <TouchableOpacity style={styles.addCartButton}>
                        <Icon name="add" size={20} color={colors.white} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableHighlight>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View>
                    <View style={styles.containerWelcome}>
                        <Text style={styles.textWelcome}>Hello,</Text>
                        <Text style={styles.textName}>Crystyano</Text>
                    </View>
                    <Text style={styles.subtitle}>What do you like eat today?</Text>
                </View>
                <Image style={styles.photoPerson} source={person} />
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.inputContainer}>
                    <Icon name="search" size={28} />
                    <TextInput style={styles.input} placeholder="Search for food" />
                </View>
                <View>
                    <TouchableOpacity style={styles.buttonSort}>
                        <Icon name="tune" size={28} color={colors.white} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <ListCategories />
            </View>
            <FlatList showsVerticalScrollIndicator={false} numColumns={2} data={foods} renderItem={({ item }) => <Card food={item} />} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    header: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
    },
    containerWelcome: {
        flexDirection: "row",
    },
    textWelcome: {
        fontSize: 28,
    },
    textName: {
        fontSize: 28,
        fontWeight: "bold",
        marginLeft: 10,
    },
    subtitle: {
        marginTop: 5,
        fontSize: 18,
        color: colors.grey
    },
    photoPerson: {
        height: 55,
        width: 55,
        borderRadius: 25,
        top: 5
    },
    searchContainer: {
        marginTop: 40,
        flexDirection: "row",
        paddingHorizontal: 20,
    },
    inputContainer: {
        flex: 1,
        height: 50,
        borderRadius: 10,
        flexDirection: "row",
        backgroundColor: colors.light,
        alignItems: "center",
        paddingHorizontal: 20
    },
    input: {
        flex: 1,
        fontSize: 18,
    },
    buttonSort: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
    },
    categoriesListContainer: {
        paddingVertical: 30,
        alignItems: "center",
        paddingHorizontal: 20,
    },
    categoryButton: {
        height: 45,
        width: 120,
        marginRight: 7,
        borderRadius: 30,
        alignItems: "center",
        paddingHorizontal: 5,
        flexDirection: "row"
    },
    categoryButtonImage: {
        height: 35,
        width: 35,
        backgroundColor: colors.white,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    categoryText: {
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 10,
    },
    card: {
        height: 229,
        width: cardWidth,
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 50,
        borderRadius: 15,
        elevation: 13,
        backgroundColor: colors.white
    },
    containerImageCard: {
        alignItems: "center",
        top: -40,
    },
    imageCard: {
        height: 120,
        width: 120,
    },
    containerTextCard: {
        marginHorizontal: 20,
    },
    textCard: {
        fontSize: 18,
        fontWeight: "bold",
    },
    ingredientsTextCard: {
        fontSize: 14,
        color: colors.grey,
        marginTop: 2
    },
    priceContainer: {
        marginTop: 10,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textPrice: {
        fontSize: 18,
        fontWeight: "bold",
    },
    addCartButton: {
        height: 40,
        width: 40,
        borderRadius: 30,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
    },
});