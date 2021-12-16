import React, {useState} from 'react'
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import CheckBox from '@react-native-community/checkbox'

export default function Login(){
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return(
        <View style={styles.background}>
            <View style={styles.viewLogo}>
                <Text>Teste</Text>
            </View>
            <View style={styles.viewInput}>
                <Text style={styles.textEmail}>Email</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder='debra.holt@example.com'
                    autoCorrect={false}
                    onChangeText={() => {}}
                />
                <Text style={styles.textEmail}>Senha</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder='***************'
                    autoCorrect={false}
                    onChangeText={() => {}}
                />
                <View style={styles.viewCheck}>
                    <CheckBox 
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text style={{fontSize: 12, top: 8, marginRight: 135}}>Lembrar a senha</Text>  
                    <TouchableOpacity>
                        <Text style ={{fontSize: 12, top: 8, color:'#8F79BA'}}>Esqueci a senha </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnEntrar}>
                    <Text style = {{textAlign: 'center', color: '#FFF', fontSize: 16}}>ENTRAR</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', marginTop: 24, justifyContent: 'center'}}>
                    <Text style= {{fontSize: 16, textAlign: 'center'}}>Se ainda não é membro, </Text>
                    <TouchableOpacity>
                        <Text style={styles.registerText}>
                            cadastre-se
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center'
    },
    viewLogo:{
        flex: 1
    },
    viewInput:{
        flex: 1
    },
    textInput:{
        borderBottomWidth: 1,
        borderColor: '#000',
        paddingLeft: 18,
        paddingBottom: -2
    },
    textEmail:{
        marginTop: 15,
        paddingLeft: 10,
        marginBottom: 2,
        fontSize: 16
    },
    viewCheck:{
        flexDirection: 'row',
        marginTop: 5
    },
    btnEntrar:{
        height: 48,
        backgroundColor: '#8F79BA',
        borderRadius: 4,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 56
    },
    registerText:{
        fontFamily: 'Roboto-Black',
        color: '#8F79BA',
        flexDirection: "row",
        fontSize: 16
      },
})