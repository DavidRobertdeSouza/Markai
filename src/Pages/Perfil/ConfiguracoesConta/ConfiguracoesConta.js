import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal'

export default function ConfiguracoesConta({navigation}) {
    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').width

    //switch
    const [isEnabled, setIsenabled] = useState(false)
    const toggleSwitch = () => setIsenabled(previousState => !previousState)

    //modal-blur
    const [isModalVisible, setModalVisible] = useState(false)
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }

 return (
   <View style={style.background}>
     <View style={style.viewOpcoes}>
        <TouchableOpacity style={style.button}>
          <Text style={style.txtButton}>Dados Pessoais</Text>
          <Icon style={style.icone} name='chevron-right' size={21}/>
        </TouchableOpacity>

        <TouchableOpacity style={style.button}>
          <Text style={style.txtButton}>Endereço</Text>
          <Icon style={style.icone} name='chevron-right' size={21}/>
        </TouchableOpacity>

        <TouchableOpacity style={style.button} onPress={toggleModal}>
          <Text style={style.txtButton}>Alterar senha</Text>
          <Icon style={style.icone} name='chevron-right' size={21}/>
        </TouchableOpacity>
        <Modal 
            animationIn={'bounceInUp'}
            backdropOpacity={0.7}
            isVisible={isModalVisible}
            animationInTiming={700}
        >
            <View style={style.outerView}>
                <View style={style.viewModal}>
                        <Text style={style.txtTitulo}>Você deseja alterar a senha?</Text>
                        <Text style={style.txtDescModal}>
                            Enviaremos um email com as instruções para a mudança de senha
                        </Text>
                        <TouchableOpacity style={style.botao} onPress={toggleModal}>
                            <Text style={style.btnText}>
                                ENVIAR
                            </Text>
                        </TouchableOpacity>
                </View>
            </View>
        </Modal>


        <TouchableOpacity style={style.button} activeOpacity={0.8}>
          <Text style={style.txtButton}>Notificações</Text>
          <Switch
            style={style.icone}
            trackColor={{false: '#C0334D', true: '#5CC67A'}}
            thumbColor={isEnabled ? '#00B031' : '#B00020'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />

        </TouchableOpacity>
     </View>
   </View>
  );
}

const style = StyleSheet.create({
  background:{
    backgroundColor: '#FFF',
    flex: 1,
  },
  viewPerfil:{
    flexDirection: 'row',
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40, 
    marginBottom: 20
  },
  image:{
    width: 60,
    height: 60,
    borderRadius: 90,
  },
  viewText:{
    justifyContent: 'center',
    marginLeft: 50
  },
  txtNome:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  txtTelefone:{
    fontSize: 14
  },
  viewOpcoes:{
    borderTopWidth: 2,
    borderColor: '#ededed',
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 50,
  },
  button:{
    flexDirection: 'row',
    borderColor: '#ededed',
    borderBottomWidth: 1.5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  txtButton:{
    color: '#545454',
    marginLeft: 15,
    fontSize: 16,
    marginBottom: 13,
  },
  icone:{
    marginBottom: 13,
    marginRight: 15
  },
  outerView:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  viewModal:{
      backgroundColor: '#FFF',
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      width: Dimensions.get('window').width
  },
  btnText:{
    color: '#FFF',
    letterSpacing: 1.25,
    fontSize: 16,
  },
  txtTitulo:{
      fontSize: 24,
      color: '#545454',
      textAlign: 'center',
      marginTop: 50
  },
  txtDescModal:{
      textAlign: 'center',
      color: '#B2B2B2',
      fontSize: 16,
      margin: 20
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
})