import React, {useState, useRef} from 'react'
import {View, Text, TextInput, TouchableWithoutFeedback} from 'react-native'
import * as Animatable from 'react-native-animatable'
import {styles} from '../styleStep'


export default function Step8E({navigation}){

    return(
        <View style={styles.background}>
            <View style={styles.viewHeader}>
                <Text style={styles.textHeader}>Etapa 08 de 08</Text>
            </View>
            <View style={styles.viewInput}>
                <Text style={styles.text}>Telefone</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='(12) 99999-9999'
                    autoCorrect={false}
                    onChangeText={() => {}}
                    keyboardType='phone-pad'
                />
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Termos')}>
                    <Animatable.View 
                    style={styles.botao}
                    >
                        <Text style={styles.btnText}>CONFIRMAR</Text>
                    </Animatable.View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}