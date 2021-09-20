import React, { Component, FunctionComponent } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { Container } from '~/components';

const StartScreen = () => {
    return (
        <Container style={styles.container}>
            <Text>StartScreen</Text>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});

//make this component available to the app
export default StartScreen;
