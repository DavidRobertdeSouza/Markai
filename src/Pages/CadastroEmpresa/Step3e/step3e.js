import React, {useState, useRef} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import {Dropdown} from 'react-native-element-dropdown'
import * as Animatable from 'react-native-animatable'
import {styles} from '../styleStep'

export default function Step3E({navigation}){
    const data =[
        {label: 'Fisioterapia', value: '1'},
        {label: 'Psicólogo', value: '2'},
        {label: 'Dentista', value: '3'},
        {label: 'Psiquiatra', value: '4'},
        {label: 'Médico', value: '5'},
        {label: 'Barbearia', value: '6'},
        {label: 'Salão de beleza', value: '7'},
        {label: 'Manicure', value: '8'},
        {label: 'Design de sobrancelha', value: '9'},
        {label: 'Depiladora', value: '10'}
    ]
    
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return(
        <View style={styles.background}>
            <View style={styles.viewHeader}>
                <Text style={styles.textHeader}>Etapa 03 de 08</Text>
            </View>
            <View style={styles.viewInput}>
                <Text style={styless.label}>Categoria</Text>
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
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Step4E')}>
                    <Animatable.View 
                    style={styles.botao} 
                    >
                        <Text style={styles.btnText}>CONFIRMAR</Text>
                    </Animatable.View>
                </TouchableWithoutFeedback>
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