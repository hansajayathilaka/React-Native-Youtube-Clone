import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import Header from '../components/Header'


const ExploreScreen = () => {
    return (
        <View style={ styles.root }>
            <Header />
            <Text>Hello Explore</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
})

export default ExploreScreen
