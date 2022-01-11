import React, {useState, useRef} from 'react'
import {View, Text, TextInput, TouchableWithoutFeedback} from 'react-native'
import * as Animatable from 'react-native-animatable'
import {styles} from '../styleStep'


export default function Step7C({navigation}){

    return(
        <View style={styles.background}>
            <View style={styles.viewHeader}>
                <Text style={styles.textHeader}>Etapa 07 de 07</Text>
            </View>
            <View style={styles.viewInput}>
                <Text style={styles.text}>Insira uma senha</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='***********'
                    secureTextEntry={true}
                    autoCorrect={false}
                    onChangeText={() => {}}
                    autoCapitalize='none'
                    
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