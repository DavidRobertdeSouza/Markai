import React, {useState} from 'react'
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import billgates from '../../Images/logo.png'

export default function Login({navigation}){
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return(
        <View style={styles.background}> 
            <View style={styles.viewLogo}>
                <Image style={styles.image} source={require=(billgates)}/>
            </View>
            <View style={styles.viewInput}>
                <Text style={styles.textEmail}>Email</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder='debra.holt@example.com'
                    autoCorrect={false}
                    onChangeText={() => {}}
                    keyboardType='email-address'
                />
                <Text style={styles.textEmail}>Senha</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder='***************'
                    autoCorrect={false}
                    onChangeText={() => {}}
                    autoCapitalize='none'
                    secureTextEntry={true}
                />
                <View style={styles.viewCheck}>
                    <View style={{flexDirection: 'row'}}>
                        <CheckBox 
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={{fontSize: 12, top: 8}}>Lembrar a senha</Text> 
                    </View> 
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('InserirTelefone')}>
                        <Text style ={{fontSize: 12, top: 8, color:'#8F79BA'}}>Esqueci a senha </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnEntrar} onPress={() => navigation.navigate('MyTabs')} activeOpacity={0.8}>
                    <Text style = {{textAlign: 'center', color: '#FFF', fontSize: 16}}>ENTRAR</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', marginTop: 24, justifyContent: 'center'}}>
                    <Text style= {{fontSize: 16, textAlign: 'center'}}>Se ainda n??o ?? membro, </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('TipoCadastro')}
                    >
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
        alignItems: 'center',
    },
    viewInput:{
        width: '85%'
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
        marginTop: 5,
        justifyContent: 'space-between'
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
      image:{
          height: 270,
          width: 255,
          marginTop: 60,
          marginBottom: 30
      }
})