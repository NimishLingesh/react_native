import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const FlatListBasics = props => {
  return (
    // <View>
    <View style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    <Separator />
    </View>
    // </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });

export default FlatListBasics;