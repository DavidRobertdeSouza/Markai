import React, {useState} from 'react'
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native'

export default function TipoCadastro(){
    return(
        <View style={styles.background}>
            <Text style={styles.TitlePage}>Como você deseja se cadastrar?</Text>
            <View style={styles.container}>
                <View style={styles.viewContainerImage}>
                <Image 
                    source={require('../../Images/Cliente.png')}
                />
                <TouchableOpacity style={styles.btnProps}>
                    <Text style={styles.btnText}>SOU CLIENTE</Text>
                </TouchableOpacity>
                
                </View>
                <View style={styles.viewContainerImage}>
                <Image
                    source={require('../../Images/Profissional.png')}/>
                <TouchableOpacity style={styles.btnProps}>
                    <Text style={styles.btnText}> SOU PROFISSIONAL</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    TitlePage:{
        fontFamily: 'Roboto-Black',
        color: '#3F3D56',
        fontSize: 23,
        marginBottom: 25
    },
    viewContainerImage:{
        flex: 0.47
    },
    btnProps:{
        color: '#FFF',
        height: 48,
        backgroundColor: '#8F79BA',
        borderRadius: 4,
        justifyContent: 'center',
        marginTop: 20,
        margin: 5
    },
    btnText:{
        color: '#FFF',
        textAlign: 'center'
    }
})