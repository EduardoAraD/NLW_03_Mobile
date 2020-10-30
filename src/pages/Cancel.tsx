import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Link, useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

export default function Cancel() {
    const navigation = useNavigation();

    function handleToBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.content}>
            <View style={styles.erro}>
                <Feather name='x' size={24} color='#FF669D' />
            </View>
            <Text style={styles.title}>Cancelar cadastro</Text>
            <Text style={styles.text}>Tem certeza que quer cancelar o cadastro?</Text>
            <View style={styles.contentButton}>
                <TouchableOpacity style={styles.buttonNot}
                    onPress={handleToBack}>
                    <Text style={styles.textButton}>Não</Text>
                </TouchableOpacity>
                <Link to='/OrphanagesMap' >
                    <View style={styles.buttonYes}>
                        <Text style={styles.textButton}>Sim</Text>
                    </View>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#FF669D'
    },

    erro: {
        height: 64,
        width: 64,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 16,
    },

    title: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 32,
        textAlign: 'center',

        color: '#FFF',
        margin: 25
    },

    text: {
        fontFamily: 'Nunito_600SemiBold',
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 30,
        width: 250,

        color: '#FFF'
    },

    contentButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 30,
        width: 290
    },

    buttonNot: {
        height: 64,
        width: 128,

        borderRadius: 20,
        borderColor: '#D6487B',
        borderWidth: 2,

        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonYes: {
        height: 64,
        width: 128,

        borderRadius: 20,
        backgroundColor: '#D6487B',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textButton: {
        color: '#FFF',
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 15,
    }
})