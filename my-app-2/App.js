import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

import ListItem0  from './components/ListItem0';
import ListItem1  from './components/ListItem1';
import ListItem2  from './components/ListItem2';
import ListItem3  from './components/ListItem3';
import TextInputButton  from './components/TextInputButton';
import ReactHookForm  from './components/ReactHookForm';
import EventHandler  from './components/EventHandler';
import EventHandler1  from './components/EventHandler1';
import FlexLayout  from './components/FlexLayout';
import Goal  from './components/Goal';


export default function App() {
  const [names, setNames] = useState([
    {key: 'Devin'},
    {key: 'Dan'},
  ]);
  const NewNameHandler = (newName) => {
    // names.push(newName)
    // console.log(names)

    // For the useState to identify that the names has been changed, it is necessary
    // for the usestate to recognize names to be a complete new variable. So, just push in the 
    // previous 2 steps is not sufficient. Hence, we are using concat which would replace the 
    // existing names variable with a updated version of the new allocated variable with the same name
    
    // setNames(names.concat(newName))
    // setNames(() => {
    //   return names.concat(newName)}
    // )
    setNames((names) => {
      return names.concat(newName)}
    )


  };
  return (
    // <SafeAreaView style={styles.container}>
    <>
    <StatusBar style='auto' />
    <ScrollView>
      <View style={styles.container}>
        {/* The next line would align the screen without the side gap. This might be a problem 
        between the scrolling of the inner container and the outer container */}
      {/* <View contentContainerStyle={styles.container}> */}
        < Text></Text>
        < Text></Text>
        <Text>Open up App.js to start working on your app!</Text>
        {/* <ScrollView> */}
          <ListItem0 data={names}></ListItem0>
          <ListItem1></ListItem1>
          <ListItem2></ListItem2>
          <ListItem3></ListItem3>
          <TextInputButton></TextInputButton>
          <ReactHookForm></ReactHookForm>
          {/* Create a new name calling this EventHandler */}
          <EventHandler onAddName={NewNameHandler}></EventHandler>
          {/* Now list the new element added to the list */}
          <EventHandler1 data={names}></EventHandler1>
          <FlexLayout></FlexLayout>
          <Goal></Goal>
        {/* </ScrollView> */}
        
        <StatusBar style="auto" />
      </View>
    </ScrollView>
    {/* </StatusBar> */}
    </>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
