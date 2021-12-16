import React from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import {styles} from '../styleStep'


export default function Step3C(){
    return(
        <View style={styles.background}>
            <View style={styles.viewHeader}>
                <Text style={styles.textHeader}>Etapa 03 de 07</Text>
            </View>
            <View style={styles.viewInput}>
                <Text style={styles.text}>Insira o número do CPF</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='123.456.789-00'
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