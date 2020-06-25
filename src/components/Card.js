import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'


const Card = ({ videoId, title, channel }) => {
    return (
        <View style={ styles.root }>
            <Image
                source={{ uri: `https://i.ytimg.com/vi/${ videoId }/hqdefault.jpg` }}
                style={styles.image}
            />
            <View style={styles.cardBody}>
                <MaterialIcons name='account-circle' size={ 40 } color='#212121'  />
                <View>
                    <Text
                        style={ styles.titleText }
                        ellipsizeMode='tail'
                        numberOfLines={ 2 }
                    >{ title }</Text>
                    <Text>Chanel Name * 192k Views * 1month ago</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 280
    },
    cardBody: {
        flexDirection: 'row',
        margin: 10
    },
    titleText: {
        fontSize: 18,
        width: Dimensions.get('screen').width - 65,
    }
})

export default Card
