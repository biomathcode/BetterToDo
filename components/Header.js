import React from 'react';
import { Text, View, StyleSheet } from 'react-native';  

const Header = () => (
    <View style={styles.header}>
        <Text style={styles.headerText}>
            Todos
        </Text>
    </View>
)

const styles = StyleSheet.create({
    header: {
        marginTop: 10
    },
    headerText: {
        textAlign: 'center',
        fontSize: 72,
        color: 'rgba(45, 47, 47, 0.25)',
        fontWeight: '100'
    }
})

export default Header