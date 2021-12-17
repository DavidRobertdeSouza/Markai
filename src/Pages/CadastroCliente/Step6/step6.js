import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import {Dropdown} from 'react-native-element-dropdown'
import {styles} from '../styleStep'

export default function Step6C(){
    const data =[
        {label: 'Masculino', value: 'M'},
        {label: 'Feminino', value: 'F'},
        {label: 'Prefiro não informar', value: 'I'}
    ]
    
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return(
        <View style={styles.background}>
            <View style={styles.viewHeader}>
                <Text style={styles.textHeader}>Etapa 06 de 07</Text>
            </View>
            <View style={styles.viewInput}>
                <Text style={styless.label}> Insira seu gênero</Text>
                <Dropdown 
                    style={[styless.dropdown]}
                    placeholderStyle={styless.placeholderStyle}
                    data={data}
                    maxHeight={170}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Nenhum selecionado' : '...'}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                />
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.btnText}>CONFIRMAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styless = StyleSheet.create({
    dropdown: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        paddingHorizontal: 8,
      },
      label: {
        color: '#1F1F1F',
        fontSize: 16,
        bottom: 5,
        zIndex: 999,
        paddingHorizontal: 8,
      },
      placeholderStyle: {
        fontSize: 16,
      },
})