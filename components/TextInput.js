import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';


const Input = ({inputValue, inputChange}) => (
    <View style={styles.container}>
        <TextInput
         value={inputValue}
         style={styles.input}
         placeholder='What need to do done?'
         placeholderTextColor="#CACACA"
         selectionColor="#666666"
         onChangeText={inputChange}
         />
    </View>
)
const styles = StyleSheet.create({
    container: {
    marginLeft: 10,
    marginRight: 10,
    shadowOpacity: 0.2,
    width: 300,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 }
    },
    input: {
    height: 60,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10
    }
})

export default Input;