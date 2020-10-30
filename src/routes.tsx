import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useApp } from './contexts/store'

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap'
import OrphanageDetails from './pages/OrphanageDetails'
import SelectMapPosition from './pages/createOrphanage/SelectMapPosition';
import OrphanageData from './pages/createOrphanage/OrphanageData';
import OrphanageVisition from './pages/createOrphanage/OrphanageVisition';
import TouchMap from './pages/createOrphanage/TouchMap'
import Onbording from './pages/Onbording'
import Loading from './pages/Loading'
import Done from './pages/Done'
import Cancel from './pages/Cancel'

import Header from './components/header';

export default function Routes() {
    const { visibleOnboarding, loading } = useApp();

    if(loading) {
        return <Loading />
    }

    if (visibleOnboarding) {
        return (
            <NavigationContainer>
                <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }} >
                    <Screen name="Onboarding" component={Onbording} />
                </Navigator>
            </NavigationContainer>
        )
    } else {
        return (
            <NavigationContainer>
                <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }} >
                    <Screen name="OrphanagesMap" component={OrphanagesMap} />
                    <Screen name="TouchMap" component={TouchMap} />
                    <Screen name="OrphanageDetails"
                        component={OrphanageDetails}
                        options={{
                            headerShown: true,
                            header: () => <Header showCancel={false} title="Orfanato" />
                        }}
                    />
                    <Screen name="SelectMapPosition"
                        component={SelectMapPosition}
                        options={{
                            headerShown: true,
                            header: () => <Header title="Selecione no mapa" />
                        }}
                    />
                    <Screen name="OrphanageData"
                        component={OrphanageData}
                        options={{
                            headerShown: true,
                            header: () => <Header title="Informe os dados" />
                        }}
                    />
                    <Screen name="OrphanageVisition"
                        component={OrphanageVisition}
                        options={{
                            headerShown: true,
                            header: () => <Header title="Informe os dados" />
                        }}
                    />
                    <Screen name="Done" component={Done} />
                    <Screen name="Cancel" component={Cancel} />
                </Navigator>
            </NavigationContainer>
        )
    }
}