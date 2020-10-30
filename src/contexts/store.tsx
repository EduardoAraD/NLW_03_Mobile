import React, { createContext, useContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getCurrentPositionAsync, requestPermissionsAsync } from 'expo-location'

interface AppContextData {
    visibleOnboarding: boolean;
    setVisibleOnbording(): void;

    loading: boolean;
    position: { latitude: number, longitude: number };
}

const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider: React.FC = ({ children }) => {

    const [visibleOnboarding, setVisibleOnboarding] = useState(true)
    const [position, setPosition] = useState({ latitude: -3.7346577, longitude: -38.65510370 })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadingData() {
            const storageVisibleOnboarding = await AsyncStorage.getItem('@RNHappy:visibleOnboarding');

            if (storageVisibleOnboarding) {
                setVisibleOnboarding(false)
            }

            const { granted } = await requestPermissionsAsync();

            if (granted) {
                const location = await getCurrentPositionAsync();
                const { latitude, longitude } = location.coords

                setPosition({ latitude, longitude });
            }


            setLoading(false)
        }

        loadingData();

    }, [])

    async function setVisibleOnbording() {
        await AsyncStorage.setItem('@RNHappy:visibleOnboarding', 'true')
        setVisibleOnboarding(false);
    }

    return (
        <AppContext.Provider value={{ visibleOnboarding, setVisibleOnbording, loading, position }} >
            { children}
        </AppContext.Provider>
    )
}

export function useApp() {
    const context = useContext(AppContext)

    return context;
}