import React from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import {styles} from '../styleStep'


export default function Step5C(){
    return(
        <View style={styles.background}>
            <View style={styles.viewHeader}>
                <Text style={styles.textHeader}>Etapa 05 de 07</Text>
            </View>
            <View style={styles.viewInput}>
                <Text style={styles.text}>Insira sua data de nascimento</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='01/07/2021'
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