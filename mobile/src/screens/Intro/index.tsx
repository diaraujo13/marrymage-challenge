import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Intro = () => {
    return (
        <View style={styles.container}>
            <Text>Intro</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
});

//make this component available to the app
export default Intro;
