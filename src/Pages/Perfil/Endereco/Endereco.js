import React, {useState} from 'react'
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/AntDesign'


export default function Login({navigation}){
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    //modal-blur
    const [isModalVisible, setModalVisible] = useState(false)
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }


    return(
        <View style={styles.background}> 
            <View style={styles.viewInput}>
                <Text style={styles.textTitulo}>CEP:</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder='Insira o número do CEP'
                    autoCorrect={false}
                    onChangeText={() => {}}
                    keyboardType='email-address'
                />
                <Text style={styles.textTitulo}>Rua:</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder='Insira o nome da rua'
                    autoCorrect={false}
                    onChangeText={() => {}}
                    autoCapitalize='none'
                    secureTextEntry={true}
                />
                <Text style={styles.textTitulo}>Número:</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder='Insira o número do local'
                    autoCorrect={false}
                    onChangeText={() => {}}
                    autoCapitalize='none'
                    secureTextEntry={true}
                />
                <Text style={styles.textTitulo}>Bairro:</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder='Insira o nome do bairro'
                    autoCorrect={false}
                    onChangeText={() => {}}
                    autoCapitalize='none'
                    secureTextEntry={true}
                />
                <Text style={styles.textTitulo}>Complemento:</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder='Insira uma informação adicional'
                    autoCorrect={false}
                    onChangeText={() => {}}
                    autoCapitalize='none'
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.btnEntrar} onPress={toggleModal} activeOpacity={0.8}>
                    <Text style = {{textAlign: 'center', color: '#FFF', fontSize: 16}}>SALVAR</Text>
                </TouchableOpacity>
                <Modal 
                    animationIn={'bounceInUp'}
                    backdropOpacity={0.7}
                    isVisible={isModalVisible}
                    animationInTiming={700}
                >
                    <View style={styles.outerView}>
                        <View style={styles.viewModal}>
                                <View style={{width: '8%'}}>
                                    <Icon 
                                        name= 'checkcircleo' 
                                        color={'#92DA79'} 
                                        size={19} 
                                        style={styles.icone}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.txtTitulo}>
                                        Eba!
                                    </Text>
                                    <Text style={styles.txtDescModal}>
                                        Dados alterado com sucesso
                                    </Text>
                                </View>
                        </View>
                    </View>
                </Modal>
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
        width: '85%',
        marginTop: 10
    },
    textInput:{
        borderBottomWidth: 0.9,
        borderColor: '#000',
        paddingLeft: 18,
        paddingBottom: -2
    },
    textTitulo:{
        marginTop: 20,
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
      },
      outerView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      },
      viewModal:{
          backgroundColor: '#FFF',
          borderRadius: 4,
          padding: 15,
          width: '95%',
          borderLeftWidth: 5,
          borderLeftColor: '#92DA79',
          flexDirection: 'row'
      },
      btnText:{
        color: '#FFF',
        letterSpacing: 1.25,
        fontSize: 16,
      },
      txtTitulo:{
          fontSize: 16,
          color: '#545454',
      },
      txtDescModal:{
          color: '#B2B2B2',
          fontSize: 14,
      },
      botao:{
        backgroundColor: '#8F79BA',
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        marginBottom: 40
      },
      icone:{
          marginTop: 1
      }
})