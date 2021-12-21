import React, {useEffect, useState} from 'react'
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Animated} from 'react-native'
import LottieView from 'lottie-react-native'
import LinearGradient from 'react-native-linear-gradient';

export default function CadastroCriado(){
    const [altura, setAltura] = useState(new Animated.Value(0));

    Animated.timing(
        altura,
        {
            duration: 400,
            toValue: 1
        }
    ).start()


    return(
        <Animated.View style={{flex: altura}}>
            <LinearGradient colors={['#583B90','#8F79BA','#9F8CC4','#C7BCDD','#FFFFFF']} style={styles.linearGradient}>
                <Text style={styles.txt}>Conta criada com sucesso</Text>
                <LottieView resizeMode='contain' autoSize source={require('../../Images/concluido.json')} autoPlay loop/>
            </LinearGradient>
        </Animated.View>
    )
}

export const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    txt:{
        color: '#FFF',
        fontSize: 24,
        margin: 20
    }, 
})