import react from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = (props) => {
    return (
        <View>
            <Text>{props?.color}</Text>
        </View>
    )
}

export default ColorBox;

