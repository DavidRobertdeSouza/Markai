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
            <Text style={styles.textHeader}>Trocar a senha</Text>
        </View>
        <View style={styles.viewInput}>
            <Text style={styles.text}>Insira uma nova senha</Text>
            <TextInput 
                style={styles.input}
                placeholder='*********'
                autoCorrect={false}
                onChangeText={() => {}}
                keyboardType='default'
                secureTextEntry={true}
            />
            <Text style={styles.text}>Confirme a nova senha</Text>
            <TextInput 
                style={styles.input}
                placeholder='*********'
                autoCorrect={false}
                onChangeText={() => {}}
                keyboardType='default'
                secureTextEntry={true}
            />
            
            <TouchableWithoutFeedback onPress={() => navigation.navigate('TelaValidacao')}>
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