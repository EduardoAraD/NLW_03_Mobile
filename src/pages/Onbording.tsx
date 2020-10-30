import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { Feather } from '@expo/vector-icons';

import { useApp } from '../contexts/store'

import landing1 from '../images/landing1.png';
import landing2 from '../images/landing2.png';

const DoneNext = ({ ...props }) => (
    <TouchableOpacity style={styles.button} {...props} >
        <Feather name="arrow-right" size={24} color="#15B6D6" />
    </TouchableOpacity>
)

const Dots = ({ ...props }) => {
    const backgroundColor = props.selected ? '#FFD152' : '#BECFD8'
    const width = props.selected ? 16 : 8

    return (
        <View
            style={{
                width,
                height: 4,
                marginHorizontal: 5,
                backgroundColor,
                borderRadius: 4,
            }}
        />
    )
}

export default function Onbording() {
    const { setVisibleOnbording } = useApp();

    return (
        <Onboarding
            showSkip={false}
            onDone={setVisibleOnbording}
            bottomBarColor="#FFF"
            imageContainerStyles={{ paddingBottom: 10 }}
            DoneButtonComponent={DoneNext}
            NextButtonComponent={DoneNext}
            DotComponent={Dots}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={landing1} style={styles.imageLanding1} resizeMode="contain" />,
                    title: 'Leve felicidade para o mundo',
                    subtitle: 'Visite orfanatos e mude o dia de muitas crianças.',

                    titleStyles: styles.titleLanding1,
                    subTitleStyles: styles.subTitleLanding1
                }, {
                    backgroundColor: '#fff',
                    image: <Image source={landing2} style={styles.imageLanding2} resizeMode="contain" />,
                    title: 'Escolha um orfanato no mapa e faça uma visita',
                    subtitle: '',

                    titleStyles: styles.titleLanding2,
                }
            ]}
        />
    )
}

const styles = StyleSheet.create({
    imageLanding1: {
        height: 260,
    },
    imageLanding2: {
        height: 380
    },
    titleLanding1: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 46,
        lineHeight: 48,
        color: '#0089A5',
        textAlign: "left",
        marginRight: 40,
        paddingLeft: 20
    },
    titleLanding2: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 30,
        lineHeight: 36,
        color: '#0089A5',
        textAlign: 'right',
        marginRight: 20,
        paddingLeft: 40
    },
    subTitleLanding1: {
        fontFamily: 'Nunito_600SemiBold',
        textAlign: 'left',
        fontSize: 20,
        color: '#5C8599',
        marginRight: 60,
        paddingLeft: 20
    },
    button: {
        backgroundColor: '#D1EDF2',
        height: 56,
        width: 56,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})