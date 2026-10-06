import React from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";  

const ColorBox = props => {
    const BackgroundStyle  = {
        backgroundColor: props.hex,
    }
    return (
        <View style={[style.box, BackgroundStyle]}>
            <Text style={style.text}>
                {props.name} {props.hex}
            </Text>
        </View>
    )
}

export default ColorBox;

const style = StyleSheet.create({
    box: {
        padding: 10,
        borderRadius: 3,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        
    },
    text: {
        fontWeight: "800",
        color: "white",
        paddingTop: 25,
    }
})