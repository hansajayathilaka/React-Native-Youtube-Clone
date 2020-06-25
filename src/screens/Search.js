import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import SearchHeader from '../components/SearchHeader'
import SearchCard from '../components/SearchCard'


const SearchScreen = () => {
    const dispatch = useDispatch()
    const { SearchVal, SearchRes, Loading } = useSelector(state => {
        return state
    })

    return (
        <View style={ styles.root }>
            <SearchHeader />
            { Loading ?
                <ActivityIndicator style={styles.loading} size="large" color='red'/>
            :
                <FlatList
                    data={ SearchRes }
                    keyExtractor={item => item.id.videoId }
                    renderItem={({item}) => {
                        return(
                            <SearchCard
                                videoId={ item.id.videoId }
                                title={ item.snippet.title }
                                channel={ item.snippet.channelTitle }
                            />
                        )
                    }}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    loading: {
        marginTop: 20
    }
})

export default SearchScreen
