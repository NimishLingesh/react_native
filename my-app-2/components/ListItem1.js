// Plain list of items within the same styplesheet
// REference: FlatList
// https://reactnative.dev/docs/flatlist

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListItem_1 = () => {
    return (
        <View styple={styles.container}>
        <Text style={styles.title}>
            <Text>Line 1 {"\n"}</Text>
            <Text>Line 2 {"\n"}</Text>
            <Text>Line 3</Text>
        </Text>
        </View>
        // <li style={styles.container}>
        //     <ul>Line 1</ul>
        //     <ul>Line 2</ul>
        //     <ul>Line 3</ul>
        // </li>
    );
};

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
        // listStyle: none,
        // margin: 2 rem,
        padding: 0,
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: '#20232a',
        borderRadius: 6,
        backgroundColor: '#61dafb',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
      },

  });

  
export default ListItem_1;