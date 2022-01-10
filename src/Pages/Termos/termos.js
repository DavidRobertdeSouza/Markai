import React, {useState, useRef} from 'react'
import {View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import * as Animatable from 'react-native-animatable'

export default function Termos({navigation}){
    return(
        <View style={styles.background}>
            <View style={styles.viewHeader}>
                <Text style={styles.textHeader}>Termos e condições de uso</Text>
            </View>
            <View style={styles.viewInput}>
                <ScrollView style={styles.Scroll} alignItems='center'>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor id aliquet lectus proin nibh nisl. Lacus luctus accumsan tortor posuere ac ut. Sit amet nisl suscipit adipiscing bibendum. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Ut pharetra sit amet aliquam id diam maecenas. Interdum velit euismod in pellentesque massa placerat duis. Arcu felis bibendum ut tristique. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Ultrices dui sapien eget mi proin sed libero enim. Aliquam nulla facilisi cras fermentum odio eu.

Suscipit tellus mauris a diam. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Lacus vestibulum sed arcu non odio euismod lacinia. Risus sed vulputate odio ut enim blandit. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Id consectetur purus ut faucibus pulvinar elementum integer. Urna nec tincidunt praesent semper. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus turpis in eu mi. Auctor elit sed vulputate mi sit amet mauris commodo. Gravida rutrum quisque non tellus. Mattis enim ut tellus elementum sagittis vitae et. Orci eu lobortis elementum nibh tellus.

Donec enim diam vulputate ut pharetra sit amet aliquam. Pretium nibh ipsum consequat nisl vel pretium lectus quam. Gravida neque convallis a cras semper auctor neque vitae. Dui faucibus in ornare quam viverra orci. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Risus viverra adipiscing at in tellus integer. Turpis massa sed elementum tempus egestas sed sed risus pretium. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Eget nullam non nisi est sit amet facilisis. Nibh mauris cursus mattis molestie a iaculis at.

Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Augue neque gravida in fermentum et. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Facilisis volutpat est velit egestas dui id ornare arcu odio. Est ante in nibh mauris cursus. Tincidunt tortor aliquam nulla facilisi. Eu ultrices vitae auctor eu augue ut lectus. Eleifend donec pretium vulputate sapien. Iaculis at erat pellentesque adipiscing commodo. Ullamcorper morbi tincidunt ornare massa eget.

Ipsum consequat nisl vel pretium. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Eu augue ut lectus arcu bibendum at varius. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Condimentum vitae sapien pellentesque habitant morbi tristique. Ipsum dolor sit amet consectetur. Mauris cursus mattis molestie a iaculis. Nisl nunc mi ipsum faucibus vitae aliquet. Blandit libero volutpat sed cras ornare. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. Nibh tellus molestie nunc non blandit massa enim nec. Sed faucibus turpis in eu mi bibendum neque egestas.</Text>
                </ScrollView>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('CadastroCriado')}>
                    <Animatable.View 
                    style={styles.botao1} 
                    >
                        <Text style={styles.btnText1}>CONCORDO</Text>
                    </Animatable.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Animatable.View 
                    style={styles.botao2} 
                    >
                        <Text style={styles.btnText2}>NÃO CONCORDO</Text>
                    </Animatable.View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}


export const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    viewHeader:{
        backgroundColor: '#8F79BA',
        height: '30%',
        width: '100%',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    textHeader:{
        fontSize: 24,
        color: '#FFF',
        marginBottom: '8%'
    },
    viewInput:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    botao1:{
        backgroundColor: '#8F79BA',
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        width: '100%'
    },
    botao2:{
        backgroundColor: '#fff',
        height: 48,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#8F79BA',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        width: '100%'
    },
    btnText1:{
        color: '#FFF',
        letterSpacing: 1.25,
        fontSize: 16
    },
    btnText2:{
        color: '#8F79BA',
        letterSpacing: 1.25,
        fontSize: 16
    },
    Scroll:{
        width: '95%',
    },
})