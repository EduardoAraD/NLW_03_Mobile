import React from 'react'
import { View, StyleSheet, Image, StatusBar} from 'react-native'

import imgLogo from '../images/map-marker.png'

export default function Loading() {
    return (
        <View style={styles.container}>
            <Image source={imgLogo} resizeMode='contain' style={styles.img} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#15C3D6',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: 140,
        width: 120,
    }
})