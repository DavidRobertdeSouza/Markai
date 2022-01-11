import React from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    TextInput,
} from 'react-native';
import {styles} from '../styleRecuperar'
import * as Animatable from 'react-native-animatable'


export default function InserirTelefone({navigation}){
    return(
        <View style={styles.background}>
        <View style={styles.viewHeader}>
            <Text style={styles.textHeader}>Recuperar senha</Text>
        </View>
        <View style={styles.viewInput}>
            <Text style={styles.text}>Insira o número de telefone para receber o código</Text>
            <TextInput 
                style={styles.input}
                placeholder='(11) 99999-9999'
                autoCorrect={false}
                onChangeText={() => {}}
                keyboardType='phone-pad'
            />
            
            <TouchableWithoutFeedback onPress={() => navigation.navigate('InserirCodigo')}>
                <Animatable.View 
                style={styles.botao} 
                >
                    <Text style={styles.btnText}>ENVIAR CÓDIGO</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
        </View>
    </View>
    )
}