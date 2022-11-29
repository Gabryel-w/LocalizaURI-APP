import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


function Help()
{
    return(
        <ScrollView>
             <Text style={styles.title}>
                <Ionicons name={'map'} size={30} color={'#fff'} />
                Localiza URI
            </Text>

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
   
    
    
});
export default Help