import React, {useState, useRef} from 'react'
import {View, Text, TextInput, TouchableWithoutFeedback} from 'react-native'
import * as Animatable from 'react-native-animatable'
import {styles} from '../styleStep'


export default function Step4E(){
    const ButtonRef = useRef();

    return(
        <View style={styles.background}>
            <View style={styles.viewHeader}>
                <Text style={styles.textHeader}>Etapa 04 de 08</Text>
            </View>
            <View style={styles.viewInput}>
                <Text style={styles.text}>CEP</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='12578-570'
                    autoCorrect={false}
                    onChangeText={() => {}}
                />
                <TouchableWithoutFeedback onPress={() => ButtonRef.current.bounceOutRight()}>
                    <Animatable.View 
                    style={styles.botao} 
                    animation='bounceInLeft' 
                    useNativeDriver 
                    duration={1000}
                    ref={ButtonRef}
                    >
                        <Text style={styles.btnText}>CONFIRMAR</Text>
                    </Animatable.View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}