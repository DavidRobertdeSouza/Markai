import {StyleSheet} from 'react-native'

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
        margin: 20
    },
    text:{
        color: '#1F1F1F',
        fontSize: 16,
        marginBottom: 5
    },
    input:{
        borderBottomWidth: 1,
        borderColor: '#000',
        paddingLeft: 18,
        paddingBottom: -2,
    },
    botao:{
        backgroundColor: '#8F79BA',
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 76
    },
    btnText:{
        color: '#FFF',
        letterSpacing: 1.25,
        fontSize: 16
    }
})