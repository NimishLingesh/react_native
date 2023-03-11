import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button, View, Text, Alert} from 'react-native';
import App from './ReactHookForm';

const Separator = () => <View style={styles.separator} />;

const TextInputExample = props => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

//   This is a function within a function
  const btnEventHandler = btn_props => {

    const newName = [
        {key: "nimish"},
        {key: text},
        {key: number}
    ];

    // reset the values after button press
    onChangeText('');
    onChangeNumber('');
    // Next line stops the server calling the backend. We have not implemented backend as of now
    // calling preventDefault() would make this handle in frontend itself
    // btn_props.preventDefault()
    // console.log(btn_props.text)
    // console.log(newName)
    // Alert.alert({props.names})

    // IMPORTANT LINE
    // props is like a placeholder for the argument. Here the calling function has onAddName as the props,
    // which inturn is the pointer to the function NewNameHandler in App.js 
    props.onAddName(newName);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Form> */}
        <Text>
          Input name
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Text>
          SID
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <View>
        <Text style={styles.title}>
          This layout strategy lets the title define the width of the button.
        </Text>
        <View style={styles.fixToText}>
          <Button
            title="Clear"
            onPress={() => Alert.alert('Try to clear the text')}
          />
          <Button
            title="Submit"
            // onPress={() => Alert.alert('Form submitted!')}
            // calling btnEventHandler as a pointer. NOTE: I didnt call fuunction i.e btnEventHandler()
            onPress={btnEventHandler}
            // onPress={btnEventHandler(text, number)}
          />
        </View>
        </View>
        <Separator />
      {/* </Form> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default TextInputExample;