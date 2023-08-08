import React from "react";
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, View } from 'react-native';
import colors from "../styles/colors";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    styleButton?: Object;
    styleText?: Object;
}

export function Button({ title, styleButton, styleText, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            {...rest}
        >
            <View style={styleButton !== undefined ? styleButton : styles.container}>
                <Text style={styleText !== undefined ? styleText : styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 50,
    },
    title: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 18,
    }
});