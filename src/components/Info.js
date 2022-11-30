import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image, ScrollView, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


function Info() {
    return (
        <ScrollView>
            <View style={styles.container}>
            <Text style={styles.title}>
                <Ionicons name={'map'} size={30} color={'#fff'} />
                Localiza URI
            </Text>
            <Text style={styles.textTitle}>Endereço da Universidade</Text>
            <Text style={styles.text}>Av. Universidade das Missões, 464 - Universitário, Santo Ângelo - RS, 98802-470</Text>
            <Text style={styles.textTitle}>Horários de Atendimento</Text>
            <Text style={styles.text}> Segunda-feira 13:30–17:30, 18:30–22:00 </Text>
            <Text style={styles.text}>Terça-feira 13:30–17:30, 18:30–22:00</Text>
            <Text style={styles.text}>Quarta-feira 13:30–17:30, 18:30–22:00</Text>
            <Text style={styles.text}>Quinta-feira 13:30–17:30, 18:30–22:00</Text>
            <Text style={styles.text}>Sexta-feira 13:30–17:30, 18:30–22:00</Text>
            <Text style={styles.text}>Sábado - Fechado</Text>
            <Text style={styles.text}>Domingo - Fechado</Text>

            <Text style={styles.textTitle}>Telefone</Text>
            <Text style={styles.text}> 55-3313-7900</Text>

            </View>




            
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    
    container:
    {
        backgroundColor: '#232423',
        height: Dimensions.get('window').height,
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
        textAlign: 'center',
        padding: 10,
        color: '#fff'

        
    },

    textTitle:
    {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'rgb(73, 88, 220)',
        marginTop: 20,
        padding: 5,
    }


});
export default Info