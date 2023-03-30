import React, { useState } from 'react';
import {Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const FlexLayout = props => {
    const [enteredText, setEnteredText] = useState('');
    const [textList, setTextList] = useState([]);

    function textInputHandler(textValue) {
        setEnteredText(textValue);
    }

    function addTextHandler() {
        console.log(textList);
        setTextList((newText) => [...newText, enteredText]);
        setEnteredText('');
        // console.log(enteredText)
    }

  return (
    <View style={styles.appContainer}>
        <View style={{paddingBottom: 10}}>
        <Text>Experimenting with layout</Text>
        </View>

        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} onChangeText={textInputHandler}></TextInput>
            <Button title='Add' style={{flex: 1}} onPress={addTextHandler}></Button>
        </View>

        <View>
            {/* need to define key here to uniquely identify the list  */}
            {textList.map((txt) => <Text key={txt}>{txt}</Text>)}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    appContainer: {
        width: '90%',
        paddingTop: 50,
        paddingBottom: 25,
        
    },
    inputContainer: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'stretch'
    },
    textInput: {
        flex: 3,
        margin: 1,
        borderWidth: 2,
        padding: 1,
        width: '70%',
        marginRight: 8
      },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

export default FlexLayout;