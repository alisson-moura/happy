import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Header from './components/Header';

import OrphanagesMap  from './screens/OrphanagesMap';
import OrphanageDetails from './screens/OrphanageDetails';

import SelectMapPosition from './screens/CreateOrphanage/SelectMapPosition';
import OrphanageData from './screens/CreateOrphanage/OrphanageData';

const {Navigator, Screen} = createStackNavigator();



export default function Routes(){
  return(
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false, cardStyle: {backgroundColor: '#f2f3f5'}}}>
        <Screen name="OrphanagesMap"  component={OrphanagesMap}/>
        <Screen name="OrphanageDetails" options={{headerShown: true, header: () => <Header showCancel={false} title="Orfanato"/>}} component={OrphanageDetails}/>
        <Screen name="SelectMapPosition" options={{headerShown: true, header: () => <Header  title="Selecione no Mapa"/>}} component={SelectMapPosition}/>
        <Screen name="OrphanageData" options={{headerShown: true, header: () => <Header title="Informe os Dados"/>}} component={OrphanageData}/>
      </Navigator>
    </NavigationContainer>
  )
}