import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { useSelector } from "react-redux";

import Header from '../components/Header'
import Card from '../components/Card'


const HomeScreen = () => {
    const { SearchRes } = useSelector(state => {
        return state
    })

    useEffect(() => {

    })

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <FlatList
                data={ SearchRes }
                keyExtractor={item => item.id.videoId }
                renderItem={({item}) => {
                    return(
                        <Card
                            videoId={ item.id.videoId }
                            title={ item.snippet.title }
                            channel={ item.snippet.channelTitle }
                        />
                    )
                }}
            />
        </View>
    );
}

export default HomeScreen
