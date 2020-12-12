import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import TodoButton from './TodoButton';

const Todo = ({todo, toggleComplete, deleteTodo}) => (
    <View style={styles.todoContainer}>
        <Text style={[styles.todoText, todo.complete? styles.todoComplete: null]}>
            {todo.title}
        </Text>
        <View style={styles.butttonContainer}>
            <TodoButton
             name="Done" 
             complete={todo.complete} 
             onPress={() => toggleComplete(todo.todoIndex)}/>
            <TodoButton 
            name="Delete" 
            onPress={() => deleteTodo(todo.todoIndex)}/>
        </View>
    </View>
);

const styles = StyleSheet.create({
    todoContainer: {
        marginLeft: 10,
        marginRight: 0,
        width: 300,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#ededed',
        paddingLeft: 14,
        paddingTop: 7,
        paddingBottom: 7,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        flexDirection: 'row',
        alignItems: 'center'
    },
    todoText: {
        fontSize: 17
    },
    butttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    todoComplete: {
        textDecorationLine: 'line-through',
        opacity: 0.2,
    }
})

export default Todo;