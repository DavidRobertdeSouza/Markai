import React, {useState} from 'react'
import {Text, View, StyleSheet, TextInput} from 'react-native'
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
                <CheckBox 
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
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
        width: 363,
        height: 56,
        borderColor: '#000',
        paddingLeft: 10
    },
    textEmail:{
        marginTop: 10,
        paddingLeft: 10,
        marginBottom: 5
    },
})