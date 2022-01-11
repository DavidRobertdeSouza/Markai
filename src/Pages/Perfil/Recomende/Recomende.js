import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

export default function Recomende(navigation){
    return(
        <View style={style.background}>
            <View style={style.container}>
                <Text style={style.titulo}>Convide um amigo e ganhe R$20</Text>
                <Text style={style.url}>https://markai.com/app/playstore</Text>
                <Text style={style.descricao}>Compartilhe seu link para fazer a indicação e ganhar o bônus</Text>
                <TouchableOpacity style={style.botao}>
                    <Text style={style.txtBtn}>COPIAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center'
    },
    container:{
        marginTop: 20,
        width: '90%',
        elevation: 9,
        backgroundColor: '#FFF',
        paddingLeft: 10,
        paddingRight: 10
    },
    titulo:{
        fontSize: 16,
        color: '#545454',
        textAlign: 'center',
        marginTop: 8,
        borderBottomWidth: 1.5,
        borderBottomColor: '#ededed',
        paddingBottom: 8,
        fontWeight: 'bold'
    },
    url:{
        fontSize: 14,
        color: '#323232',
        marginTop: 8
    },
    descricao:{
        fontSize: 12,
        color: '#B2B2B2',
        marginTop: 2
    },
    botao:{
        backgroundColor: '#8F79BA',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 15,
        borderRadius: 4
    },
    txtBtn:{
        color: '#FFF',
        fontSize: 16,
        margin: 8
    }
})