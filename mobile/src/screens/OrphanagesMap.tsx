import React from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

import mapMarker from '../images/marker.png';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

export default function OrphanagesMap() {
  const navigation = useNavigation();
  function handleNavigateToDetails(){
    navigation.navigate('OrphanageDetails');
  }
 function handleNavigateToCreateOrphanage(){
   navigation.navigate('SelectMapPosition');
 }
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -20.8604498,
          longitude: -49.355163,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}>
        <Marker
          icon={mapMarker}
          coordinate={{
            latitude: -20.8604498,
            longitude: -49.355163,
          }}
          calloutAnchor={{
            x: 2.7,
            y: 0.8
          }}
        >
          <Callout tooltip={true} onPress={handleNavigateToDetails}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar das meninas</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>2 orfanatos encontrados</Text>
        <RectButton style={styles.createOrphanageButton} onPress={handleNavigateToCreateOrphanage}>
          <Feather name="plus" size={20} color="#FFF" />
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },
  calloutText: {
    fontFamily: 'Nunito_700Bold',
    color: '#0089a5',
    fontSize: 14
  },
  footer: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 28,
    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },
  footerText: {
    fontFamily: 'Nunito_700Bold',
    color: '#8fa7b3'
  },
  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
