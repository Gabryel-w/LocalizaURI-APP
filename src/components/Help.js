import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';



function Help() {
    return (
        <ScrollView>
            <Text style={styles.title}>
                <Ionicons name={'map'} size={30} color={'#fff'} />
                Localiza URI
            </Text>

            <View style={styles.container}>
                <Text style={styles.textTitle}>Mapa:</Text>
                <Image
                    source={{ uri: "https://www.imagemhost.com.br/images/2022/12/03/Mapa1.jpg" }}
                    style={styles.imageSize}
                />
                <Text style={styles.text}>Na aba do mapa você pode ver as principais localizações da universidade. </Text>

                <Image
                    source={{ uri: "https://www.imagemhost.com.br/images/2022/12/03/Mapa2.jpg" }}
                    style={styles.imageSize}
                />
                <Text style={styles.text}> Ao clicar em algum dos prédios você poderá ver uma descrição de qual curso aquele prédio tem aulas entre outras informações. </Text>

                <Text style={styles.textTitle}>Lista:</Text>

                <Image
                    source={{ uri: "https://www.imagemhost.com.br/images/2022/12/03/lista.jpg" }}
                    style={styles.imageSize}
                />
                <Text style={styles.text}>Na aba da Lista você pode ver a qual prédio cada figura está se referindo para assim tornar a localização mais fácil.</Text>


                <Text style={styles.textTitle}>Informações:</Text>

                <Image
                    source={{ uri: "https://www.imagemhost.com.br/images/2022/12/03/info.jpg" }}
                    style={styles.imageSize}
                />

                <Text style={styles.text}>Na aba Info você pode ver as principais informações sobre a Universidade.</Text>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container:
    {
        alignItems: 'center',
        padding: 5,
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
    text:
    {

        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        padding: 20,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderTopWidth: 2,


    },

    textTitle:
    {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'rgb(73, 88, 220)',
        marginTop: 10,
        padding: 20,
    },

    imageSize: {
        width: 200,
        height: 400,

    }

});

export default Help