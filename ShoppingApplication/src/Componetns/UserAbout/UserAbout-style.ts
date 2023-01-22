import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "#F9AA33",
        paddingVertical: 15,
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 10
    },
    editbutton: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        borderRadius: 50,
        marginLeft: 25,
        marginRight: 10
    },
    innercontainer: {
        justifyContent: 'center'
    },
    innercontainers: {
        flexDirection: 'row',
    },
    titletext: {
        color: '#232F34'
    },
    text: {
        color: '#4A6572',
        marginLeft: 5
    }
})