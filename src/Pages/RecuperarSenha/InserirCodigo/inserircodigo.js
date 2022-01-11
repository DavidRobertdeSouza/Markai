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
            <Text style={styles.textHeader}>Código de confirmação</Text>
        </View>
        <View style={styles.viewInput}>
            <Text style={styles.text}>Insira o código de confirmação</Text>
            <TextInput 
                style={styles.input}
                placeholder='888888'
                autoCorrect={false}
                onChangeText={() => {}}
                keyboardType='number-pad'
            />
            <View style={{
                flexDirection: 'row',
                justifyContent:'flex-end',
                marginTop: 2,                  
            }}>
                <Text>Reenviar código? </Text>
                <Text style={{color:'#583B90'}}>(0:45)</Text>
            </View>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('CadastroConfirmacao')}>
                <Animatable.View 
                style={styles.botao} 
                >
                    <Text style={styles.btnText}>VALIDAR</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
        </View>
    </View>
    )
}