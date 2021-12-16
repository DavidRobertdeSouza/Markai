import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import {Dropdown} from 'react-native-element-dropdown'
import {styles} from '../styleStep'

export default function Step6C(){
    const data =[
        {label: 'Masculino', value: 'M'},
        {label: 'Feminino', value: 'F'},
        {label: 'Prefiro não informar', value: 'I'}
    ]
    
    const DropdownComponent = () =>{
        const [value, setValue] = useState(null);
        const [isFocus, setIsFocus] = useState(false);
    
        const renderLabel = () => {
            if (value || isFocus) {
                return(
                    <Text style={[styles.label, isFocus && {color: 'blue'}]}>
                        Dropdown label
                    </Text>
                )
            }
            return null;
        }
    }

    return(
        <View style={styles.background}>
            <View style={styles.viewHeader}>
                <Text style={styles.textHeader}>Etapa 06 de 07</Text>
            </View>
            <View style={styles.viewInput}>
                <Text style={styles.text}>Insira seu gênero</Text>
                <Dropdown 
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select item' : '...'}
                    searchPlaceholder="Search..."
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