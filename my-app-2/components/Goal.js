import React, { useState } from 'react';
import {Button, FlatList, StyleSheet, Text, TextInput, View, ScrollView} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import GoalInput from './GoalInput';
import GoalItem from './GoalItem';

const Separator = () => <View style={styles.separator} />;

const Goal = props => {
    
    // this is just for the FlatList which uses the object of each of the list items
    // const [textForFlatList, setTextForFlatList] = useState('')
    const [courseGoals, setCourseGoals] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function deleteGoalHandler(id) {
        setCourseGoals(currentCourseGoals => {
            // filter those elements where the condition is true 
            return currentCourseGoals.filter((goal) => goal.id != id);
        });
    }
    
    function addGoalHandler(enteredGoalText) {
        setCourseGoals((currentCourseGoals) => [
          ...currentCourseGoals, 
          {text: enteredGoalText, id: Math.random().toString()},
        ]);

        console.log(courseGoals);
        setModalIsVisible(false)
        // console.log(enteredText)
    }

    function startAddGoalHandler() {
        setModalIsVisible(true)
    }

    function closeAddGoalHandler(){
        setModalIsVisible(false)
    }

  return (
    <View style={styles.appContainer}>
        <View style={{paddingBottom: 10}}>
        <Text>Components interaction between the parent and the Child</Text>
        </View>

            <Button title='Add new Goal' color="#5e0acc" 
                onPress={startAddGoalHandler}/> 
            {modalIsVisible && <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} closeAddGoal={closeAddGoalHandler}></GoalInput>}

        {/* wrapping the text within View is not essential. But to make it adjust to differnt Platform like ios we do that here  */}
        <View>
        
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>;
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }} 
        alwaysBounceVertical={false}> 
          
        </FlatList> 

        {/* </ Separator> */}
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
    listingContainer: {
        flex: 5
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

export default Goal;