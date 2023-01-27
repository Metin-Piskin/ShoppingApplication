import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
        borderColor: "#F9AA33"
    },
    image: {
        width: 85,
        height: 100,
        resizeMode: 'contain',
        borderRadius: 15
    },
    title: {
        color: '#4A6572',
        maxWidth: 84,
        textAlign: 'center',
    },
    puancontainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    puantext: {},
    price: {
        textAlign: 'center',
        fontSize: 16
    },
})