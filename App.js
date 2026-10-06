import React from "react";
import {Text, StyleSheet, FlatList } from "react-native";
import { ArrayColors } from "./src/components/RowData";
import ColorBox from "./src/components/ColorBox";

const App = () => {
  return (
    <FlatList
      style={style.container}
      data={ArrayColors}
      keyExtractor={(item) => item.hex}
      renderItem={({ item }) => <ColorBox hex={item.hex} name={item?.name} />}
      ListHeaderComponent={<Text>List of Headers</Text>}
      
    />
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
});
