import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useRef} from 'react'
import {View, Text, TextInput, TouchableWithoutFeedback} from 'react-native'
import * as Animatable from 'react-native-animatable'
import {styles} from '../styleStep'


export default function Step1C({navigation}){

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
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Step2C')}>
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