import react from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = (props) => {
    const backgroundStyle = {
        backgroundColor: props?.color,
    }
    return (
        <View style={[style.box, backgroundStyle]}>
            <Text>{props?.color}</Text>
        </View>
    )
}

export default ColorBox;

const style = StyleSheet.create({
 box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    // backgroundColor: 'red',
  },
});