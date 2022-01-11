import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default function({navigation}){
    return(
        <View style={{flex: 1}}>
            <LinearGradient colors={['#583B90','#8F79BA','#9F8CC4','#C7BCDD','#FFFFFF']} style={styles.linearGradient}>
                <Text
                    style={{
                        color: '#FFF',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}
                >
                    Senha alterada com sucesso
                </Text>
            </LinearGradient>           
        </View>
    )
}

export const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
})