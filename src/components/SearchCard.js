import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';


const SearchCard = ({ videoId, title, channel }) => {
    return (
        <View style={ styles.root } >
            <Image
                source={{ uri: `https://i.ytimg.com/vi/${ videoId }/hqdefault.jpg` }}
                style={styles.image}
            />
            <View style={styles.cardBody}>
                <View>
                    <Text
                        style={ styles.titleText }
                        ellipsizeMode='tail'
                        numberOfLines={ 2 }
                    >{ title }</Text>
                    <Text>{ channel }</Text>
                    <Text>1month ago * 192k Views</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        marginBottom: 10,
        flexDirection: 'row'
    },
    image: {
        width: '30%',
        margin: 4,
        marginLeft: 15,
        height: 100
    },
    cardBody: {
        flexDirection: 'row',
        margin: 5
    },
    titleText: {
        fontSize: 18,
        width: Dimensions.get('screen').width - 210,
    }
})

export default SearchCard
