import React, { useState } from 'react';
import {Button, FlatList, StyleSheet, Text, TextInput, View, ScrollView} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Separator = () => <View style={styles.separator} />;

const FlexLayout = props => {
    const [enteredText, setEnteredText] = useState('');
    // this is just for the FlatList which uses the object of each of the list items
    const [textForFlatList, setTextForFlatList] = useState('')
    const [textList, setTextList] = useState([]);

    function textInputHandler(textValue) {
        setEnteredText(textValue);
    }

    function addTextHandler() {
        // this is how you concatenate lists
        setTextList((newText) => [...newText, enteredText]);

        // key here is automatically determined by the FlatList
        setTextForFlatList((newText) => [
          ...newText, 
          // {text: enteredText, key: Math.random().toString()},
          // Instead of key, if 'id' is being used then keyExtractor parameter in the FlatList would be utilized
          {text: enteredText, id: Math.random().toString()},
        ]);

        setEnteredText('');
        console.log(textList);
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

        {/* wrapping the text within View is not essential. But to make it adjust to differnt Platform like ios we do that here  */}
        <View>
        
        <ScrollView style={styles.listingContainer} nestedScrollEnabled={true}> 
            {/* need to define key here to uniquely identify the list  */}
            {textList.map((txt) => (
            <View> 
              <Text style={styles.txtLst}key={txt}>{txt}</Text>
            </View>
            ))}
        </ScrollView>

        {/* </ Separator> */}

        <Text>FLATLIST</Text>

        <FlatList data={textForFlatList} renderItem={(itemData) => {
          return (
            <View> 
            <Text style={styles.txtLst}>{itemData.index+1}. {itemData.item.text}</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }} 
        alwaysBounceVertical={false}> 
          
        </FlatList> 
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
    listingContainer: {
        flex: 5
    },
    textInput: {
        // see the ration of the flex here and the button
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
    txtLst: {
      margin: 8,
      padding: 8,
      borderRadius: 6,
      backgroundColor: '#5e0acc',
      color: 'white',
    }
  });

export default FlexLayout;