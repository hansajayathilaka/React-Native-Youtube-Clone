import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Constant from 'expo-constants'


const VideoPlayerScreen = () => {
    return (
        <View style={ styles.root }>
            <Text>Hello VideoPlayer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        marginTop: Constant.statusBarHeight
    }
})

export default VideoPlayerScreen
