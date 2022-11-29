import * as React from 'react';
import { useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { Image } from 'react-native';
import * as Location from 'expo-location';
import Ionicons from '@expo/vector-icons/Ionicons';




function MapScreen() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  var mapStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#263c3f"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6b9a76"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#38414e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#212a37"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9ca5b3"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#1f2835"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#f3d19c"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2f3948"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#515c6d"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    }
  ]


  return (
    <View>

      
      <Text style={styles.title}>
        <Ionicons name={'map'} size={30} color={'#fff'} />
        Localiza URI
      </Text>

        <Text style={styles.mic}>
          <Ionicons name={'mic'} size={60} color={'#fff'}/>
        </Text>


      <MapView
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        loadingEnabled={true}
        showsUserLocation={true}
        zoomEnabled={true}
        minZoomLevel={18}
        maxZoomLevel={19}
        initialRegion={{
          latitude: -28.277245548910017,
          longitude: -54.27055461782523,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map} >


        <Marker
          coordinate={{
            latitude: -28.277077039917533,
            longitude: -54.27072151044759,
          }}
          title={"Predio 20"}
          description={"Predio 20 Adimistração"}
        >
          <View>
            <Image
              source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/adm_20.png" }}
              style={styles.mapMarkImage}
            />

          </View>
        </Marker>


        <Marker
          coordinate={{
            latitude: -28.278377988646927,
            longitude: -54.27035484546524,
          }}
          title={"Predio 5"}
          description={"Predio De Ciencia da Computação"}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/cc_5.png" }}
              style={styles.mapMarkImage}
            />

          </View>
        </Marker>

        <Marker
          coordinate={{
            latitude: -28.27856598141355,
            longitude: -54.270113671573526,
          }}
          title={"Predio 4"}
          description={"Predio De Veterinaria"}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/clinica_vet_4.png" }}
              style={styles.mapMarkImage}
            />

          </View>
        </Marker>

        <Marker
          coordinate={{
            latitude: -28.277187556084957,
            longitude: -54.271311332976296,
          }}
          title={"Predio 14"}
          description={"Escola da Uri e Cantina"}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/escola-14.png" }}
              style={styles.mapMarkImage}
            />

          </View>
        </Marker>

        <Marker
          coordinate={{
            latitude: -28.276691507555576,
            longitude: -54.271622469205504,
          }}
          title={"Predio 18"}
          description={"Predio de Direito"}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/Direito_18.png" }}
              style={styles.mapMarkImage}
            />

          </View>
        </Marker>

        <Marker
          coordinate={{
            latitude: -28.277844226299006,
            longitude: -54.271579553863546,
          }}
          title={"Predio 21"}
          description={"Quiosque da URI"}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/Quiosque_21.png" }}
              style={styles.mapMarkImage}
            />

          </View>
        </Marker>

        <Marker
          coordinate={{
            latitude: -28.275042720099446,
            longitude: -54.27066760286826,
          }}
          title={"Predio 28"}
          description={"Tecno URI"}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/TecnoUri_28.png" }}
              style={styles.mapMarkImage}
            />

          </View>
        </Marker>

        <Marker
          coordinate={{
            latitude: -28.278538686082875,
            longitude: -54.26979856708731,
          }}
          title={"Predio 3"}
          description={"Clinica Psi e Farmacia"}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/clinica_psi_farmacia_3.png" }}
              style={styles.mapMarkImage}
            />

          </View>
        </Marker>

        <Marker
          coordinate={{
            latitude: -28.27810878295564,
            longitude: -54.26929699405977,
          }}
          title={"Predio 2"}
          description={"Cantina da URI"}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/cantina_uri_2.png" }}
              style={styles.mapMarkImage}
            />

          </View>
        </Marker>

        <Marker
          coordinate={{
            latitude: -28.277387752388474,
            longitude: -54.273244467988846,
          }}
          title={"Predio 27"}
          description={"Predio de Agronomia"}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/agronomia_27.png" }}
              style={styles.mapMarkImage}
            />

          </View>
        </Marker>

        <Marker
          coordinate={{
            latitude: -28.277641911686377,
            longitude: -54.27095906929959,
          }}
          title={"Predio 9"}
          description={"Predio de Salas de Aula"}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/9.png" }}
              style={styles.mapMarkImage}
            />

          </View>
        </Marker>

        <Marker
          coordinate={{
            latitude: -28.276151293097065,
            longitude: -54.272347468508435,
          }}
          title={"Predio 19"}
          description={"Ginasio da URI"}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/Ginasio_1_-_19.png" }}
              style={styles.mapMarkImage}
            />

          </View>
        </Marker>

        <Marker
          coordinate={{
            latitude: -28.276297264731088,
            longitude: -54.272998768117475,
          }}
          title={"Predio 25"}
          description={"2- Ginasio da URI"}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/Ginasio2_25.png" }}
              style={styles.mapMarkImage}
            />

          </View>
        </Marker>

        <Marker
          coordinate={{
            latitude: -28.27793052703036,
            longitude: -54.27310511241317,
          }}
          title={"Predio 29"}
          description={"Laboratorio de Agronomia"}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/Lab_agronomia_29.png" }}
              style={styles.mapMarkImage}
            />

          </View>
        </Marker>



      </MapView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red'
  },
  title:
  {
    fontSize: 30,
    marginTop: 20,
    padding: 10,
    height: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderBottomWidth: 2,
    borderBottomColor: 'solid rgb(73, 88, 221)',
    width: '100%',
    fontWeight: '800',
    textAlign: 'center',
    color: '#fff'
  },
  mic:{
    position: 'absolute',
    marginTop: 600,
    zIndex: 1,

  },
  map: {
    marginTop: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,

    backgroundColor: 'blue'
  },


  mapMarkImage:
  {
    width: 80,
    height: 75,
  },
});


export default MapScreen;