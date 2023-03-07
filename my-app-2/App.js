import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

import ListItem0  from './components/ListItem0';
import ListItem1  from './components/ListItem1';
import ListItem2  from './components/ListItem2';
import ListItem3  from './components/ListItem3';
import TextInputButton  from './components/TextInputButton';
import ReactHookForm  from './components/ReactHookForm';


const names = [
  {key: 'Devin'},
  {key: 'Dan'},
  {key: 'Dominic'},
  {key: 'Jackson'},
  {key: 'James'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'},
]

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={styles.container}>
        {/* The next line would align the screen without the side gap. This might be a problem 
        between the scrolling of the inner container and the outer container */}
      {/* <View contentContainerStyle={styles.container}> */}
        <Text>Open up App.js to start working on your app!</Text>
        {/* <ScrollView> */}
          <ListItem0 data={names}></ListItem0>
          <ListItem1></ListItem1>
          <ListItem2></ListItem2>
          <ListItem3></ListItem3>
          <TextInputButton></TextInputButton>
          <ReactHookForm></ReactHookForm>
        {/* </ScrollView> */}
        
        <StatusBar style="auto" />
      </View>
    </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
