import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Constant from 'expo-constants'
import { useNavigation } from '@react-navigation/native'


const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={ styles.root }>
            <View style={ styles.headerView }>
                <AntDesign name='youtube' size={ 38 } color='red' style={ styles.youtubeIcon } />
                <Text style={ styles.youtubeText }>Youtube</Text>
            </View>
            <View style={ styles.otherIcons }>
                <Ionicons name='md-videocam' size={ 38 } color={ tempColor } />
                <Ionicons name='md-search' size={ 38 } color={ tempColor } onPress={() => navigation.navigate('Search')} />
                <MaterialIcons name='account-circle' size={ 38 } color={ tempColor } />
            </View>
        </View>
    );
}

const tempColor = '#212121'

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        elevation: 10,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        marginTop: Constant.statusBarHeight - 5
    },
    headerView: {
        flexDirection: 'row',
        margin: 5
    },
    youtubeText: {
        fontSize: 22,
        margin: 3,
        fontWeight: 'bold'
    },
    youtubeIcon: {
        marginLeft: 20
    },
    otherIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 150,
        margin: 5,
        marginRight: 10
    }
})

export default Header
