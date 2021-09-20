import { useNavigation, useRoute } from '@react-navigation/core';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
    
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Home;
