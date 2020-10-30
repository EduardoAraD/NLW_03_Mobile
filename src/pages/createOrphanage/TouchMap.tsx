import React from 'react'
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, Image } from 'react-native'
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native'

import handImg from '../../images/hand.png';
import { useApp } from '../../contexts/store'

export default function TouchMap() {
    const navigation = useNavigation();
    const { position } = useApp();

    function handleNavigationToSelectMapPosition() {
        navigation.navigate('SelectMapPosition');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.intro}
                onPress={handleNavigationToSelectMapPosition}>
                <Image source={handImg} style={styles.img} resizeMode='contain' />
                <Text style={styles.textIntro}>Toque o mapa para adicionar um orfanato</Text>
            </TouchableOpacity>
            <MapView
                initialRegion={{
                    latitude: position.latitude,
                    longitude: position.longitude,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }}
                style={styles.mapStyle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },

    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    intro: {
        position: 'absolute',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: 'rgba( 21, 182, 214, 0.6)',
        zIndex: 9,
        paddingHorizontal: 60,
        paddingVertical: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    img: {
        height: 120,
        width: 120,
        margin: 10
    },

    textIntro: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'Nunito_800ExtraBold',
        color: '#FFFFFF',
        textAlign: 'center'
    }
})