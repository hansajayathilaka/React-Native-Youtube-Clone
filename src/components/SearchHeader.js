import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import Constant from 'expo-constants'
import { useNavigation } from '@react-navigation/native'


const SearchHeader = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const { SearchRes, SearchVal } = useSelector(state => {
        return state
    })

    const fetchData = (q) => {
        const itemCount = 40
        let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${ itemCount }&q=${ q }&key=AIzaSyDYU7Az83oKmld_H03SBIk80ewm4eK326k`
        dispatch({ type: 'SET_LOADING', payload: true })
        fetch(url)
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'SET_SEARCHRES', payload: data.items })
                dispatch({ type: 'SET_LOADING', payload: false })
                console.log(data)
            })
    }

    return(
        <View style={ styles.root }>
            <Ionicons name='md-arrow-back' size={ 32 } onPress={() => navigation.goBack()} />
            <TextInput onChangeText={text => dispatch({ type: 'SET_SEARCHVAL', payload: text })} style={ styles.textInput } value={ SearchVal } />
            <Ionicons name="md-send" size={32} color="black" onPress={() => fetchData(SearchVal)} />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 10,
        margin: 0,
        justifyContent: 'space-between',
        elevation: 4,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        backgroundColor: 'white',
        marginTop: Constant.statusBarHeight
    },
    textInput: {
        width: '85%',
        backgroundColor: '#e6e6e6'
    }
})

export default SearchHeader
