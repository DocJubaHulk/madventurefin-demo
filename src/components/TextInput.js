import React from "react";
import { TextInput, StyleSheet } from "react-native";

const CustomTextInput = ({ value, onChangeText, placeholder }) => {
    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={(text) => onChangeText(text)} // Explicit function
            placeholder={placeholder}
            autoCapitalize="none"
        />
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 5,
        width: "100%",
    },
});

export default CustomTextInput;


