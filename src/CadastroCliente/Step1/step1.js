import React from 'react'
import {View, StyleSheet, Text} from 'react-native'


export default function Step1C(){
    return(
        <View style={styles.background}>
            <View style={styles.viewHeader}>
                <Text style={styles.textHeader}>Etapa 01 de 07</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center'
    },
    viewHeader:{
        backgroundColor: '#8F79BA',
        height: '30%',
        width: '100%',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        alignItems: 'center'
    },
    textHeader:{
        fontSize: 24,
        color: '#FFF',
    }
})