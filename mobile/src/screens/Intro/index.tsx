import React, { Component } from 'react';
import {  StyleSheet } from 'react-native';
import { View, Button, Text, Heading, Pressable, Image } from 'native-base';
import { Container } from '~/components';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

const Intro = () => {

    const navigation = useNavigation();

    return (
        <Container >
            <View flex="2">
                <View flex="2">
                    <Image alignSelf="center" source={require('~/assets/images/icon.png')} />
                    <Heading textAlign="center"  >Capture momentos durante a cerimônia e compartilhe com o casal</Heading>
                </View>
                <View alignItems="center">
                    <Button onPress={() => navigation.navigate('Home')} startIcon={<Ionicons name="person" size={28} color='white'/>}>Entrar como convidado</Button>
                </View>
            </View>
            <View flex="1" justifyContent="flex-end" alignItems="center">
                <Pressable onPress={ () => alert('ok')}>
                    <Text>Área restrita</Text>
                </Pressable>
            </View>
        </Container>
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
