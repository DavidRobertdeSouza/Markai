import React from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import {styles} from '../styleStep'


export default function Step1C(){
    return(
        <View style={styles.background}>
            <View style={styles.viewHeader}>
                <Text style={styles.textHeader}>Etapa 01 de 07</Text>
            </View>
            <View style={styles.viewInput}>
                <Text style={styles.text}>Insira o seu nome</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Ex.: José Mario da Silva'
                    autoCorrect={false}
                    onChangeText={() => {}}
                />
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.btnText}>CONFIRMAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}