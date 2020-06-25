import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header'


const SubscribeScreen = () => {
    return (
        <View style={ styles.root }>
            <Header />
            <Text>Hello Subscribe</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
})

export default SubscribeScreen
