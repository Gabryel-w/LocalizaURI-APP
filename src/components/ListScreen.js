import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


function ListScreen() {



    return (
        <ScrollView>
            <Text style={styles.title}>
                <Ionicons name={'map'} size={30} color={'#fff'} />
                Localiza URI
            </Text>

            

            <View style={styles.container}>
                <Image
                    source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/adm_20.png" }}
                    style={styles.mapMarkImage}
                />

                <Text style = {styles.text}>Predio 20 Adimistração</Text>
            </View>

            <View style={styles.container}>
                <Image
                    source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/cc_5.png" }}
                    style={styles.mapMarkImage}
                />

                <Text style = {styles.text}>Predio 5 Ciencia Da Computação</Text>
            </View>

            <View style={styles.container}>
                <Image
                    source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/clinica_vet_4.png" }}
                    style={styles.mapMarkImage}
                />

                <Text style = {styles.text}>Predio 4 Veterinaria</Text>
            </View>

            <View style={styles.container}>
                <Image
              source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/escola-14.png" }}
                    style={styles.mapMarkImage}
                />

                <Text style = {styles.text}>Predio 14 Escola da URI e Cantina</Text>
            </View>

            <View style={styles.container}>
                <Image
              source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/Direito_18.png" }}
                    style={styles.mapMarkImage}
                />

                <Text style = {styles.text}>Predio 18 Direito</Text>
            </View>

            <View style={styles.container}>
                <Image
              source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/Quiosque_21.png" }}
                    style={styles.mapMarkImage}
                />

                <Text style = {styles.text}>Predio 21 Quiosque da URI</Text>
            </View>

            <View style={styles.container}>
                <Image
              source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/TecnoUri_28.png" }}
                    style={styles.mapMarkImage}
                />

                <Text style = {styles.text}>TecnoURI Predio 28</Text>
            </View>

            <View style={styles.container}>
                <Image
              source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/clinica_psi_farmacia_3.png" }}
                    style={styles.mapMarkImage}
                />

                <Text style = {styles.text}>Clinica de Psicologia e Farmacia Predio 3</Text>
            </View>
            

            <View style={styles.container}>
                <Image
              source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/cantina_uri_2.png" }}
                    style={styles.mapMarkImage}
                />

                <Text style = {styles.text}>Predio 2 Cantina</Text>
            </View>

            <View style={styles.container}>
                <Image
              source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/agronomia_27.png" }}
                    style={styles.mapMarkImage}
                />

                <Text style = {styles.text}>Predio 27 Agronomia</Text>
            </View>


            <View style={styles.container}>
                <Image
              source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/9.png" }}
                    style={styles.mapMarkImage}
                />

                <Text style = {styles.text}>Predio 9 Salas de aula</Text>
            </View>

            <View style={styles.container}>
                <Image
              source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/Ginasio_1_-_19.png" }}
                    style={styles.mapMarkImage}
                />

                <Text style = {styles.text}>Ginasio URI Predio 19</Text>
            </View>

            <View style={styles.container}>
                <Image
              source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/Ginasio2_25.png" }}
                    style={styles.mapMarkImage}
                />

                <Text style = {styles.text}>2- Ginasio Predio 25</Text>
            </View>

            <View style={styles.container}>
                <Image
              source={{ uri: "https://www.imagemhost.com.br/images/2022/11/21/Lab_agronomia_29.png" }}
                    style={styles.mapMarkImage}
                />

                <Text style = {styles.text}>Laboratorio Agronomia Predio 29</Text>
            </View>



        </ScrollView>
    );
}

const styles = StyleSheet.create({
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
    container:
    {
        backgroundColor: '#434543',
        color: '#fff',
        width: 300,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'solid rgb(73, 88, 221)',
        borderTopWidth: 2,
        borderTopColor: 'solid rgb(73, 88, 221)',
        borderLeftWidth: 2,
        borderLeftColor: 'solid rgb(73, 88, 221)',
        borderRightColor: 'solid rgb(73, 88, 221)',
        borderRightWidth: 2,
        marginLeft: 30,
        borderRadius: 5,
        marginTop: 30,


    },
    text: {
        color: '#fff',
        fontSize: 15,
        padding: 3,
        textAlign: 'center',
        
    },
    mapMarkImage:
    {
        width: 100,
        height: 85,
    },
});


export default ListScreen;