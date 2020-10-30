import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Link } from '@react-navigation/native'
import doneImg from '../images/done.png'

export default function Done() {

    return (
        <View style={styles.content}>
            <Image source={doneImg} resizeMode='contain' style={styles.img} />
            <Text style={styles.title}>Ebaaa!</Text>
            <Text style={styles.text}>O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)</Text>
            <Link to='/OrphanagesMap'>
                <View style={styles.button}>
                    <Text style={styles.textButton}>Ok</Text>
                </View>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#39CC83',
    },

    img: {
        height: 300,
    },

    title: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 40,
        lineHeight: 45,
        textAlign: 'center',
        color: '#FFFFFF',

        marginTop: 32,
        marginBottom: 18
    },

    text: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 20,
        lineHeight: 30,
        textAlign: 'center',
        color: '#FFFFFF',

        width: 320,
        marginBottom: 24,
    },

    button: {
        height: 64,
        width: 128,
        backgroundColor: '#19C06D',
        borderRadius: 20,

        justifyContent: 'center',
        alignItems: 'center'
    },

    textButton: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 15,

        color: '#FFF'
    }
})