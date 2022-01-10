import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import billgates from '../../Images/billgates.jpg'

export default function Perfil() {
 return (
   <View style={style.background}>
     <View style={style.viewPerfil}>
       <Image style={style.image} source={require=(billgates)}/>
        <View style={style.viewText}>
          <Text style={style.txtNome}>David Robert</Text>
          <Text style={style.txtTelefone}>(12) 99999-9999</Text>
        </View>
     </View>
     <View style={style.viewOpcoes}>
        <TouchableOpacity style={style.button}>
          <Text style={style.txtButton}>Recomende o Markai</Text>
          <Icon style={style.icone} name='chevron-right' size={21}/>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={style.txtButton}>Configuração da conta</Text>
          <Icon style={style.icone} name='chevron-right' size={21}/>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={style.txtButton}>Sair</Text>
          <Icon style={style.icone} name='chevron-right' size={21}/>
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
  }
})